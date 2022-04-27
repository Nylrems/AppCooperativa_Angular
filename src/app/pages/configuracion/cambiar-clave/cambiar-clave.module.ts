import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarClavePageRoutingModule } from './cambiar-clave-routing.module';

import { CambiarClavePage } from './cambiar-clave.page';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { BackButtonCustomModule } from 'src/app/components/back-button-custom/back-button-custom.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarClavePageRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MenuModule,
    BackButtonCustomModule
  ],
  declarations: [CambiarClavePage]
})
export class CambiarClavePageModule {}
