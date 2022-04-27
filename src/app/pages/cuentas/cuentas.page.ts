import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.page.html',
  styleUrls: ['./cuentas.page.scss'],
})
export class CuentasPage implements OnInit {

  title = 'Cuentas';
  cuentas: any[] = [];
  subscription: Subscription;
  constructor(
    private service: MainService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.subscription = this.service.cuentas.subscribe(
      async data => {
        this.cuentas = data;
        if (this.cuentas.length === 0) {
          await this.service.getResume();
        }
      }
    );

  }

  ionViewWillLeave(): void {
    this.subscription.unsubscribe();
  }

}
