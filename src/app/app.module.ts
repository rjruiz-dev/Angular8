import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// con ReactiveFormsModule, se importa un formulario reactivo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ClientesService, ClientesServiceUseClass, ClientesServiceUseExisting } from './servicios/clientes.service';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    EstructuraComponent,
    AtributosComponent,
    FormulariosComponent,
    ResaltarDirective,
    ClientesComponent,
    UsuariosComponent
  ],
  // importante importarlo aca 
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // Provicion del servicio por providers
    // ClientesService
    // {provide: ClientesService, useClass:ClientesService}
    // USECLASS
    // {provide: ClientesService, useClass: ClientesServiceUseClass}
    // USEXISTING
    {provide: ClientesService, useExisting: ClientesServiceUseExisting}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
