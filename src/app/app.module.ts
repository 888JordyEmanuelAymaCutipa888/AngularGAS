import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Route } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertarBalonPagesComponent } from './pages/insertar-balon-pages/insertar-balon-pages.component';
import { BalonesInventarioPagesComponent } from './pages/balones-inventario-pages/balones-inventario-pages.component';
import { TrabajadoresInventarioPagesComponent } from './pages/trabajadores-inventario-pages/trabajadores-inventario-pages.component';
import { InsertarTrabajadorPagesComponent } from './pages/insertar-trabajador-pages/insertar-trabajador-pages.component';

const routes: Route[] = [
  {path: 'balones', component: BalonesInventarioPagesComponent},
  {path: 'balones/agregar', component: InsertarBalonPagesComponent},
  {path: 'trabajadores', component: TrabajadoresInventarioPagesComponent},
  {path: 'trabajadores/agregar', component: InsertarTrabajadorPagesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    InsertarBalonPagesComponent,
    BalonesInventarioPagesComponent,
    TrabajadoresInventarioPagesComponent,
    InsertarTrabajadorPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
