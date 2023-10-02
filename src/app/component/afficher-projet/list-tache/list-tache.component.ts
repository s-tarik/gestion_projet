import { CSP_NONCE, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from 'src/app/models/taches.model';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.scss']
})
export class ListTacheComponent {

  TacheId ! : number

  tache: Tache[] = [];

  ta : Tache = {
    nom: undefined,
    description: ''
  }

  projectId = this.activatedRoute.snapshot.params['id'];
  constructor(
    private ps:ProjectsServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router    
    )
{}

ngOnInit():void{  
    this.AllTaches();
}


updateProject(id:any){
  this.router.navigate(['/home/updatetache', id]);
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



AllTaches(){
       this.ps.getProjectTaches(this.projectId)
       .subscribe(
        (response : Tache[])=>{
          this.tache = response;
          console.log(response)
        }, (error) => {
          console.error(error);
        }
       )
  
      }
}
