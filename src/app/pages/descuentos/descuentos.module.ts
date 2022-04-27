import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescuentosPageRoutingModule } from './descuentos-routing.module';

import { DescuentosPage } from './descuentos.page';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { MenuCondenseModule } from 'src/app/components/menu condense/menu-condense.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescuentosPageRoutingModule,
    MenuModule,
    MenuCondenseModule
  ],
  declarations: [DescuentosPage]
})
export class DescuentosPageModule { }
