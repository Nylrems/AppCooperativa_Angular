import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasas',
  templateUrl: './tasas.page.html',
  styleUrls: ['./tasas.page.scss'],
})
export class TasasPage implements OnInit {

  title = 'Tasas';
  date =new Date().toDateString();
  constructor() { }

  ngOnInit() {
  }

}
