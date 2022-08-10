import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Route } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertarBalonPagesComponent } from './pages/insertar-balon-pages/insertar-balon-pages.component';
import { BalonesInventarioPagesComponent } from './pages/balones-inventario-pages/balones-inventario-pages.component';
import { ProveedoresListaPagesComponent } from './pages/proveedores-lista-pages/proveedores-lista-pages.component';
import { AgregarProveedoresPagesComponent } from './pages/agregar-proveedores-pages/agregar-proveedores-pages.component';

const routes: Route[] = [
  {path: 'balones', component: BalonesInventarioPagesComponent},
  {path: 'balones/agregar', component: InsertarBalonPagesComponent},
  {path: 'proveedores', component: ProveedoresListaPagesComponent},
  {path: 'proveedores/agregar', component: AgregarProveedoresPagesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    InsertarBalonPagesComponent,
    BalonesInventarioPagesComponent,
    ProveedoresListaPagesComponent,
    AgregarProveedoresPagesComponent
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
