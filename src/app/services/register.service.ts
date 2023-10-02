import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private API_URL2 = 'http://localhost:8084/api/v1/auth'

  constructor(private http : HttpClient) { }

  register(userRegistrationData : any): Observable<any>{
    const url = `${this.API_URL2}/register`;
    return this.http.post(url, userRegistrationData);
  }
}
