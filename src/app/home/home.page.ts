import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

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

  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {
    this.storage.create(); // Inicializa Ionic Storage
  }

  openWithExtras() {
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
