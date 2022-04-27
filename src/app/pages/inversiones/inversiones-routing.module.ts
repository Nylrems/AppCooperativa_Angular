import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsInversionComponent } from './details-inversion/details-inversion.component';

import { InversionesPage } from './inversiones.page';

const routes: Routes = [
  {
    path: '',
    component: InversionesPage
  },
  {
    path: ':id',
    component: DetailsInversionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InversionesPageRoutingModule {}
