import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SugerenciasPageRoutingModule } from './sugerencias-routing.module';

import { SugerenciasPage } from './sugerencias.page';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SugerenciasPageRoutingModule,
    MenuModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule
  ],
  declarations: [SugerenciasPage]
})
export class SugerenciasPageModule {}
