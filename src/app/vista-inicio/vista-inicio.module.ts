import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaInicioPageRoutingModule } from './vista-inicio-routing.module';

import { VistaInicioPage } from './vista-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaInicioPageRoutingModule
  ],
  declarations: [VistaInicioPage]
})
export class VistaInicioPageModule {}
