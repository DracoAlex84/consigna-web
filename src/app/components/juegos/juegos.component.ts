import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';
import { __generator } from 'tslib';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent{

  constructor() { }

  generateNumber(){
    const generator = Math.floor(Math.random() * 100);
    console.log(generator)
    alert('El número misterioso fue generado, adivinalo');
    var number = prompt('Ingresa un número');
    var parsed = Number(number)
    while(parsed!==generator && number!==null){
      if(parsed>generator) alert('El número ingresado es mayor')
        else  alert('El número ingresado es menor')
        var number = prompt('Ingresa un número');
        var parsed = Number(number)
    }
    parsed===generator ? alert('¡¡¡HAS ACERTADO!!!') : alert('GAME OVER');
  }
}
