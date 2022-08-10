import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})




export class BalonService {

  constructor(private httpClient: HttpClient) { }

  public getBalones(){
    return this.httpClient.get('http://127.0.0.1:8000/balones/');
  }

  public agregarBalon(Lleno: boolean, marcaDeEmpresa: string, Tipo: string) {
    return this.httpClient.post('http://127.0.0.1:8000/balones/', {
      Lleno: Lleno,
      marcaDeEmpresa: marcaDeEmpresa,
      Tipo: Tipo,
    })
  }

}
