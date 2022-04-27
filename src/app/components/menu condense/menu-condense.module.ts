import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuCondenseComponent } from './../menu condense/menu-condense.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [MenuCondenseComponent],
  exports:[MenuCondenseComponent]


})

export class MenuCondenseModule { }
