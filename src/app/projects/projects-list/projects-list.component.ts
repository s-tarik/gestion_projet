import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/projects.model';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects!: Projects[];
  @Output() onEdit = new EventEmitter<Projects>();
  project: Projects[] = [];

  constructor(
          private ps:ProjectsServiceService,
          private router: Router    
          )
   {}

  ngOnInit():void{
    this.AllProjects();
  }
  
  AllProjects(){
    this.ps.getAllProjects().subscribe(
      res => {
        this.project = res;
      }, error => {
        console.log(error)
      }
      
    )
  }

  // updateProject (id:any): void {
  //   // this.ps.updateProject(p).subscribe(
  //   //   res=>{ console.log('project updated:', res);
  //   //   }
  //   // )
  //   this.router.navigate(['/projects', id]);
  // }

 updateProject(id: any){
   this.router.navigate(["projects", id]);
  }

 AfficherProjet(projectId:any){
  //  this.router.navigate(['taches/projects/', id]);
   this.router.navigate(['taches/projects/', projectId]);
  }

  AfficherRessource(projectId:any){
    //  this.router.navigate(['taches/projects/', id]);
     this.router.navigate(['ressources/projects/', projectId]);
    }

  // onDelete(id: any){
  //   let v=confirm("Êtes-vous sûre??");
  //   if (v==true)
  //   this.ps.deleteProject(id).subscribe(
  //     res => {
  //      this.AllProjects();
  //     }
  //   )
  // }

  deleteProject(id: any){
    let v=confirm("Êtes-vous sûre??");
    if (v==true)
    this.ps.deleteProject(id).subscribe(
      res => {
        location.reload()
        console.log(res)
        alert("projet est supprimé avec succès")
      }
    )
  }

  editProject(project: Projects): void{
    this.onEdit.emit(project);
  }

}
