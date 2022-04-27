import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasasPageRoutingModule } from './tasas-routing.module';

import { TasasPage } from './tasas.page';
import { MenuModule } from 'src/app/components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasasPageRoutingModule,
    MenuModule
  ],
  declarations: [TasasPage]
})
export class TasasPageModule {}
