import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  formLogin =   {
    rut: "",
    password: ""
  }

rut: string =""
password: string=""

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  openWitheExtas()
{

    let datoEnviar : NavigationExtras = {
     state : {
      rutUsuario : this.formLogin.rut,
      
     }
    };
    console.log('desde el inicio'+datoEnviar);
    this.router.navigateByUrl('/vista-inicio',datoEnviar);
  }    
}




