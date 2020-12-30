import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vinculo } from '../model/Vinculo.model';

@Injectable({
  providedIn: 'root'
})
export class VinculoService {

  apiUrl = "http://localhost:8080/vinculo";

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getData(): Observable<Vinculo[]>{
      return this.httpClient.get<Vinculo[]>(this.apiUrl)
  }

  public postData(vinculo:any): Observable<Vinculo>{
    return this.httpClient.post<any>(this.apiUrl, vinculo, this.HttpOptions);
  }

  public delete(id:number){
    return this.httpClient.delete(this.apiUrl+"/"+id+"/delete");
  }
}
