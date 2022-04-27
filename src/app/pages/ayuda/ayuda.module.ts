import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudaPageRoutingModule } from './ayuda-routing.module';

import { AyudaPage } from './ayuda.page';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { MenuCondenseModule } from 'src/app/components/menu condense/menu-condense.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudaPageRoutingModule,
    MenuModule,
    MenuCondenseModule
  ],
  declarations: [AyudaPage]
})
export class AyudaPageModule { }
