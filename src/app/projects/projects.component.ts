import { Component, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectsServiceService } from '../services/projects-service.service';
import { Project } from '../models/projects.model';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnChanges {
  project: Project = {
    nom: undefined,
    description: '',
    dateDebut: undefined,
    dateFin: undefined
  };

  showForm  = false
  label =  'Ajouter'
  id = this.activatedRoute.snapshot.params['id']

  constructor(
    private ps:ProjectsServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) 
  {}

  ngOnChanges() {
    
  }


  ngOnInit(): void {
    
    if(this.id) {
      this.showForm = true
      this.label = "Retourner"
    }
    this.activatedRoute.paramMap
      .pipe(
        switchMap(params => {
          const idProject = params.get('id');
          if (idProject) {
            return this.ps.findProject(idProject);
          }
          return of(null);
        })
      )
      .subscribe(res => {
        if (res) {
          this.project = res;
        } else {
          this.project = {
            nom: '',
            description: '',
            dateDebut: undefined,
            dateFin: undefined
          };
        }
      });
  }

  onClickForm() {
    if(this.id) {
      this.router.navigate(['/home/projects'])
    }
   this.showForm = !this.showForm
  }
addProjects(){

  this.ps.addProject(this.project).subscribe(res=> {
    location.reload()
    console.log(res)
  }, error =>{
    console.log(error)
  })
}

}
