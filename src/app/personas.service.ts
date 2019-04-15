import { Persona } from "./persona.model";
import { LogginService } from './LogginService.service';

export class PersonaService {
  personas: Persona[] = [
    new Persona("Rufino", "Rojas"),
    new Persona("Rosa", "Aguilar"),
    new Persona("Jose", "Santos"),
    new Persona("Luis", "Rofriguez")
  ];


  constructor(private logginService: LogginService){}

  agregarPersona(persona: Persona) {

    this.logginService.RecibirMensaje("SE AGREGO LA PERSONA " + JSON.stringify(persona));
    this.personas.push(persona);
  }
}
