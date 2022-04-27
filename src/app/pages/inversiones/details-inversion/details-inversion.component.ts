/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-details-inversion',
  templateUrl: './details-inversion.component.html',
  styleUrls: ['./details-inversion.component.scss'],
})
export class DetailsInversionComponent implements OnInit {

  subscription: Subscription;
  inversion: any = {};
  inversiones =[
    {idinversion: '161325225',tipo: 'CERTIFICADO', balance_disponible: '317,261.18', },
    {idinversion: '041444125',tipo: 'CERTIFICADO', balance_disponible: '17,261.18', },
    {idinversion: '454541614',tipo: 'CERTIFICADO', balance_disponible: '7,261.18', }
];


  constructor(
    private service: MainService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.service.tabsHide.next(true);
    const id = this.route.snapshot.paramMap.get('id');
    this.inversiones.forEach(i => {
      if (i.idinversion === id) {
         this.inversion = i;
      }
    });


   /*  this.subscription = this.service.cuentas.subscribe(data => {
      const id = this.route.snapshot.paramMap.get('id');
      data.forEach(i => {
        if (i.idinversion === id) {
           this.inversion = i;
        }
      });
    }); */
  }

  ionViewWillLeave() {
    this.service.tabsHide.next(false);
  }
}
