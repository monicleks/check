  import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
  import { GoogleMap}  from '@capacitor/google-maps';
  import { environment } from 'src/environments/environment';
  import { Geolocation } from '@capacitor/geolocation';


  @Component({
    selector: 'app-ubicacion',
    templateUrl: './ubicacion.page.html',
    styleUrls: ['./ubicacion.page.scss'],
    
  })
  export class UbicacionPage{
    @ViewChild('map')
    mapRef:ElementRef;
    map: GoogleMap;
    constructor() {
      this.mapRef = new ElementRef(null); // Inicializa mapRef
      this.map = {} as GoogleMap; // Inicializa map
    }

    ionViewDidEnter(){
      this.createMap();
    }
    async createMap() {
      if (this.mapRef) {
        this.map = await GoogleMap.create({
          id: 'my-map',
          element: this.mapRef.nativeElement,
          apiKey: environment.keys.googleMaps,
          config: {
            center: {
              lat: 33.6,
              lng: -117.9,
            },
            zoom: 8,
          },
        });
      } else {
        console.error('alo funciono?.');
      }
    } 
}
const printCurrentPosition = async () => {
  const coordinates = await Geolocation.getCurrentPosition();

  console.log('Current position:', coordinates);
};
