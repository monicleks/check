import { Component } from '@angular/core';
import { RegistroHistoricoService } from '../services/regristo-historico.service';

@Component({
  selector: 'app-historial-registro',
  templateUrl: './historial-registro.page.html',
  styleUrls: ['./historial-registro.page.scss'],
})
export class HistorialRegistroPage {
  historico: any[] | undefined;

  constructor(private registroHistoricoService: RegistroHistoricoService) {}

  ionViewWillEnter() {
    // Se ejecuta cada vez que se carga la página
    this.cargarHistorial();
  }

  cargarHistorial() {
    this.historico = this.registroHistoricoService.getHistorico();
  }
}
