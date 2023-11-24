import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-confi',
  templateUrl: './confi.page.html',
  styleUrls: ['./confi.page.scss'],
})
export class ConfiPage {

  constructor(
    private router: Router,
    private storage: Storage,
    private alertController: AlertController
  ) {}

  async cerrarSesion() {
    // Eliminar los datos de inicio de sesión del almacenamiento local y despues redirige a home
    await this.storage.remove('loginData');
    
    // Navegar de regreso a la página de inicio
    this.router.navigateByUrl('/home');
  }

  async cambiarContrasena() {
    // Navegar a la página de restablecer contraseña, solo te re dirige a esa pagina si intenta volver a tras te lleva a confi
    this.router.navigateByUrl('/restablecer-contra');
  }

}
