import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Persona } from "../../persona.model";
import { LogginService } from "../../LogginService.service";
import { PersonaService } from "../../personas.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
  providers: [LogginService]
})
export class FormularioComponent implements OnInit {
  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string = "";
  apellidoInput: string = "";
  index: number;

  modoEdicion:number;

  constructor(
    private logginService: LogginService,
    private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personaService.saludar.subscribe((indice: number) =>
      alert("El indice del elemento es: " + indice)
    );
  }

  ngOnInit() {
    this.index = this.route.snapshot.params["id"];

    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']; // parsear a entero con el +
    console.log('Elmodo es:' + this.modoEdicion);
    if (this.index) {
      let persona = this.personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  // onAgregarPersona() {
  //   if (this.nombreInput == "") {
  //     alert("Agrega un Nombre ");
  //     return;
  //   } else if (this.apellidoInput == "") {
  //     alert("Agrega un Apellido");
  //     return;
  //   }

  //   let persona = new Persona(this.nombreInput, this.apellidoInput);
  //   //this.logginService.RecibirMensaje("SE ENVIO PERSONA " +  JSON.stringify(persona));
  //   //this.personaCreada.emit(persona);
  //   this.personaService.agregarPersona(persona);

  // }

  onGuardarPersona() {
    let persona = new Persona(this.nombreInput, this.apellidoInput);

    if (this.index) {
      this.personaService.modificarPersona(this.index, persona);
    } else {
      this.personaService.agregarPersona(persona);
    }
    this.router.navigate(["personas"]);
  }

  eliminarPersona() {
    if (this.index != null) {
      this.personaService.eliminarPersona(this.index);
    }
    this.router.navigate(["personas"]);
  }
}
