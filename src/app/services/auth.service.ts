import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  roles :  any;
  email: any;  
  API_URL = 'http://localhost:8084/api/v1/auth/authenticate'
  

  

  constructor(private http: HttpClient) { }

  public login(email : string, password: string){
    return this.http.post<any>(this.API_URL, { email, password });
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null && token !== undefined;
  }

  authUser(token: string): Observable<boolean> {
    this.setToken(token)
    return of(true)
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

}
