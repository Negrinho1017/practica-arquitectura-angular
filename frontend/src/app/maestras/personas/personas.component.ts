import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  mostrarPersonas: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  crearOpcion(opcion: string){
    localStorage.setItem('opcion', opcion);
  }

}
