import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreguntasFrecuentesPageRoutingModule } from './preguntas-frecuentes-routing.module';

import { PreguntasFrecuentesPage } from './preguntas-frecuentes.page';
import { MenuModule } from 'src/app/components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreguntasFrecuentesPageRoutingModule,
    MenuModule
  ],
  declarations: [PreguntasFrecuentesPage]
})
export class PreguntasFrecuentesPageModule {}
