import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaInicioPage } from './vista-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: VistaInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaInicioPageRoutingModule {}
