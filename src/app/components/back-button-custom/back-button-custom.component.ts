import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button-custom',
  templateUrl: './back-button-custom.component.html',
  styleUrls: ['./back-button-custom.component.scss'],
})
export class BackButtonCustomComponent implements OnInit, OnDestroy {

  @Input() title: string;
  activeMode: string;
  subcription: Subscription;
  constructor(
    private service: MainService,
    private location: Location
  ) { }

  ngOnInit() {
    this.subcription = this.service.mode.subscribe(data => {
      this.activeMode = data;
    });
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  back(): void {
    this.location.back();
  }

}
