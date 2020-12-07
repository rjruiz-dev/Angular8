import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerificarEspacios } from 'src/app/validaciones/espacios.validator';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  cantMinimaCaracteres  : number = 4
  cantMaximaCaracteres  : number = 10

  formu = {
    nombre: '',
    apellido: '',
    edad: '',
    email: '',
    clave: '',
    notas: ''
  }

  // Para formReactive se declara un formGroup
  f:FormGroup

  // en el construtor se inyecta una propiedad de tipo privada FormBuilder 
  // el constructor es un metodo que se activa cuando formularioComponent se despliega en la vista
  // cuando en component.html se hace el new de la clase <app-formularios></app-formularios> el constructor se activa
  constructor(private fb: FormBuilder) { 
    this.f = fb.group({
      // Validators.compose es una funcion a la cual se le pasa un array  de validadores
      nombre: ['',Validators.compose([
        Validators.required,
        // Validators.minLength(4),
        Validators.minLength(this.cantMinimaCaracteres),
        Validators.maxLength(this.cantMaximaCaracteres),
        VerificarEspacios
      ])],
      apellido: '', 
      edad: '',
      // agrupar validaciones por clave:contacto
      contacto: fb.group({ 
        email: '',
        telefono: '',
      }),     
      clave: '',
      notas: ''
    })
  }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.formu)
    this.formu = {
      nombre: '',
      apellido: '',
      edad: '',
      email: '',
      clave: '',
      notas: ''
    }
  }

  getCantidadMax(){
    return this.f.controls.nombre.errors.maxlength.requiredLength
  }

  getCantidadMin(){
    return this.f.controls.nombre.errors.minlength.requiredLength
  }

  getCantidadActualMin(){
    return this.f.controls.nombre.errors.minlength.actualLength
  }

  getCantidadActualMax(){
    return this.f.controls.nombre.errors.maxlength.actualLength
  }
}
