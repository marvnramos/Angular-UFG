import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ufg'
  // title = 'mi-primer-angular';
  // tituloAEnviar = 'Título enviado desde padre al hijo';
  // resultadoHijo: number = 0;
  //
  // manejarResultado(resultado: number) {
  //   this.resultadoHijo = resultado;
  // }

  title = 'Facturacion-NT';
  @ViewChild('sidenav') sidenav: MatSidenav | null = null;

  handleNewInvoiceClick() {
    if (this.sidenav) {
      this.sidenav.toggle(); // Cierra o abre el sidenav
    }
  }
}
