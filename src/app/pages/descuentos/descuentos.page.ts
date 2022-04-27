import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { MainService } from 'src/app/services/main.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.page.html',
  styleUrls: ['./descuentos.page.scss'],
})
export class DescuentosPage implements OnInit {

  title = 'Descuentos';
  descuentos: any[] = [];

  constructor(
    private storage: StorageService,
    private service: MainService,
    private client: HttpClient,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter(): Promise<void> {

    const loading = await this.loadingController.create({
      message: 'Cargando',
    });
    await loading.present();

    if (this.descuentos.length === 0) {

      const formData = new FormData();
      formData.append('token', await this.storage.get('token'));
      this.client.post<any>('https://coopdgii.com/coopvirtual/App/descuentos', formData)
        .pipe(catchError(this.service.handleError))
        .subscribe({
          next: async (data) => {
            data.data.map((dat) => {
              this.descuentos.push({ mes: dat.mes_str, list: dat.det });
            });
          },
          error: (error) => { this.service.showToast(error);},
          complete: async () => {
            await loading.dismiss();
          }

        });
    }
    else {
      await loading.dismiss();
    }

  }

}

