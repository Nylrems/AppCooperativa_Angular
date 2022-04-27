import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescuentosPage } from './descuentos.page';

const routes: Routes = [
  {
    path: '',
    component: DescuentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescuentosPageRoutingModule {}
