import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudesPage } from './solicitudes.page';
import { AddComponent } from './add/add.component';
import { DetailsSolicitudComponent } from './details-solicitud/details-solicitud.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesPage
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: ':id',
    component: DetailsSolicitudComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesPageRoutingModule { }
