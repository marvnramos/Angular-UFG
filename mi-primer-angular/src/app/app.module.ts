import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { CientificaComponent } from './pages/cientifica/cientifica.component';
import { FormsModule } from '@angular/forms';
import { CompaComponent } from './pages/compa/compa.component';
import { ProgramacionComponent } from './pages/programacion/programacion.component';
import { HalaMadridComponent } from './pages/hala-madrid/hala-madrid.component';
import { CompbComponent } from './pages/compb/compb.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CientificaComponent,
    CompaComponent,
    ProgramacionComponent,
    HalaMadridComponent,
    CompbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
