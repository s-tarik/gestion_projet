import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { em } from '@fullcalendar/core/internal-common';
import { employees } from 'src/app/models/employees.model';
import { RessourcesService } from 'src/app/services/ressources.service';

@Component({
  selector: 'app-list-humains',
  templateUrl: './list-humains.component.html',
  styleUrls: ['./list-humains.component.scss']
})
export class ListHumainsComponent implements OnInit{
  @Input() employees!: employees[];
  @Output() onEdit = new EventEmitter<employees>();

  employee: employees[] = [];


  constructor(
    private ressourceService:RessourcesService, 
    )
{}

ngOnInit():void{  
    this.AllHumains();
}

AllHumains(){
  this.ressourceService.getAllHumaines()
  .subscribe(
    res => {
      this.employee = res;
    }, error => {
      console.log(error)
    }
  )
}

// updateHumain(h: employees): void{
//   this.ressourceService.updateHumaine(h).subscribe(
//    res => { console.log('tache updated', res);
//  }
//   )
//  }  

 onDelete(id: any){
  let v=confirm("Êtes-vous sûre??");
    if (v==true)
    this.ressourceService.deleteHumaine(id).subscribe(
      res => {
       this.AllHumains();
      }
    )
}

editHumain(employee: employees): void{
  this.onEdit.emit(employee);
}

}
