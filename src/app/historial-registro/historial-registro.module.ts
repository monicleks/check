import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialRegistroPageRoutingModule } from './historial-registro-routing.module';

import { HistorialRegistroPage } from './historial-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialRegistroPageRoutingModule
  ],
  declarations: [HistorialRegistroPage]
})
export class HistorialRegistroPageModule {}
