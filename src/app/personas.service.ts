import { Persona } from "./persona.model";
import { LogginService } from './LogginService.service';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()

export class PersonaService {
  personas: Persona[] = [
    new Persona("Rufino", "Rojas"),
    new Persona("Rosa", "Aguilar"),
    new Persona("Gary", "Aguilar Rojas"),
    new Persona("Floripondio", "Rojas Aguilar"),
    new Persona("Jaguar", "Aguilar Rojas")
  ];

  saludar = new EventEmitter<number>();
  constructor(private logginService: LogginService){}

  agregarPersona(persona: Persona) {
    this.logginService.RecibirMensaje("SE AGREGO LA PERSONA " + JSON.stringify(persona));
    this.personas.push(persona);
  }

  encontrarPersona(index:number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index:number, persona:Persona){
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }
}
