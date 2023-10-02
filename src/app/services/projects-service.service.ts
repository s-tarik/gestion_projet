import { Injectable } from '@angular/core';
import { Project } from '../models/projects.model';
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

  constructor(private httpClient: HttpClient, private authService: AuthService) {

   }


   

   getAll() : Observable<Project[]>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    return this.httpClient.get<Project[]>(`${this.API_URL}/projets`, {headers})
    .pipe(
      catchError(error => throwError(error)));
      
   }

   addProject(data: any): Observable<any>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.post(this.API_URL + this.ENDPOINT_Project, data, {headers})
   }

   deleteProject(id: number): Observable<any>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.delete(`${this.API_URL + this.ENDPOINT_Project}/${id}`, {headers})
   }

   findProject(id: any): Observable<Project>{
    return this.httpClient.get<Project>(`${this.API_URL + this.ENDPOINT_Project}/${id}`)
   } 

   findTache(id: any): Observable<Tache>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    return this.httpClient.get<Tache>(`${this.API_URL + this.ENDPOINT_Tache}/${id}`, {headers})
   } 

   createTacheInProjectById(projectId: number, tache: Tache): Observable<Tache> {

    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    const url = `${this.API_URL}/taches/${projectId}`;
    return this.httpClient.post<Tache>(url, tache, {headers});
  }

  updateTache(TacheId: any, tahceModifiee: Tache): Observable<Tache> {
    const accessToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    return this.httpClient.put<Tache>(`${this.API_URL + this.ENDPOINT_Tache}/${TacheId}`, tahceModifiee, {headers});

  }

  updateTask(projetId: number, tacheId: number, updatedTache: Tache): Observable<Tache> {
    const accessToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    const url = `${this.API_URL}/projets/${projetId}/taches/${tacheId}`;
    return this.httpClient.put<Tache>(url, updatedTache, {headers});
  }


  getAllTaches(): Observable<Tache[]>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.get<Tache[]>(this.API_URL + this.ENDPOINT_Tache , {headers});
  }

  getProjectTaches(projectId: number): Observable<Tache[]>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    const url = `${this.API_URL}/projets/${projectId}/taches`;
    return this.httpClient.get<Tache[]>(url, {headers});
  }

}
