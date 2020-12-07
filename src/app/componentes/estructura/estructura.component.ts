import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})
export class EstructuraComponent implements OnInit {

  // ARRAY DE STRIGN
  // usuarios : string[] = [
  //   'Laura',
  //   'Ana',
  //   'Pedro',
  //   'Jose'
  // ]
  // otra manera de declarar array
  usuarios : Array<string> = [
    'Laura',
    'Ana',
    'Pedro',
    'Jose'
  ]

  // ARRAY DE OBJETOS

  alumnos = [
    {nombre:'Gabriela', apellido:'Mei', edad:'23', curso:true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-128.png'},
    {nombre:'Luis', apellido:'Picos', edad:'25', curso:true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-128.png'},
    {nombre:'Bernado', apellido:'Lopez', edad:'37', curso:false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-128.png'},
    {nombre:'Lucia', apellido:'Gomez', edad:'29', curso:false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-128.png'},
  ]
  mostrar : boolean = true

  // se declara un array clientes del tipo string, array vacio
  clientes : string[] = []

  // se inyecta el servicio cliente en componente estructura
  constructor(private clientesService : ClientesService) {
    this.clientes = clientesService.clientes
  }

  // desde estructura se elimina un cliente a traves del servicio en el cual tiene un metodo que elimina un cliente
  sacarCliente(){
    this.clientesService.sacarCliente()
  }
  ngOnInit(): void {
  }

  borrarAlumno(index){
    this.alumnos.splice(index,1)
  }

  agregarAlumno(){
    let alumno = {nombre:'Carlos', apellido:'Suarez', edad:'43', curso:false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png'}

    // insertar alumno desde arriba(unshift)
    this.alumnos.unshift(alumno)
  }

}
