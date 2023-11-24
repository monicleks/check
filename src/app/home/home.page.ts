import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  formLogin = {
    rut: "",
    password: ""
  };

  constructor(
    private router: Router,
    private storage: Storage,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.storage.create(); // Inicializa Ionic Storage
  }

  async openWithExtras() {
    // Validar que el Rut y la contraseña tengan más de 6 caracteres
    if (this.formLogin.rut.length < 6 || this.formLogin.password.length < 6) {
      // Mostrar una alerta al usuario
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El Rut y la contraseña deben tener al menos 6 caracteres.',
        buttons: ['OK']
      });

      await alert.present();
      return; // No continuar si la validación no se cumple
    }

    // Crear una variable para los datos de inicio de sesión
    const loginData = {
      rut: this.formLogin.rut,
      password: this.formLogin.password
    };

    // Guardar los datos de inicio de sesión en el almacenamiento local
    this.storage.set('loginData', loginData).then(() => {
      console.log('Datos de inicio de sesión guardados');
      // Continuar con la navegación a la página de inicio o donde sea necesario
      this.router.navigateByUrl('/vista-inicio');
    });
  }
}
