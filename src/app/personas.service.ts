import { Persona } from "./persona.model";
import { LogginService } from './LogginService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';


@Injectable()
export class PersonaService {
  // personas: Persona[] = [
  //   new Persona("Rufino", "Rojas"),
  //   new Persona("Rosa", "Aguilar"),
  //   new Persona("Gary", "Aguilar Rojas"),
  //   new Persona("Floripondio", "Rojas Aguilar"),
  //   new Persona("Jaguar", "Aguilar Rojas")
  // ];


  personas:Persona[] = [];

  saludar = new EventEmitter<number>();
  constructor(private logginService: LogginService,
    private dataservices: DataServices) {}


  //se encarga de actualizar el arreglo de firebase
  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  agregarPersona(persona: Persona) {
    this.logginService.RecibirMensaje("SE AGREGO LA PERSONA " + JSON.stringify(persona));

    if(this.personas == null){
      this.personas = [];
    }
    this.personas.push(persona);

    this.dataservices.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido


    this.dataservices.modificarPersona(index, persona);
  }

  eliminarPersona(index:number){
    this.personas.splice(index,1);
  }

  obtenerPersonas(){
    return this.dataservices.cargarPersonas();
  }



}
