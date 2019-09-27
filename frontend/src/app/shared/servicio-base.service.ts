import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export abstract class ServicioBaseService<T, D>{

  constructor( private http: HttpClient ) { }

  obtenerTodo(query: string): Observable<T[]>{
    return this.http.get<T[]>(query, httpOptions);
  }

  crear(query: string, t:T) {
    return this.http.post(query, t, httpOptions);
  }

  eliminar(query: string, id: D): Observable<T>{
    return this.http.delete<T>(query + id, httpOptions);
  }

  actualizar(query: string, id: D, t:T): Observable<T>{
    return this.http.put<T>(query + id, t, httpOptions);
  }

  obtenerPorId(query: string, id: D): Observable<T>{
    return this.http.get<T>(query + id, httpOptions);
  }
}
