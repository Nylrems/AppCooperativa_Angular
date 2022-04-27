import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  title = 'Solicitudes';
  subs: Subscription;
  solicitudes: any[] = [];
  constructor(
    private service: MainService,
    private loadingController: LoadingController

  ) { }

  ngOnInit() {
  }


  async ionViewWillEnter() {

    const loading = await this.loadingController.create({
      message: 'Cargando',
    });
    await loading.present();

    this.subs = this.service.solicitudes.subscribe({
      next: async (data) => {
        this.solicitudes = data;
        if (this.solicitudes.length === 0) {
          await this.service.getSolicitudes();
        }
        else{
          await loading.dismiss();
        }
      },
      error: async (error) => {
        await loading.dismiss();
      }

    });
  }

  ionViewWillLeave(): void {
    this.subs.unsubscribe();
  }


}
