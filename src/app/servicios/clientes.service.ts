import { Injectable } from '@angular/core';

// el decorador es una funcion que modifica a la clase que esta por abajo de el 
// este servicio brinda recursos comunes para todo el proyecto
// con esto @Injectable({ providedIn: 'root' }) hace que el recurso ya sea provisto automaticamente

// ---------------------------------------------
// USE CLASS
// ---------------------------------------------

@Injectable(/*{  
  providedIn: 'root'
}*/

)

export class ClientesServiceUseClass {

  clientes : string[] = [
    'Pedro useClass',
    'Juan useClass',
    'Ana useClass',
    'Maria useClass',
    'Victoria useClass'    
  ]

  // metodo que permite agregar un cliente
  agregarCliente(cliente){
    if(cliente != ''){
      this.clientes.push(cliente)
    }    
  }

  // metodo que permite quitar un cliente
  sacarCliente() {  
      this.clientes.pop()
     
  }

  constructor() { }
}

// ---------------------------------------------
// USE EXISTING
// ---------------------------------------------


@Injectable({  
  providedIn: 'root'
}

)
export class ClientesServiceUseExisting {

  clientes : string[] = [
    'Pedro useExisting',
    'Juan useExisting',
    'Ana useExisting',
    'Maria useExisting',
    'Victoria useExisting'    
  ]

  // metodo que permite agregar un cliente
  agregarCliente(cliente){
    if(cliente != ''){
      this.clientes.unshift(cliente)
    }    
  }

  // metodo que permite quitar un cliente
  sacarCliente() {  
      this.clientes.shift()
     
  }

  constructor() { }
}


@Injectable(/*{  
  providedIn: 'root'
}*/

)
export class ClientesService {

  clientes : string[] = [
    'Pedro',
    'Juan',
    'Ana',
    'Maria',
    'Victoria'    
  ]

  // metodo que permite agregar un cliente
  agregarCliente(cliente){
    if(cliente != ''){
      this.clientes.push(cliente)
    }    
  }

  // metodo que permite quitar un cliente
  sacarCliente() {  
      this.clientes.pop()
     
  }

  constructor() { }
}
