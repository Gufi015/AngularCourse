import { Persona } from "./persona.model";

export class PersonaService {
  personas: Persona[] = [
    new Persona("Rufino", "Rojas"),
    new Persona("Rosa", "Aguilar"),
    new Persona("Jose", "Santos"),
    new Persona("Luis", "Rofriguez")
  ];

  agregarPersona(persona: Persona) {
    this.personas.push(persona);
  }
}
