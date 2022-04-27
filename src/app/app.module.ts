import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from './components/menu/menu.module';
import { BarraModule } from './components/barra/barra.module';
import { LogoutPage } from './pages/logout/logout.page';
import { TitleCasePipe } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  declarations: [AppComponent, LogoutPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MenuModule,
    BarraModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    { provide: [RouteReuseStrategy], useClass: IonicRouteStrategy,},
    TitleCasePipe
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
