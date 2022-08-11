import { Component, OnInit } from '@angular/core';
import { TrabajadoresService } from 'src/app/services/trabajadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-trabajador-pages',
  templateUrl: './insertar-trabajador-pages.component.html',
  styleUrls: ['./insertar-trabajador-pages.component.css']
})
export class InsertarTrabajadorPagesComponent implements OnInit {

  constructor(private TrabajadoresService: TrabajadoresService, private router: Router) { }

  ngOnInit(): void {
  }
  insertarTrabajador(nombre: any, recibo_honorarios: any, pago: any){

    this.TrabajadoresService.agregarTrabajador(nombre.value, recibo_honorarios.value, pago.value).subscribe(trabajador => {
      this.router.navigate(['/trabajadores/'])
    })

    return false
  }

}
