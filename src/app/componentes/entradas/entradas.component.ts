import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  mensaje : string = 'Hola soy un mensaje'
  valor : number = 456
  valor2 : number = 678
  valor3 : number = 321
  valor4 : number = 987
  contador : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  contar(){
    console.log('evento de boton')
    this.contador++
  }

  actualizar(e){
    let valor = e.target.value
    this.valor3 = valor
    console.log('actualizar', valor)    
  }
}
