import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-details-prestamo',
  templateUrl: './details-prestamo.component.html',
  styleUrls: ['./details-prestamo.component.scss'],
})
export class DetailsPrestamoComponent implements OnInit {

  subscription: Subscription;
  prestamo: any = {};
  constructor(
    private service: MainService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.service.tabsHide.next(true);
    this.subscription = this.service.prestamos.subscribe(data => {
      const id = this.route.snapshot.paramMap.get('id');
      data.forEach(i => {
        if (i.idprestamo === id) {
          this.prestamo = i;
        }
      });
    });
  }

  ionViewWillLeave() {
    this.service.tabsHide.next(false);
    this.subscription.unsubscribe();
  }
}
