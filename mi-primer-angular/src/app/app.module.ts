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
import { CalculadoreNotestComponent } from './pages/calculadore-notest/calculadore-notest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Part1Component } from './pages/part1/part1.component';
import { Part2Component } from './pages/part2/part2.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CientificaComponent,
    CompaComponent,
    ProgramacionComponent,
    HalaMadridComponent,
    CompbComponent,
    CalculadoreNotestComponent,
    Part1Component,
    Part2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
