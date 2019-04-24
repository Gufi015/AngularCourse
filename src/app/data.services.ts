import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Persona } from "./persona.model";
import { Console } from "@angular/core/src/console";

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  cargarPersonas() {
    return this.httpClient.get(
      "https://listado-personas-19d44.firebaseio.com/datos.json"
    );

    // .subscribe(
    //   response => console.log('datos que regresa el servicio' + JSON.stringify(response)),
    //   error => console.log('error al ejecutar la petición')
    // );
  }

  guardarPersonas(personas: Persona[]) {
    this.httpClient
      .put("https://listado-personas-19d44.firebaseio.com/datos.json", personas)
      .subscribe(
        response =>
          console.log("respuesta del servicio" + JSON.stringify(response)),
        error => console.log("error en la respuesta del servicio" + error)
      );
  }

  modificarPersona(index: number, persona: Persona) {
    let url: string;

    url =
      "https://listado-personas-19d44.firebaseio.com/datos/" + index + ".json";

    this.httpClient
      .put(url, persona)
      .subscribe(
        response =>
          console.log("Persona modificada" + JSON.stringify(response)),
        error => console.log("error del servicio" + error)
      );
  }
}
