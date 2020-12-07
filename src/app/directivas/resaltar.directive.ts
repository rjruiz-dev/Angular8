import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  // conectar la directiva con el elemento a traves del contructor
  constructor( private el:ElementRef ) { }
  
  //nuevo decorador 
  // colorBase es una propiedad que se conecta con un atributo del mismo nombre
  @Input() colorBase: string
  // se ve de manera interna por una propiedad que se llama resaltarColor
  @Input('appResaltar') resaltarColor : string

  // Función para cambiar el color se le pasa un parametro color de tipo string
  private resaltar(color:string) : void {
    this.el.nativeElement.style.backgroundColor = color
  }

  // listener para escuchar lo eventos del mouse
  
  // HostListener se asocia a un evento mouseenter
  @HostListener('mouseenter') onMouseEnter() {
    // cuando el mouse entra a la zona le asigna el color 
    this.resaltar(this.resaltarColor || this.colorBase || 'red')
  }

  // HostListener se asocia a un evento mouseleave cuando el mause se va
  @HostListener('mouseleave') onMouseLeave() {
    // cuando el mouse avandona el lugar se le pasa null para quitar color
    this.resaltar(null)     
  }
}
