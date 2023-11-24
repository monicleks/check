import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-contra',
  templateUrl: './restablecer-contra.page.html',
  styleUrls: ['./restablecer-contra.page.scss'],
})
export class RestablecerContraPage implements OnInit {

  formLogin = {
    correo: ""
  }

  correo: string = "";

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit(): void {}

  async openWitheExtas() {
    // Validar el formato del correo electrónico
    if (!this.validateEmailFormat(this.formLogin.correo)) {
      await this.presentAlert('Formato de correo incorrecto', 'Por favor, ingrese un correo electrónico válido.');
      return;
    }

    let datoEnviar: NavigationExtras = {
      state: {
        rutUsuario: this.formLogin.correo,
      },
    };
    console.log('desde el inicio' + datoEnviar);
    this.router.navigateByUrl('/home', datoEnviar);
  }

  // Función para validar el formato del correo electrónico
  private validateEmailFormat(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Función para mostrar una alerta
  private async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
