import { Component, OnInit } from '@angular/core';
import { PersonasServiceService } from '../shared/personas-service.service';
import { Persona } from '../modelo/Persona';
import { Router } from '@angular/router';
import { NotificacionService } from 'src/app/shared/notificacion/notificacion.service';

@Component({
  selector: 'app-personas-listar',
  templateUrl: './personas-listar.component.html',
  styleUrls: ['./personas-listar.component.css']
})
export class PersonasListarComponent implements OnInit {
  personas: Persona[];
  persona: Persona;
  constructor( private personasServiceService: PersonasServiceService, private router: Router,
    private notificacion: NotificacionService ) { }

  ngOnInit() {
    this.obtenerPersonas();
  }

  eliminarPersona(id: string){
    this.personasServiceService.eliminarPersona(id).subscribe(() => {
      this.notificacion.mensajeExitoso('Usuario eliminado'); 
      this.router.navigate(['/personas']);
    });
  }

  obtenerPersonas(){
    this.personasServiceService.obtenerTodo().subscribe(res => this.personas = res);
  }

  obtenerPersona(){
    var cedula= ((document.getElementById("cedula") as HTMLInputElement).value);
    console.log(cedula);
    this.personasServiceService.obtenerPersonaPorId(cedula).subscribe(res => {
      this.persona = res
      if(this.persona===null){
        this.notificacion.mensajeError("Usuario no encontrado");
        return;
      }
      this.notificacion.mensajeExitoso("El nombre del usuario es: "+ this.persona.nombre+", su edad es: "+this.persona.edad+ " años y su sexo es: "+this.persona.sexo);
    }, 
      () => this.notificacion.mensajeError("Error encontrando el usuario"));
  }

}
