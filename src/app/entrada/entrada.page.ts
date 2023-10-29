import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { Storage } from '@ionic/storage-angular';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {
  imageSource: any;
  userData: any = {}; // Para almacenar los datos del usuario
  rutToAssociate: string = ''; // Para capturar el Rut ingresado por el usuario

  constructor(
    private domSanitizer: DomSanitizer,
    private storage: Storage
  ) {}

  async ngOnInit() {
    // Recuperar los datos de inicio de sesión del almacenamiento local
    this.userData = await this.storage.get('loginData');
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      saveToGallery: true, // Guarda la imagen en la galería
    });

    if (image && image.path) {
      // Obtener la URL de la imagen guardada en la galería
      const imageUrl = Capacitor.convertFileSrc(image.path);

      // Actualizar la propiedad imageSource para mostrar la previsualización
      this.imageSource = this.domSanitizer.bypassSecurityTrustUrl(imageUrl);
    } else {
      console.error('Error al capturar la imagen.');
    }
  }

  sendPhoto = async () => {
    // Verificar que se haya ingresado un Rut antes de asociar la imagen
    if (this.rutToAssociate) {
      // Guardar la imagen en el almacenamiento local con el Rut del usuario como clave
      await this.storage.set(this.rutToAssociate, this.imageSource);

      // Mostrar un mensaje de éxito o redirigir a otra página
      console.log('Imagen asociada con éxito al Rut:', this.rutToAssociate);
    } else {
      console.error('Debes ingresar un Rut para asociar la imagen.');
    }
  }
}
