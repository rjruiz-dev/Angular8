import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// se genera una interface que sea compatible con los datos que vienen de la apirestfull
// se crea un molde a los datos que llegan
export interface IUsuario {
  // id: string,
  // Fecha: string,
  nombre: string,
  foto: string,
  descripcion : string
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  // inyectar en el constructor del servicio la clase se importo
  // esto permite interactuar con el backend a traves de las url
  constructor(private http : HttpClient) {}

    // metodos
    getUsuarios(){
      // desde el servicio nos conectamos a la api mediante la uri
      // <> indica que se implementa la interface
      return this.http.get<IUsuario[]>('https://5fca72aa3c1c2200164426f2.mockapi.io/usuarios');
    }

    postUsuarios(usuario : IUsuario){
      // se trabaja con http opcion se envia informacion de los headers al backend
      //header => content type
      let httpOptions = {
        // cabecera del api
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      };
      return this.http.post<IUsuario>('https://5fca72aa3c1c2200164426f2.mockapi.io/usuarios',
      usuario,
      httpOptions
      );   

    }

    deleteUsuario(id : number){
      let httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      };

      return this.http.delete<IUsuario>('https://5fca72aa3c1c2200164426f2.mockapi.io/usuarios/' + id,
      httpOptions
      );
    }

    putUsuarios(usuario : IUsuario, id : number){
      let httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      };

      return this.http.put<IUsuario>(
        'https://5fca72aa3c1c2200164426f2.mockapi.io/usuarios/' + id,
        usuario,
        httpOptions
      );      
    }
   
}
