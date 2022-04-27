import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarCuentaPageRoutingModule } from './recuperar-cuenta-routing.module';

import { RecuperarCuentaPage } from './recuperar-cuenta.page';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BackButtonCustomModule } from 'src/app/components/back-button-custom/back-button-custom.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarCuentaPageRoutingModule,
    MenuModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BackButtonCustomModule
  ],
  declarations: [RecuperarCuentaPage]
})
export class RecuperarCuentaPageModule {}
