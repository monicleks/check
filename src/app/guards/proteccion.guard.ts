import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProteccionGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
    const requestedUrl = route.url.join('/'); // Obtén la URL solicitada como una cadena

    const allowedRoutes = this.router.config
      .filter(route => route.path !== undefined) // Filtra las rutas definidas
      .map(route => route.path); // Obtiene solo los paths de las rutas definidas

    if (allowedRoutes.includes(requestedUrl)) {
      return true; // Permite el acceso a las rutas permitidas
    } else {
      this.router.navigate(['/not-found']); // Redirige a la página de error si la ruta no está en la lista
      return false;
    }
  }
}
