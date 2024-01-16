import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ressources } from 'src/app/models/ressources.model';
import { RessourcesService } from 'src/app/services/ressources.service';

@Component({
  selector: 'app-list-ressources',
  templateUrl: './list-ressources.component.html',
  styleUrls: ['./list-ressources.component.scss']
})
export class ListRessourcesComponent implements OnInit{
  @Input() ressources!: Ressources[];
  @Output() onEdit = new EventEmitter<Ressources>();

  ressource: Ressources[] = [];
  projectId!:number

  constructor(private ressourceService: RessourcesService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {}

  ngOnInit():void{
    this.ressourceService.getAllRessources().subscribe((data) => {
      this.ressource = data
    })
    this.activatedRoute.params.subscribe((params) => {
      this.projectId = params['projectId'];
      this.loadRessourcesByProject();
    })
    this.AllRessources();
   
  }

  loadRessourcesByProject(): void {
    this.ressourceService.getRessourceByProjectId(this.projectId).subscribe((data) => {
      this.ressource = data
    })
  
  }

  AllRessources(){
    this.ressourceService.getAllRessources()
    .subscribe(
     res => {
       this.ressource = res;
     }, error => {
       console.log(error)
     }
    )
   }

   editRessource(ressourceId: any):void{
    const  ProjectId = this.activatedRoute.snapshot.params['projectId']
    this.route.navigate(['/ressources', ressourceId, 'projects', ProjectId])
  }

  deleteRessource(ressourceId: any): void {
    this.ressourceService.deleteRessource(ressourceId).subscribe(() => {
      alert('êtes-vous sûr??')
      //location.reload()
      alert('La tâche a été supprimée avec succès')
      this.ressource = this.ressource.filter(item => item.id !== ressourceId);
    })
  }


  // AllRessources(){
  //   this.ressourceService.getAllRessources()
  //   .subscribe(
  //     res => {
  //       this.ressource = res;
  //       console.log(res)
  //     }, error => {
  //       console.log(error)
  //     }
  //   )
  // }

  // updateRessource(r: Ressources): void {
  //   this.ressourceService.updateRessource(r).subscribe(
  //     res => {console.log('ressource updated', res);}
  //   )
  // }

  // onDelete(id: any) {
  //   let v=confirm("Êtes-vous sûre??");
  //   if (v==true)
  //   this.ressourceService.deleteRessouces(id).subscribe(
  //     res => {
  //      this.AllRessources();
  //     }
  //   )
  // }

  // editRessource(ressource: Ressources): void{
  //   this.onEdit.emit(ressource);
  // }
  

}
