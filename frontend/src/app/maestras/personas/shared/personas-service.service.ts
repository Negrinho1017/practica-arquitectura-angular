import { Injectable } from '@angular/core';
import { ServicioBaseService } from 'src/app/shared/servicio-base.service';
import { PersonasComponent } from '../personas.component';
import { Persona } from '../modelo/Persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonasServiceService extends ServicioBaseService<Persona, string>{

  queryAll: string = `${environment.apiBaseURL}consulta-todos`;
  queryPorId: string = `${environment.apiBaseURL}consulta-persona?id=`;
  queryCrear: string = `${environment.apiBaseURL}creacion-persona`;
  queryEliminar: string = `${environment.apiBaseURL}eliminacion-persona/`;
  queryActualizar: string = `${environment.apiBaseURL}actualizacion-persona/`;
  
  constructor(private httpClient: HttpClient) {
    super(httpClient);
   }

  obtenerTodo(){
    return super.obtenerTodo(this.queryAll);
  }

  crearPersona(persona: Persona){
    return super.crear(this.queryCrear, persona);
  }

  eliminarPersona(id: string){
    return super.eliminar(this.queryEliminar, id);
  }

  actualizarPersona(persona: Persona){
    return super.actualizar(this.queryActualizar, persona.id, persona);
  }

  obtenerPersonaPorId(id: string){
    return super.obtenerPorId(this.queryPorId , id);
  }
}


