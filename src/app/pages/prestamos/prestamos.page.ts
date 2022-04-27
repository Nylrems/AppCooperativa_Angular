import { TitleCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.page.html',
  styleUrls: ['./prestamos.page.scss'],
})
export class PrestamosPage implements OnInit{

  title = 'Prestamos';
  prestamos: any[] = [];
  subscription: Subscription;
  constructor(
    private service: MainService,
    private titleCase: TitleCasePipe
    ) { }


  ngOnInit() {
  }

  ionViewWillEnter(){
    this.subscription = this.service.prestamos.subscribe({
      next: async (data) => {
        this.prestamos = data;
        if (this.prestamos.length === 0) {
          await this.service.getResume();
        }
      }
    });
  }

  ionViewWillLeave(): void {
    this.subscription.unsubscribe();
  }

  toTitleCase(value: any): string {
    return this.titleCase.transform(value);
  }

}
