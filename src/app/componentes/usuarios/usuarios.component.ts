import { Component, OnInit } from '@angular/core';
import { IUsuario, UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  // con el IUsuario[] se indica el tipo de datos
  usuarios : IUsuario[]=[]
  cargando : boolean = false
  
  constructor(public usuarioService : UsuariosService) { }

  ngOnInit(){
    this.obtenerUsuarios();
  }

  // -----------------------------
  // METODOS PARA INTERACTUAR CON EL SERVICE USUARIOS
  // -----------------------------

  obtenerUsuarios(){
    // cuando hacemos un get obtenemos un observable y debemos suscribirnos para poder manupular esa informacion
    this.cargando = true
    this.usuarioService.getUsuarios().subscribe(
      datos => {
        console.log(datos)
        this.usuarios=datos
      }
    )
  }

  enviarUsuarios(){
    let usuario :IUsuario= {
      nombre: 'Luis',
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-128.png',
      descripcion: 'Nuevo usuario'
    }
    this.usuarioService.postUsuarios(usuario).subscribe(
      (datos : IUsuario) => {
        console.log(datos);
        this.obtenerUsuarios();
      }
    )
  }

  borrarUsuarios(id : number){
   this.usuarioService.deleteUsuario(id).subscribe(
     (datos : IUsuario) => {
       console.log(datos);
       this.obtenerUsuarios();
     }
   )
  }
  
  actualizarUsuarios(id : number){
    let usuario :IUsuario = {
      nombre:'Elena',
      foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-128.png',
      descripcion: 'Modificacion de Usuario'
    }
    this.usuarioService.putUsuarios(usuario,id).subscribe(
      (datos : IUsuario)=> {
        console.log(datos);
        this.obtenerUsuarios();
      }
    )
  }
  
  
}
