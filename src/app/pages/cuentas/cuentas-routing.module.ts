import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentasPage } from './cuentas.page';
import { DetailsCuentaComponent } from './details-cuenta/details-cuenta.component';

const routes: Routes = [
  {
    path: '',
    component: CuentasPage
  },
  {
    path: ':id',
    component: DetailsCuentaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentasPageRoutingModule { }
