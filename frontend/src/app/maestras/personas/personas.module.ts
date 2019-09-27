import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './personas.component';
import { PersonasListarComponent } from './personas-listar/personas-listar.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PersonasComponent },
  { path: 'crear', component: PersonaComponent },
  { path: 'actualizar/:id', component: PersonaComponent },
  { path: 'lista-personas', component: PersonasListarComponent },
];
@NgModule({
  declarations: [PersonasComponent, PersonaComponent , PersonasListarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],

})
export class PersonasModule { }
