import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { Tache } from 'src/app/models/taches.model';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-afficher-projet',
  templateUrl: './afficher-projet.component.html',
  styleUrls: ['./afficher-projet.component.scss']
})
export class AfficherProjetComponent implements OnInit{

  showForm  = false
  

  updatedTache! : Tache;


  tache : Tache = {
    nom: undefined,
    description: ''
  }
  projectId = this.activatedRoute.snapshot.params['id']
  
  projetId = this.activatedRoute.snapshot.paramMap.get('projetId');
  tacheId = this.activatedRoute.snapshot.paramMap.get('tacheId');


  constructor (private ps:ProjectsServiceService,
               private activatedRoute: ActivatedRoute,
               private router: Router) {


               }
  
  ngOnInit(): void {

    
  }

  updateTask(): void {
   
  }

  onClickForm() {
   this.showForm = !this.showForm
  }

  createTache(): void {
    this.ps.createTacheInProjectById(this.projectId, this.tache)
      .subscribe(
        (createdTache: Tache) => {
          console.log('Tache created:', createdTache);
        }, error => {
          console.log('Error creating Tache:', error);
        }
      );
  }

  


}
