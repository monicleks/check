import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private readonly validRut = '123456'; 
  private readonly validPassword = 'potos';

  login(rut: string, password: string): boolean {
    
    if (rut === this.validRut && password === this.validPassword) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      console.log('Inicio de sesión exitoso');
      return true;
    }

    console.log('Inicio de sesión fallido');
    return false; // RUT o contraseña incorrectos
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
