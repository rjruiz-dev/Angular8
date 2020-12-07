import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent implements OnInit {

  estado1 : boolean = true
  estado2 : boolean = true
  color : string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
