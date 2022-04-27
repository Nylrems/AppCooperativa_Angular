import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasasPage } from './tasas.page';

const routes: Routes = [
  {
    path: '',
    component: TasasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasasPageRoutingModule {}
