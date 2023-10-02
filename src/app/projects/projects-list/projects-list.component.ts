import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/projects.model';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  project: Project[] = [];

  constructor(
          private ps:ProjectsServiceService,
          private router: Router    
          )
   {}

  ngOnInit():void{
    this.AllProjects();
  }
  
  AllProjects(){
    this.ps.getAll().subscribe(
      res => {
        this.project = res
      }, error => {
        console.log(error)
      }
      
    )
  }

  updateProject(id:any){
    this.router.navigate(['/projects', id]);
  }

  AfficherProjet(id:any){
    this.router.navigate(['/AfficherProjet', id]);
  }

  deleteProject(id: any){
    this.ps.deleteProject(id).subscribe(
      res => {
        location.reload()
        console.log(res)
      }, error => {
        console.log(error)
      }
    )
  }
}
