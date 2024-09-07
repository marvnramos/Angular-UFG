import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { CientificaComponent } from './pages/cientifica/cientifica.component';
import { FormsModule } from '@angular/forms';
import { CompaComponent } from './compa/compa.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CientificaComponent,
    CompaComponent
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
