import { Injectable } from '@angular/core';
import { ServicioBaseService } from 'src/app/shared/servicio-base.service';
import { PersonasComponent } from '../personas.component';
import { Persona } from '../modelo/Persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonasServiceService extends ServicioBaseService<Persona, string>{

  queryAll: string = 'http://localhost:8080/consulta-todos';
  queryPorId: string = 'http://localhost:8080/consulta-persona?id=';
  queryCrear: string = 'http://localhost:8080/creacion-persona';
  queryEliminar: string = 'http://localhost:8080/eliminacion-persona/';
  queryActualizar: string = 'http://localhost:8080/actualizacion-persona/';
  
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


