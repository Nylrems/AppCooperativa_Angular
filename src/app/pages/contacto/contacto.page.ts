import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  title='Contactos';
  agentes = [
    {nombre: 'nombre', puesto: 'puesto', telefono:'809-000-0000', correo: 'correo@gmail.com', imagen:'./../../../assets/images/img.png'},
    {nombre: 'nombre2', puesto: 'puesto', telefono:'809-000-0000', correo: 'correo@gmail.com', imagen:'./../../../assets/images/img.png'},
    {nombre: 'nombre3', puesto: 'puesto', telefono:'809-000-0000', correo: 'correo@gmail.com', imagen:'./../../../assets/images/img.png'},
    {nombre: 'nombre4', puesto: 'puesto', telefono:'809-000-0000', correo: 'correo@gmail.com', imagen:'./../../../assets/images/img.png'},
    {nombre: 'nombre5', puesto: 'puesto', telefono:'809-000-0000', correo: 'correo@gmail.com', imagen:'./../../../assets/images/img.png'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
