import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss'],
})
export class BarraComponent implements OnInit {

  @Input() tabsHide: boolean;

  constructor() { }

  ngOnInit() {
   }

}

interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string };
  target: HTMLIonTabsElement;
}
