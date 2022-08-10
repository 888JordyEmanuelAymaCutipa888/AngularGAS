import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-proveedores-pages',
  templateUrl: './agregar-proveedores-pages.component.html',
  styleUrls: ['./agregar-proveedores-pages.component.css']
})
export class AgregarProveedoresPagesComponent implements OnInit {

  constructor(private proveedorService : ProveedorService, private router : Router) { }

  ngOnInit(): void {
  }

  agregarProveedor(nombre : any, ruc : any, direccion : any){
    this.proveedorService.agregarProveedor(nombre.value, ruc.value, direccion.value).subscribe((proveedor : any) => {
      this.router.navigate(['/proveedores'])
    })

    return false;
  }

}
