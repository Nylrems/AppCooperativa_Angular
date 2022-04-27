import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SugerenciasPage } from './sugerencias.page';

const routes: Routes = [
  {
    path: '',
    component: SugerenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SugerenciasPageRoutingModule {}
