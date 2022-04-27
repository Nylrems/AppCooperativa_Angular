import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-details-cuenta',
  templateUrl: './details-cuenta.component.html',
  styleUrls: ['./details-cuenta.component.scss'],
})
export class DetailsCuentaComponent implements OnInit {

  public cuenta: any ={};
  subscription: Subscription;
  previousUrl: string;

  constructor(
    private route: ActivatedRoute,
    private service: MainService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.service.tabsHide.next(true);
    this.subscription = this.service.cuentas.subscribe(data => {
      const id = this.route.snapshot.paramMap.get('id');
      data.forEach(i => {
        if (i.idcuenta === id) {
           this.cuenta = i;
        }
      });
    });
  }

  ionViewWillLeave() {
    this.service.tabsHide.next(false);
    this.subscription.unsubscribe();
  }
}
