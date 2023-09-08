import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-restablecer-contra',
  templateUrl: './restablecer-contra.page.html',
  styleUrls: ['./restablecer-contra.page.scss'],
})

export class RestablecerContraPage implements OnInit {

  formLogin =   {
    correo: ""
  }

correo: string =""

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  openWitheExtas()
{

    let datoEnviar : NavigationExtras = {
     state : {
      rutUsuario : this.formLogin.correo,
      
     }
    };
    console.log('desde el inicio'+datoEnviar);
    this.router.navigateByUrl('/home',datoEnviar);
  }    
}







