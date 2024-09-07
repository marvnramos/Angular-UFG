import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ufg'
  title = 'mi-primer-angular';
  tituloAEnviar = 'Título enviado desde padre al hijo';
  resultadoHijo: number = 0;

  manejarResultado(resultado: number) {
    this.resultadoHijo = resultado;
  }
}
