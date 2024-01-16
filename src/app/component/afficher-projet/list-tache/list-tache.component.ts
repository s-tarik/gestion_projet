import { CSP_NONCE, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from 'src/app/models/taches.model';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.scss']
})
export class ListTacheComponent implements OnInit{
  @Input() taches!: Tache[];
  @Output() onEdit = new EventEmitter<Tache>();

  tache: Tache[] = [];
  projectId!: number;


 // projectId = this.activatedRoute.snapshot.params['id'];
  constructor(
    private ps:ProjectsServiceService,
    private activatedRoute: ActivatedRoute,  
    private route: Router,
    )
{}

ngOnInit():void{ 
  this.ps.getAllTaches().subscribe((data) => {
    this.tache = data
  })
  this.activatedRoute.params.subscribe((params) => {
    this.projectId = params['projectId'];
    this.loadTachesByProject();
  })
  this.AllTaches();
}
loadTachesByProject(): void {
  this.ps.getTacheByProjectId(this.projectId).subscribe((data) => {
    this.tache = data
  })

}


//updateProject(id:any){
  //this.router.navigate(['/taches', id]);
//}


//deleteProject(id: any){
  //this.ps.deleteProject(id).subscribe(
    //res => {
      //location.reload()
      //console.log(res)
    //}, error => {
      //console.log(error)
    //}
  //)
//}



AllTaches(){
       this.ps.getAllTaches()
       .subscribe(
        res => {
          this.tache = res;
        }, error => {
          console.log(error)
        }
       )
      }

      editTache(tacheId: any):void{
        const  ProjectId = this.activatedRoute.snapshot.params['projectId']
        this.route.navigate(['/taches', tacheId, 'projects', ProjectId])
      }

      deleteTache(tacheId: any): void {
        this.ps.deleteTache(tacheId).subscribe(() => {
          alert('êtes-vous sûr??')
          //location.reload()
          alert('La tâche a été supprimée avec succès')
          this.tache = this.tache.filter(item => item.id !== tacheId);
        })
      }

// updateTache(t: Tache): void{
//  this.ps.updateTache(t).subscribe(
//   res => { console.log('tache updated', res);
// }
//  )
// }  

// onDelete(id: any){
//   let v=confirm("Êtes-vous sûre??");
//     if (v==true)
//     this.ps.deleteTache(id).subscribe(
//       res => {
//        this.AllTaches();
//       }
//     )
// }

// editTache(tache: Tache): void{
//   this.onEdit.emit(tache);
// }

}
