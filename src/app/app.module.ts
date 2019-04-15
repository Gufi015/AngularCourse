import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonaService } from './personas.service';
import { LogginService } from './LogginService.service';


@NgModule({
  declarations: [AppComponent, PersonaComponent, FormularioComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    PersonaService,
    LogginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
