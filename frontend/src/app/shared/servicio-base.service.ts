import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { resolve, reject } from 'q';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export abstract class ServicioBaseService<T, D>{

  constructor( private http: HttpClient ) { }

  async obtenerTodo(query: string) {
     return new Promise<T[]>((resolve, reject) => {
       this.http.get<T[]>(query, httpOptions).toPromise()
       .then(response => {
         resolve(response);
       })
       .catch(err => {
         reject(err);
       })
     });
  }

  crear(query: string, t:T) {
    return new Promise((resolve, reject) => {
      this.http.post(query, t, httpOptions).toPromise()
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      })
    });
  }

  eliminar(query: string, id: D) {
    return new Promise((resolve, reject) => {
      this.http.delete<T>(query + id, httpOptions).toPromise()
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      })
    });
  }

  actualizar(query: string, id: D, t:T){
    return new Promise<T>((resolve, reject) => {
      this.http.put<T>(query + id, t, httpOptions).toPromise()
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      })
    });
  }

  obtenerPorId(query: string, id: D) {
    return new Promise<T>((resolve, reject) => {
      this.http.get<T>(query + id, httpOptions).toPromise()
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      })
    });
  }
}
