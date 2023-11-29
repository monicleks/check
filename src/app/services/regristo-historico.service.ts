import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistroHistoricoService {
  private historico: any[] = [];

  addEntrada(rut: string) {
    this.historico.push({ tipo: 'Entrada', rut, timestamp: new Date() });
  }

  addSalida(rut: string) {
    this.historico.push({ tipo: 'Salida', rut, timestamp: new Date() });
  }

  getHistorico() {
    return this.historico;
  }
}
