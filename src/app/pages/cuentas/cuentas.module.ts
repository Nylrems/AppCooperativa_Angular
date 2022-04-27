import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentasPageRoutingModule } from './cuentas-routing.module';

import { CuentasPage } from './cuentas.page';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { BarraModule } from 'src/app/components/barra/barra.module';
import { SwiperModule } from 'swiper/angular';
import { DetailsCuentaComponent } from './details-cuenta/details-cuenta.component';
import { BackButtonCustomModule } from 'src/app/components/back-button-custom/back-button-custom.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentasPageRoutingModule,
    MenuModule,
    BarraModule,
    SwiperModule,
    BackButtonCustomModule
  ],
  declarations: [CuentasPage, DetailsCuentaComponent]
})
export class CuentasPageModule {}
