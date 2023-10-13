import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicacionPageRoutingModule } from './ubicacion-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UbicacionPage } from './ubicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionPageRoutingModule
  ],
  declarations: [UbicacionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UbicacionPageModule {}
