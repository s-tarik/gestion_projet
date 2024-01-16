import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Ressources } from '../models/ressources.model';
import { employees } from '../models/employees.model';
import { equipements } from '../models/equipements.model';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {
 readonly API_URL = 'http://localhost:8084'
 readonly ENDPOINT_Ressource = '/ressources'
  //readonly ENDPOINT_RESSOURCES = '/ressources'
  //readonly ENDPOINT_EMPLOYEE = '/employees'
  //readonly ENDPOINT_EQUIPEMENTS = '/equipements' 

  constructor(private httpClient : HttpClient) { 
  
  }

  //getAll() : Observable<Ressources[]>{
    //const accessToken = localStorage.getItem('token')

    //const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    //return this.httpClient.get<Ressources[]>(`${this.API_URL}/ressources`, {headers})
    //.pipe(
      //catchError(error => throwError(error))
    //);
  //}

  //findRessource(id: any): Observable<Ressources>{
    //const accessToken = localStorage.getItem('token')

    //const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    //return this.httpClient.get<Ressources>(`${this.API_URL + this.ENDPOINT_RESSOURCES}/${id}`, {headers})

  //}

  //addRessource(data: any): Observable<any> {
    //const accessToken = localStorage.getItem('token')

    //const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    //return this.httpClient.post(this.API_URL + this.ENDPOINT_RESSOURCES, data, {headers})
  //}

  //deleteRessource(id: number): Observable<any> {
    //const accessToken = localStorage.getItem('token')

    //const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    //return this.httpClient.delete(`${this.API_URL + this.ENDPOINT_RESSOURCES}/${id}`, {headers})
  //}

  //getAllEmployees(): Observable<employees[]>{
    //const accessToken = localStorage.getItem('token')

    //const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    
    //return this.httpClient.get<employees[]>(`${this.API_URL}/employees`, {headers})
  //}

  //addEmployees(data: any): Observable<any> {
    //const accessToken = localStorage.getItem('token')

    //const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    //return this.httpClient.post(this.API_URL +  this.ENDPOINT_EMPLOYEE, data, {headers})
  //}

  //deleteEmployee(id: number): Observable<any>{
    //const accessToken = localStorage.getItem('token')

    //const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    //return this.httpClient.delete(`${this.API_URL + this.ENDPOINT_EMPLOYEE}/${id}`, {headers})
  //}

  //findEmployees(id: any): Observable<employees>{
    //const accessToken = localStorage.getItem('token')

    //const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    //return this.httpClient.get<employees>(`${this.API_URL + this.ENDPOINT_EMPLOYEE}/${id}`, {headers})
  //}

  // getAllRessources(): Observable<Ressources[]>{
  //   return this.httpClient.get<Ressources[]>("http://localhost:3000/ressources")
  // }

  // deleteRessouces(ressources: Ressources): Observable<void> {
  //   return this.httpClient.delete<void>("http://localhost:3000/ressources"+ressources.id)
  // }

  // saveRessources(myForm:any): Observable<Ressources>{
  //   return this.httpClient.post<Ressources>("http://localhost:3000/ressources", myForm)
  // }

  // getRessource(id: number): Observable<Ressources>{
  //   return this.httpClient.get<Ressources>("http://localhost:3000/ressources"+id)
  // }

  // updateRessource(ressource: Ressources): Observable<Ressources>{
  //   return this.httpClient.put<Ressources>(`http://localhost:3000/ressources/${ressource.id}`, ressource);
  // }

  getAllRessources(): Observable<any[]>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.get<any[]>(`${this.API_URL + this.ENDPOINT_Ressource}`)
   }

   getRessourceById(ressourceId: any): Observable<Ressources>{
    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    return this.httpClient.get<Ressources>(`${this.API_URL + this.ENDPOINT_Ressource}/${ressourceId}`)
   } 

   createRessource(projectId: number, ressource: Ressources): Observable<Ressources> {

    const accessToken = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    // tache.projectId= projectId
    const url = `${this.API_URL}/ressources/projets/${projectId}`;
    return this.httpClient.post<Ressources>(url, ressource);
  }

  updateRessource(RessourceId: any, ressource: Ressources): Observable<Ressources> {
    const accessToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    return this.httpClient.put<Ressources>(`${this.API_URL + this.ENDPOINT_Ressource}/${RessourceId}`, ressource);

 }

 deleteRessource(ressourceId: number): Observable<Ressources>{
  const accessToken = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

  return this.httpClient.delete<Ressources>(`${this.API_URL + this.ENDPOINT_Ressource}/${ressourceId}`);
 }

 getRessourceByProjectId(projectId: number): Observable<any[]>{
  const accessToken = localStorage.getItem('token')

  const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
  const url = `${this.API_URL}/ressources/projets/${projectId}`;
  return this.httpClient.get<any[]>(url);
}

  getAllHumaines(): Observable<employees[]>{
    return this.httpClient.get<employees[]>("http://localhost:3000/Humaines")
  }

  deleteHumaine(id: any): Observable<void>{
    return this.httpClient.delete<void>(`http://localhost:3000/Humaines/${id}`)
  }

  saveHumaine(myHumain: any): Observable<employees>{
    return this.httpClient.post<employees>("http://localhost:3000/Humaines", myHumain)
  }

  getHumaine(id: number): Observable<employees>{
    return this.httpClient.get<employees>("http://localhost:3000/Humaines"+id)
  }

  updateHumaine(id: any, employees: any):Observable<any>{
    return this.httpClient.put<any>(`http://localhost:3000/Humaines/${id}`, employees);
  }

  getAllMaterielle(): Observable<equipements[]>{
    return this.httpClient.get<equipements[]>("http://localhost:3000/ressources/materielles")
  }

  deleteMaterielle(equipements: equipements): Observable<void>{
    return this.httpClient.delete<void>("http://localhost:3000/ressources/materielles"+equipements.id)
  }

  saveMaterielle(myMeteriel: any): Observable<equipements>{
    return this.httpClient.post<equipements>("http://localhost:3000/ressources/materielles", myMeteriel)
  }

  getMeterielle(id: number): Observable<employees>{
    return this.httpClient.get<employees>("http://localhost:3000/ressources/materielles"+id)
  }
  updateMaterielle(equipement: equipements):Observable<equipements>{
    return this.httpClient.put<equipements>(`http://localhost:3000/ressources/${equipement.id}`, equipement);
  }
}
