import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SwiperModule } from 'swiper/angular';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
    MenuModule,
    HttpClientModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
