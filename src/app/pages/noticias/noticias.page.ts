import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  title = 'Noticias';
  listNoticias: any[] = [];
  subs: Subscription;
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

    this.subs = this.service.noticia.subscribe({
      next: async (data) => {
        this.listNoticias = data;
        if (this.listNoticias.length === 0) {
          this.service.getData('noticias');
        }
        else {
          await loading.dismiss();
        }
      },
      error: async (error) => {
        await loading.dismiss();
      }

    });

    // this.subs = this.service.noticia.subscribe(data=>{
    //   this.listNoticias = data;

    //   if(this.listNoticias.length ===0){
    //     this.service.getData('noticias');
    //   }
    // });
  }

  ionViewWillLeave(): void {
    this.subs.unsubscribe();
  }
}
