/* eslint-disable @typescript-eslint/naming-convention */
import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inversiones',
  templateUrl: './inversiones.page.html',
  styleUrls: ['./inversiones.page.scss'],
})
export class InversionesPage implements OnInit {
  title = 'Inversiones';

  inversiones = [
    { idinversion: '161325225', tipo: 'CERTIFICADO', balance_disponible: '317,261.18', },
    { idinversion: '041444125', tipo: 'CERTIFICADO', balance_disponible: '17,261.18', },
    { idinversion: '454541614', tipo: 'CERTIFICADO', balance_disponible: '7,261.18', }
  ];



  constructor(private titleCase: TitleCasePipe) { }

  ngOnInit() {
  }

  toTitleCase(value: any): string {
    return this.titleCase.transform(value);
  }

}
