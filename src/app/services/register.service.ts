import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { utilisateur } from '../models/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private API_URL2 = 'http://localhost:8084/api/enregistrement'

  constructor(private http : HttpClient) { }

  // register(userRegistrationData : any): Observable<any>{
  //   const url = `${this.API_URL2}/register`;
  //   return this.http.post(url, userRegistrationData);
  // }

  createUser(utilisateur: any): Observable<utilisateur>{
    return this.http.post<utilisateur>(this.API_URL2, utilisateur)
  }

  login(email: string, password: string): Observable<any> {
    const user = { email, password };
    return this.http.post<any>(`${this.API_URL2}/login`, user, {responseType: 'json'});
  }


}
