import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Lista de Personas";
  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: "AIzaSyCtDgjTebeRcHDckYKWKdKm00V0FfEc570",
      authDomain: "listado-personas-19d44.firebaseapp.com"
    });

  }
}
