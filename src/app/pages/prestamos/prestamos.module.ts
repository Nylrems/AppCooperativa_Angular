import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestamosPageRoutingModule } from './prestamos-routing.module';

import { PrestamosPage } from './prestamos.page';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { DetailsPrestamoComponent } from './details-prestamo/details-prestamo.component';
import { BackButtonCustomModule } from 'src/app/components/back-button-custom/back-button-custom.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestamosPageRoutingModule,
    MenuModule,
    BackButtonCustomModule
  ],
  declarations: [PrestamosPage, DetailsPrestamoComponent]
})
export class PrestamosPageModule {}
