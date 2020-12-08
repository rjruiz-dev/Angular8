import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// con ReactiveFormsModule, se importa un formulario reactivo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// RouterModule es el mudulo donde esta el sistema de rutas
// Routes en un array de objetos routes
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ClientesService, ClientesServiceUseClass, ClientesServiceUseExisting } from './servicios/clientes.service';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AccesoServicioComponent } from './componentes/acceso-servicio/acceso-servicio.component';

// modulo personalizado
import { MiModuloEjemploModule } from 'src/app/mi-modulo-ejemplo/mi-modulo-ejemplo.module';
import { PanelComponent } from './mi-modulo-ejemplo/componentes/panel/panel.component';
// se delcara una constante routes del tipo Routes, y este es un array  
const routes : Routes = [
  // se hace referencia al componente
  {path: 'entradas', component: EntradasComponent},
  {path: 'estructura', component: EstructuraComponent},
  {path: 'atributos', component: AtributosComponent},
  {path: 'formularios', component: FormulariosComponent},
  {path: 'servicios', component: AccesoServicioComponent},
  // parametros en la ruta
  {path: 'http/:idgrupousuarios', component: UsuariosComponent},
  {path: 'modulo', component: PanelComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    EstructuraComponent,
    AtributosComponent,
    FormulariosComponent,
    ResaltarDirective,
    ClientesComponent,
    UsuariosComponent,
    AccesoServicioComponent
  ],
  // importante importarlo aca 
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  // forRoot(rutas) se especifica las rutas para la navegacion definidas en la constante 
    RouterModule.forRoot(
      routes,{
        // se configura el debug para la variable routes y se inspecciona en la consola
        enableTracing : true
      }
      ),
      MiModuloEjemploModule
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
