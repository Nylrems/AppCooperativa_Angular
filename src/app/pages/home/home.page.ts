/* eslint-disable @typescript-eslint/naming-convention */

import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation, Renderer2 } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { MainService } from '../../services/main.service';
import { Subscription } from 'rxjs';
import { TitleCasePipe } from '@angular/common';
import { LoadingController } from '@ionic/angular';


SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, AfterContentChecked {

  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: true,
    autoplay: { delay: 5000 }
  };

  title = 'Inicio';
  listNoticia: any[] = [];
  cuentas: any = [];
  prestamos: any = [];
  subsList: Array<Subscription> = [];
  inversiones = [
    { idinversion: '161325225', tipo: 'CERTIFICADO', balance_disponible: '317,261.18', },
    { idinversion: '041444125', tipo: 'CERTIFICADO', balance_disponible: '17,261.18', },
    { idinversion: '454541614', tipo: 'CERTIFICADO', balance_disponible: '7,261.18', }
  ];
  constructor(
    private service: MainService,
    private titleCase: TitleCasePipe,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {

  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  async ionViewWillEnter() {

    const loading = await this.loadingController.create({
      message: 'Por favor, espere...',
    });
    await loading.present();

    await this.service.getResume();
    this.service.getData('noticias');
    const promises: any = [];
    let subs1; let subs2; let subs3;

    promises.push(new Promise(async (resolve, rejects) => {
      subs1 = this.service.cuentas.subscribe({
        next: (data) => {
          this.cuentas = data;
          resolve('done');
        },
        error: () => {
          rejects();
        }
      });
    }
    ));

    promises.push(new Promise(async (resolve, rejects) => {
      subs2 = this.service.prestamos.subscribe({
        next: (data) => {
          this.prestamos = data;
          resolve('done');
        },
        error: () => {
          rejects();
        }
      });
    }
    ));

    promises.push(new Promise(async (resolve, rejects) => {
      subs3 = this.service.noticia.subscribe({
        next: (data) => {
          this.listNoticia = data;
          resolve('done');
        },
        error: () => {
          rejects();
        }
      });
    }
    ));

    this.subsList.push(subs1);
    this.subsList.push(subs2);
    this.subsList.push(subs3);

    Promise.all(promises).then(async () => {
      await loading.dismiss();

    }).catch(() => {



    });
  }


  ionViewWillLeave(): void {

    this.subsList.forEach(i => {
      i.unsubscribe();
    });
  }

  toTitleCaseH(value: any): string {
    return this.titleCase.transform(value);
  }

}
