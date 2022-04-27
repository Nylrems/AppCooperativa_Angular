import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPrestamoComponent } from './details-prestamo/details-prestamo.component';

import { PrestamosPage } from './prestamos.page';

const routes: Routes = [
  {
    path: '',
    component: PrestamosPage
  },
  {
    path: ':id',
    component: DetailsPrestamoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestamosPageRoutingModule {}
