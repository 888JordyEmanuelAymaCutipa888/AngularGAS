import { Component, OnInit } from '@angular/core';
import { BalonService } from 'src/app/services/balon.service';

@Component({
  selector: 'app-balones-inventario-pages',
  templateUrl: './balones-inventario-pages.component.html',
  styleUrls: ['./balones-inventario-pages.component.css']
})
export class BalonesInventarioPagesComponent implements OnInit {

  balones: any
  constructor(private balonService: BalonService) { }

  ngOnInit(): void {
    this.balonService.getBalones().subscribe(balones => {
      this.balones = balones
      console.log(this.balones);
      
    })
  }

}
