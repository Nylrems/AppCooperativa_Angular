import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InversionesPageRoutingModule } from './inversiones-routing.module';

import { InversionesPage } from './inversiones.page';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { DetailsInversionComponent } from './details-inversion/details-inversion.component';
import { BackButtonCustomModule } from 'src/app/components/back-button-custom/back-button-custom.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InversionesPageRoutingModule,
    MenuModule,
    BackButtonCustomModule
  ],
  declarations: [InversionesPage, DetailsInversionComponent]
})
export class InversionesPageModule {}
