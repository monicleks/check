import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialRegistroPage } from './historial-registro.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialRegistroPageRoutingModule {}
