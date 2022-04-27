import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BarraComponent } from './barra.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
imports:[
  IonicModule,
  MatIconModule
],
declarations:[BarraComponent],
exports:[BarraComponent]

})

export class BarraModule {}
