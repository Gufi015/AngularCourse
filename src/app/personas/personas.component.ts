import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';
import { PersonaService } from '../personas.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: "app-personas",
  templateUrl: "./personas.component.html",
  styleUrls: ["./personas.component.css"]
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    //private loggingService: LogginService,
    private personasService: PersonaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.personas = this.personasService.personas;
  }

  // onPersonaAgregada(persona: Persona) {
  //   //this.personas.push(persona);
  //   this.personasService.agregarPersona(persona);
  // }

  add() {
    this.router.navigate(["personas/agregar"]);
  }
}
