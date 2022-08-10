import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Route } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertarBalonPagesComponent } from './pages/insertar-balon-pages/insertar-balon-pages.component';
import { BalonesInventarioPagesComponent } from './pages/balones-inventario-pages/balones-inventario-pages.component';
import { ProveedoresListaPagesComponent } from './pages/proveedores-lista-pages/proveedores-lista-pages.component';

const routes: Route[] = [
  {path: 'balones', component: BalonesInventarioPagesComponent},
  {path: 'balones/agregar', component: InsertarBalonPagesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    InsertarBalonPagesComponent,
    BalonesInventarioPagesComponent,
    ProveedoresListaPagesComponent
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
