import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vista-inicio',
  templateUrl: './vista-inicio.page.html',
  styleUrls: ['./vista-inicio.page.scss'],
})
export class VistaInicioPage implements OnInit {
  
  msg : string="";
  data : string="";
  constructor(private activateroute: ActivatedRoute, private router: Router){
    const navigation = this.router.getCurrentNavigation();
  
    
    this.activateroute.paramMap.subscribe(params =>{
      if(navigation && navigation.extras && navigation.extras.state){
        this.msg = JSON.stringify(navigation.extras.state);
      }else{
        this.msg = 'no se puede obnener los estados como cadena';
      }
      console.log('Desde el login: '+this.msg);
      
      
    });
  
  } 
    ngOnInit() {
    }
  
  }
  