import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes : string[] = []

  // nombre es el del ngModel
  nombre : string = ''

  // se inyecta la dependencia, ahora el componente tiene las funcionaldades que el servico le ofrece
  // la inyecion se hace sobre el metodo constructor 
  // los servicios le otorgan a los componentes metodos y propiedades comunes
  constructor(private clientesServices : ClientesService) {
    
    // importante para tener los recursos del servicio 
    this.clientes = this.clientesServices.clientes
  }

  ngOnInit(): void {
  }

  // se crea el metodo 
  agregarCliente(nombre){
    // se hace referencia al metodo agregarCliente definido en el servicio
    this.clientesServices.agregarCliente(nombre)
    this.nombre = ''
  }

}
