import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedores-lista-pages',
  templateUrl: './proveedores-lista-pages.component.html',
  styleUrls: ['./proveedores-lista-pages.component.css']
})
export class ProveedoresListaPagesComponent implements OnInit {

  proveedores : any;

  constructor(private proveedorService : ProveedorService) { }

  ngOnInit(): void {
    this.proveedorService.getProveedores().subscribe((proveedores : any) => {
      this.proveedores = proveedores;
      console.log(this.proveedores);
    })
  }

}
