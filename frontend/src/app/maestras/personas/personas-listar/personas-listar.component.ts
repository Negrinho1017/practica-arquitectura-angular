import { Component, OnInit } from '@angular/core';
import { PersonasServiceService } from '../shared/personas-service.service';
import { Persona } from '../modelo/Persona';
import { Router } from '@angular/router';
import { NotificacionService } from 'src/app/shared/notificacion/notificacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas-listar',
  templateUrl: './personas-listar.component.html',
  styleUrls: ['./personas-listar.component.css']
})
export class PersonasListarComponent implements OnInit {
  personas: Persona[];
  persona: Persona;
  constructor(private personasServiceService: PersonasServiceService, private router: Router,
              private notificacion: NotificacionService) { }

  ngOnInit() {
    this.obtenerPersonas();
  }

  eliminarPersona(id: string) {
    this.notificacion.mensajeAceptarCancelar('Una vez eliminado el usuario no se podrán recuperar sus datos')
    .then((willDelete) => {
      if (willDelete.value) {
          this.personasServiceService.eliminarPersona(id).then(() => {
          this.notificacion.mensajeExitoso('Usuario eliminado');
          this.router.navigate(['/personas']);
        });
      } else {
        this.notificacion.mensajeExitoso('Usuario no eliminado');
      }
    });
  }

  actualizarPersona(id: string) {
    //const queryParams = {id : {id}};
    //this.router.navigate(['/personas/actualizar/'], { queryParams: {queryParams} });
    localStorage.setItem('opcion', 'actualizar');
    this.router.navigate([`/personas/actualizar/${id}`]);
  }

  obtenerPersonas() {
    this.personasServiceService.obtenerTodo()
    .then(res => this.personas = res)
    .catch((error) => {
      this.notificacion.mensajeError(error);
    });
  }

  obtenerPersona() {
    const cedula = ((document.getElementById('cedula') as HTMLInputElement).value);
    this.personasServiceService.obtenerPersonaPorId(cedula).then(res => {
      this.persona = res;
      if (this.persona === null) {
        this.notificacion.mensajeError('Usuario no encontrado');
        return;
      }
      this.notificacion.mensajeExitoso('El nombre del usuario es: ' + this.persona.nombre +
      ', su edad es: ' + this.persona.edad + ' años y su sexo es: ' + this.persona.sexo);
    },
      () => this.notificacion.mensajeError('Error encontrando el usuario'));
  }

}
