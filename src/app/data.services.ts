import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Persona } from "./persona.model";
import { Console } from "@angular/core/src/console";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get(
      "https://listado-personas-19d44.firebaseio.com/datos.json?auth=" + token
    );

    // .subscribe(
    //   response => console.log('datos que regresa el servicio' + JSON.stringify(response)),
    //   error => console.log('error al ejecutar la petición')
    // );
  }

  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(
        "https://listado-personas-19d44.firebaseio.com/datos.json?auth=" +
          token,
        personas
      )
      .subscribe(
        response =>
          console.log("respuesta del servicio" + JSON.stringify(response)),
        error => console.log("error en la respuesta del servicio" + error)
      );
  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken();
    let url: string;

    url =
      "https://listado-personas-19d44.firebaseio.com/datos/" +
      index +
      ".json?auth=" +
      token;

    this.httpClient
      .put(url, persona)
      .subscribe(
        response =>
          console.log("Persona modificada" + JSON.stringify(response)),
        error => console.log("error del servicio" + error)
      );
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      "https://listado-personas-19d44.firebaseio.com/datos/" +
      index +
      ".json?auth=" +
      token;

    this.httpClient
      .delete(url)
      .subscribe(
        response =>
          console.log(
            "persona eliminada sussccess " + JSON.stringify(response)
          ),
        error => console.log("error al eliminar la persona" + error)
      );
  }
}
