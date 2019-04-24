import { Component, OnInit } from "@angular/core";
import { Persona } from "./persona.model";
import { PersonaService } from "./personas.service";
import { logging } from "protractor";
import { LogginService } from "./LogginService.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Lista de Personas";
  ngOnInit() {}
}
