import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  constructor(private httpClient: HttpClient) { }
  public getTrabajadores(){
    return this.httpClient.get('http://127.0.0.1:8000/trabajadores/');
  }
  public agregarTrabajador(nombre: string, recibo_honorarios: BigInteger, pago: DoubleRange) {
    return this.httpClient.post('http://127.0.0.1:8000/trabajadores/', {
      nombre: nombre,
      recibo_honorarios: recibo_honorarios,
      pago: pago,
    })
  }
}
