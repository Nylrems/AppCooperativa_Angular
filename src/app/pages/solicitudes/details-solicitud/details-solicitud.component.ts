import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-details-solicitud',
  templateUrl: './details-solicitud.component.html',
  styleUrls: ['./details-solicitud.component.scss'],
})
export class DetailsSolicitudComponent implements OnInit {

  public solicitud: any ={};
  public datos: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private service: MainService
  ) { }

  ngOnInit() {

    const codigo = this.route.snapshot.paramMap.get('id');
    this.service.solicitudes.subscribe(data => {

      data.forEach(i => {
        if (i.codigo === codigo) {
          this.solicitud = i;
          this.datos = i.datos;
        }
      });
    });
  }

  ionViewWillEnter() {
    this.service.tabsHide.next(true);
  }

  ionViewWillLeave() {
    this.service.tabsHide.next(false);
  }
}
