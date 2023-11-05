import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ProteccionGuard implements CanActivate {
  constructor(private router: Router, private storage: Storage) {}

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Promise<boolean> {
    return this.storage.get('loginData').then((loginData) => {
      if (loginData && loginData.rut && loginData.password) {
        // Si existen datos de inicio de sesión válidos en el almacenamiento, el usuario está autenticado
        console.log('El usuario está autenticado.');
        return true;
      } else {
        // Si no existen datos de inicio de sesión válidos, redirige al inicio de sesión ('home')
        console.log('El usuario no está autenticado.');
        this.router.navigate(['/home']);
        return false;
      }
    });
  }
}
