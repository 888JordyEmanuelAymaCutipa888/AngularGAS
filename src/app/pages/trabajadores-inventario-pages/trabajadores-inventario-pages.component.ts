import { Component, OnInit } from '@angular/core';
import { TrabajadoresService } from 'src/app/services/trabajadores.service';

@Component({
  selector: 'app-trabajadores-inventario-pages',
  templateUrl: './trabajadores-inventario-pages.component.html',
  styleUrls: ['./trabajadores-inventario-pages.component.css']
})
export class TrabajadoresInventarioPagesComponent implements OnInit {

  trabajadores: any

  constructor(private TrabajadoresService: TrabajadoresService) { }

  ngOnInit(): void {
    this.TrabajadoresService.getTrabajadores().subscribe(trabajadores => {
      this.trabajadores = trabajadores
      console.log(this.trabajadores);
      
    })
  }

}
