import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estabelecimento } from '../model/Estabelecimento.model';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  apiUrl = "http://localhost:8080/estabelecimento";

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getData(): Observable<Estabelecimento[]>{
      return this.httpClient.get<Estabelecimento[]>(this.apiUrl)
  }

  public postData(estabelecimento:any): Observable<Estabelecimento>{
    return this.httpClient.post<any>(this.apiUrl, estabelecimento, this.HttpOptions);
  }

  public getById(id: number){
    return this.httpClient.get<Estabelecimento>(this.apiUrl+"/"+id+"/estabelecimento");
  }

  public update(id: number, estabelecimento: Estabelecimento): Observable<Object>{
    return this.httpClient.put(this.apiUrl+"/"+id+"/update", estabelecimento);
  }

  public delete(id:number){
    return this.httpClient.delete(this.apiUrl+"/"+id+"/delete");
  }
}
