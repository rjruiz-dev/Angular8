import { AbstractControl } from '@angular/forms';

// Validaciones personalizadas
export function VerificarEspacios(c: AbstractControl){
    
    // con exprecion regular
    let regExpEspacios = /^[a-zA-Z]*$/

    // c.value hace refencia al campo nombre del formulario
    if(c.value == null) return null
    
    if(!regExpEspacios.test(c.value)){
    // se verifica si existe un esapacio dentro del campo nombre
    // if(c.value.indexOf(' ') >= 0){
        // retorna un objeto
        return {conEspacios : true }
    }
    // si no encuentra el espacio retorna null
    return null
}
