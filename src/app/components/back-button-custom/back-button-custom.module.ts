import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BackButtonCustomComponent } from './back-button-custom.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [BackButtonCustomComponent],
  exports:[BackButtonCustomComponent]


})

export class BackButtonCustomModule { }
