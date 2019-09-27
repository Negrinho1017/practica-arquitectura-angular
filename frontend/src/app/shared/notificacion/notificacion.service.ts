import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor() { }

  mensajeExitoso(mensaje: string){
    Swal.fire({
      type: 'success',
      title: 'Excelente!',
      text: mensaje
    })
  }

  mensajeError(mensaje: string){
    Swal.fire({
      type: 'error',
      title: 'Error!',
      text: mensaje
    })
  }

  mensajeAceptarCancelar(mensaje: string){
    return Swal.fire({
      title: "Está seguro?",
      text: mensaje,
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true     
    })
  }
}
