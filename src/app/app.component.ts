import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-personas';

  personas:Persona[] = [new Persona("rufino", "rojas"), new Persona("Rosa","Aguilar")];
}
