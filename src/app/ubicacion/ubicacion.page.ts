import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation'; // Importa GeolocationPosition

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage {
  @ViewChild('map')
  mapRef: ElementRef;
  map: GoogleMap;
  latitude: number | undefined = undefined;
  longitude: number | undefined = undefined;

  constructor() {
    this.mapRef = new ElementRef(null);
    this.map = {} as GoogleMap;
  }

  ionViewDidEnter() {
    this.createMap();
    this.getCurrentLocation();
  }

  async createMap() {
    if (this.mapRef) {
      this.map = await GoogleMap.create({
        id: 'my-map',
        element: this.mapRef.nativeElement,
        apiKey: environment.keys.googleMaps,
        config: {
          center: {
            lat: this.latitude || 33.6, // Usar la latitud actual o un valor predeterminado
            lng: this.longitude || -117.9, // Usar la longitud actual o un valor predeterminado
          },
          zoom: 8,
        },
      });
    } else {
      console.error('¿Está funcionando?');
    }
  }

  async getCurrentLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
    this.createMap();
  }
}