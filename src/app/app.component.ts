import { Component } from '@angular/core';
import { BalonService } from './services/balon.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularGas';
  constructor(private balonService: BalonService){
    this.balonService.getBalones().subscribe(balones=>{console.log(balones)})
  }
}
