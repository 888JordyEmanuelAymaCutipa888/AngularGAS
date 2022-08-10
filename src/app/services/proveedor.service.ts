import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private httpClient: HttpClient) { }

  public getProveedores(){
    return this.httpClient.get('http://127.0.0.1:8000/balones/');
  }

  public agregarProveedor(nombre : string, ruc : number, direccion : string ){
    return this.httpClient.post('http://127.0.0.1:8000/balones/', {
      nombre : nombre,
      ruc : ruc,
      direccion : direccion,
    })
  }
}
