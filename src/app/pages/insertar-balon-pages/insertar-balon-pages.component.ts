import { Component, OnInit } from '@angular/core';
import { BalonService } from 'src/app/services/balon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-balon-pages',
  templateUrl: './insertar-balon-pages.component.html',
  styleUrls: ['./insertar-balon-pages.component.css']
})
export class InsertarBalonPagesComponent implements OnInit {

  constructor(private balonService: BalonService, private router: Router) { }

  ngOnInit(): void {
  }

  insertarBalon(Lleno: any, marcaDeEmpresa: any, Tipo: any){

    this.balonService.agregarBalon(Lleno.checked, marcaDeEmpresa.value, Tipo.value).subscribe(balon => {
      this.router.navigate(['/balones'])
    })

    return false
  }

}
