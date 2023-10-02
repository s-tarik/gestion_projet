import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {
  readonly API_URL = 'http://localhost:8084'
  readonly ENDPOINT_RESSOURCES = '/ressources'

  constructor(private httpClient : HttpClient) { }
}
