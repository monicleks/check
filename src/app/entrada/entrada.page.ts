import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage {
  imageSource: any;

  constructor(private storage: Storage) {}

  takePicture = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt,
        saveToGallery: false,
      });

      this.imageSource = image.webPath ? image.webPath : "";

      console.log('Imagen capturada con éxito:', this.imageSource);

      // Obtener los datos actuales de loginData del almacenamiento local
      const loginData = await this.storage.get('loginData') || { rut: '', password: '', imageURL: '' };

      // Actualizar los datos de rut, contraseña e imageURL
      loginData.rut = 'xx'; // Actualiza el rut según tu lógica
      loginData.password = 'xx'; // Actualiza la contraseña según tu lógica
      loginData.imageURL = this.imageSource;

      // Guardar el objeto loginData actualizado en el almacenamiento local
      await this.storage.set('loginData', loginData);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  getPhoto() {
    return this.imageSource;
  }
}
