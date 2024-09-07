import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  @Input() tituloRecibir: string = '';

  @Output() resultadoCambio: EventEmitter<number> = new EventEmitter<number>();

  sumameEsta() {
    this.resultado = this.num1 + this.num2;
    this.resultadoCambio.emit(this.resultado);
  }
}
