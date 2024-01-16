import { Injectable } from '@angular/core';
import { Projects } from '../models/projects.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Tache } from '../models/taches.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {
  readonly API_URL = 'http://localhost:8084'
  readonly ENDPOINT_Project = '/projets'
  readonly ENDPOINT_Tache= '/taches'
  // private data: any[] = [];


  constructor(private httpClient: HttpClient, private authService: AuthService) {

   }


   

   getAllProjects() : Observable<Projects[]>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    return this.httpClient.get<Projects[]>(`${this.API_URL}/projets`, {headers})
    .pipe(
      catchError(error => throwError(error)));
      
   }

   updateProject(projectId: any, project:Projects): Observable<Projects>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.put<Projects>(`${this.API_URL + this.ENDPOINT_Project}/${projectId}`, project, {headers})
   }



   addProject(data: any): Observable<any>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.post(this.API_URL + this.ENDPOINT_Project, data, {headers})
   }

   deleteProject(id: Projects): Observable<any>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.delete(`${this.API_URL + this.ENDPOINT_Project}/${id}`, {headers})
   }

   findProject(id: any): Observable<Projects>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.get<Projects>(`${this.API_URL + this.ENDPOINT_Project}/${id}`, {headers})
   } 

   getProject(id: any): Observable<Projects>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    return this.httpClient.get<Projects>(`${this.API_URL + this.ENDPOINT_Project}/${id}`, {headers})
   }

   getAllTaches(): Observable<any[]>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.get<any[]>(`${this.API_URL + this.ENDPOINT_Tache}`, {headers})
   }

   getTacheById(tacheId: any): Observable<Tache>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    return this.httpClient.get<Tache>(`${this.API_URL + this.ENDPOINT_Tache}/${tacheId}`)
   } 

   createTache(projectId: number, tache: Tache): Observable<Tache> {

    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    // tache.projectId= projectId
    const url = `${this.API_URL}/taches/projets/${projectId}`;
    return this.httpClient.post<Tache>(url, tache);
  }

  // createTache(tache: Tache, projectId: number): Observable<Tache> {
  //   return this.httpClient.post<Tache>{`${this.API_URL + this.ENDPOINT_Tache}/projets/${projectId}`, tache}
  // }

  updateTache(TacheId: any, tache: Tache): Observable<Tache> {
    const accessToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    return this.httpClient.put<Tache>(`${this.API_URL + this.ENDPOINT_Tache}/${TacheId}`, tache);

 }

 deleteTache(tacheId: number): Observable<Tache>{
  const accessToken = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

  return this.httpClient.delete<Tache>(`${this.API_URL + this.ENDPOINT_Tache}/${tacheId}`, {headers});
 }


  // updateTask(projetId: number, tacheId: number, updatedTache: Tache): Observable<Tache> {
  //  const accessToken = localStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

  //  const url = `${this.API_URL}/projets/${projetId}/taches/${tacheId}`;
  //  return this.httpClient.put<Tache>(url, updatedTache, {headers});
  // }



  getTacheByProjectId(projectId: number): Observable<any[]>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    const url = `${this.API_URL}/taches/projets/${projectId}`;
    return this.httpClient.get<any[]>(url, {headers});
  }



//   getAllProjects(): Observable<Projects[]>{
//     return this.httpClient.get<Projects[]>("http://localhost:3000/projects")
//   }

//   deleteProject(id:number): Observable<void>{
//     return this.httpClient.delete<void>("http://localhost:3000/projects/"+id);
//   }

//   save(myForm: any): Observable<Projects>{
//     return this.httpClient.post<Projects>("http://localhost:3000/projects", myForm);
//   }

//   getProject(id: number): Observable<Projects>{
//     return this.httpClient.get<Projects>("http://localhost:3000/projects/"+id);
//   }

//   updateProject(project: Projects): Observable<Projects> {
//      return this.httpClient.put<Projects>(`http://localhost:3000/projects/${project.id}`, project); 
//  }

//   getAllTaches(): Observable<Tache[]>{
//     return this.httpClient.get<Tache[]>("http://localhost:3000/taches")
//   }

//   deleteTache(id: number): Observable<void>{
//     return this.httpClient.delete<void>("http://localhost:3000/taches/"+id);
//   }

//   saveTache(myForm1: any): Observable<Tache>{
//     return this.httpClient.post<Tache>("http://localhost:3000/taches", myForm1);
//   }

//   getTache(id: number): Observable<Tache>{
//     return this.httpClient.get<Tache>("http://localhost:3000/taches/"+id);
//   }

//   updateTache(tache: Tache): Observable<Tache> {
//     return this.httpClient.put<Tache>(`http://localhost:3000/taches/${tache.id}`, tache); 
// }

   
}


