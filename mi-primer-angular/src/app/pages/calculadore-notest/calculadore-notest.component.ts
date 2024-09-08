import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculadore-notest',
  templateUrl: './calculadore-notest.component.html',
  styleUrls: ['./calculadore-notest.component.css']
})
export class CalculadoreNotestComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  num1: number = 0
  num2: number = 0
  resultado: number = 0


  pressKey(miVariable: any): void {
    this.num1 += miVariable.target.value;
  }

  pressKey2(miVariable: any): void {
    this.num2 += miVariable.target.value;
  }

  sum(){
    this.resultado = this.num1 + this.num2;
  }
}
