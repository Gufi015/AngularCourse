import { Persona } from "./persona.model";
import { LogginService } from './LogginService.service';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()

export class PersonaService {
  personas: Persona[] = [
    new Persona("Rufino", "Rojas"),
    new Persona("Rosa", "Aguilar"),
    new Persona("Jose", "Santos"),
    new Persona("Luis", "Rodriguez"),
    new Persona("Maria", "Velez")
  ];

  saludar = new EventEmitter<number>();

  constructor(private logginService: LogginService){}

  agregarPersona(persona: Persona) {
    this.logginService.RecibirMensaje("SE AGREGO LA PERSONA " + JSON.stringify(persona));
    this.personas.push(persona);
  }
}
