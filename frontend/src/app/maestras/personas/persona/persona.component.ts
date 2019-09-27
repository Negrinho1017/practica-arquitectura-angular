import { Component, OnInit } from '@angular/core';
import { PersonasServiceService } from '../shared/personas-service.service';
import { Persona } from '../modelo/Persona';
import { Router } from '@angular/router';
import { NotificacionService } from 'src/app/shared/notificacion/notificacion.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  persona: Persona;
  opcion: string;
  constructor(private personasServiceService: PersonasServiceService, private router: Router,
    private notificacionService: NotificacionService) { }

  ngOnInit() {
    this.opcion = localStorage.getItem('opcion');
    this.persona = new Persona();
  }

  crearPersona() {
    this.personasServiceService.crearPersona(this.persona).then(() => {
      this.notificacionService.mensajeExitoso("Datos creados");
      this.router.navigate(['/personas']);
    });
  }

  actualizarPersona() {
    this.personasServiceService.actualizarPersona(this.persona).then(() => {
      this.notificacionService.mensajeExitoso("Datos actualizados");
      this.router.navigate(['/personas']);
    });
  }
}
