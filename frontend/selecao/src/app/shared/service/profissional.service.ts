import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profissional } from '../model/Profissional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  apiUrl = "http://localhost:8080/profissional";

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getData(): Observable<Profissional>{
      return this.httpClient.get<Profissional>(this.apiUrl)
  }

  public postData(profissional:any): Observable<Profissional>{
    return this.httpClient.post<any>(this.apiUrl, profissional, this.HttpOptions);
  }
}
