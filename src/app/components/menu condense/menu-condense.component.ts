import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-condense',
  templateUrl: './menu-condense.component.html',
})
export class MenuCondenseComponent implements OnInit {

  @Input() title;
  constructor() { }

  ngOnInit() {}



}
