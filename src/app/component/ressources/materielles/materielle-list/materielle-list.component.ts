import { Component, EventEmitter, Input, Output } from '@angular/core';
import { equipements } from 'src/app/models/equipements.model';
import { RessourcesService } from 'src/app/services/ressources.service';

@Component({
  selector: 'app-materielle-list',
  templateUrl: './materielle-list.component.html',
  styleUrls: ['./materielle-list.component.scss']
})
export class MaterielleListComponent {
  @Input() equipements!: equipements[];
  @Output() onEdit = new EventEmitter<equipements>();

  equipement: equipements[] = [];


  constructor(
    private ressourceService:RessourcesService, 
    )
{}

ngOnInit():void{  
    this.AllMaterielles();
}

AllMaterielles(){
  this.ressourceService.getAllMaterielle()
  .subscribe(
    res => {
      this.equipement = res;
    }, error => {
      console.log(error)
    }
  )
}

updateHumain(m: equipements): void{
  this.ressourceService.updateMaterielle(m).subscribe(
   res => { console.log('ressource updated', res);
 }
  )
 }  

 onDelete(id: any){
  let v=confirm("Êtes-vous sûre??");
    if (v==true)
    this.ressourceService.deleteMaterielle(id).subscribe(
      res => {
       this.AllMaterielles();
      }
    )
}

editTache(equipement: equipements): void{
  this.onEdit.emit(equipement);
}

}
