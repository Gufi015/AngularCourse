import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Persona } from "../persona.model";
import { LogginService } from "../LogginService.service";
import { PersonaService } from "../personas.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
  providers: [LogginService]
})
export class FormularioComponent {
  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string = "";
  apellidoInput: string = "";

  constructor(
    private logginService: LogginService,
    private personaService: PersonaService
  ) {
    this.personaService.saludar.subscribe((indice: number) =>
      alert("El indice del elemento es: " + indice)
    );
  }

  onAgregarPersona() {
    if (this.nombreInput == "") {
      alert("Agrega un Nombre ");
      return;
    } else if (this.apellidoInput == "") {
      alert("Agrega un Apellido");
      return;
    }

    let persona = new Persona(this.nombreInput, this.apellidoInput);
    //this.logginService.RecibirMensaje("SE ENVIO PERSONA " +  JSON.stringify(persona));
    //this.personaCreada.emit(persona);
    this.personaService.agregarPersona(persona);
  }
}
