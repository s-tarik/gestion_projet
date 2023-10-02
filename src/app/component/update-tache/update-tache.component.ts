import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from 'src/app/models/taches.model';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.scss']
})
export class UpdateTacheComponent implements  OnInit{

  ta : Tache = {
    nom: undefined,
    description: ''
  }

  tacheId = this.activatedRoute.snapshot.params['id'];
  constructor(
    private ps:ProjectsServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router    
    )
{}

ngOnInit(): void {

    this.getTache();
}

getTache(){

  this.ps.findTache(this.tacheId).subscribe(res=> {
    this.ta.nom = res.nom
    this.ta.description = res.description
  }, error =>{
    console.log(error)
  })
}

ChangeTache() {
    this.ps.updateTache(this.tacheId, this.ta).subscribe(res=> {
      console.log("success")
    }, error =>{
      console.log(error)
    })
}

}
