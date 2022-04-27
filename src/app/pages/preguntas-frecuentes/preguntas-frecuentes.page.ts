/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.page.html',
  styleUrls: ['./preguntas-frecuentes.page.scss'],
})
export class PreguntasFrecuentesPage implements OnInit {
  title= 'Preguntas Recuentes';
  preguntas = [
    {pregunta: '¿Comó ....... .............. COOPDGII?',respuesta: ' xxxxxxxxxxxxxx xxxxxxxx xxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxx xxxxxxxxxxx'},
    {pregunta: '¿Cuándo ..... ................ COOPDGII?',respuesta: ' xxxxxxxxxxxxxx xxxxxxxx xxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxx xxxxxxxxxxx'},
    {pregunta: '¿Por qué .... ................. COOPDGII?',respuesta: ' xxxxxxxxxxxxxx xxxxxxxx xxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxx xxxxxxxxxxx'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
