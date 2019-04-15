import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona:Persona;
  @Input() i: number;

  constructor() { }

  ngOnInit() {
  }

}
