import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { RegistroHistoricoService } from '../services/regristo-historico.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage {
  imageSource: any;

  constructor(
    private storage: Storage,
    public toastController: ToastController,
    private registroHistoricoService: RegistroHistoricoService
  ) {}

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

      // Solo actualizar la propiedad imageURL
      loginData.imageURL = this.imageSource;

      // Guardar el objeto loginData actualizado en el almacenamiento local
      await this.storage.set('loginData', loginData);

      // Registrar entrada en el historial
      this.registroHistoricoService.addEntrada(loginData.rut);

      // Mostrar un mensaje con la hora de ingreso
      this.presentToast(`Hora de ingreso: ${new Date().toLocaleTimeString()}`);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  getPhoto() {
    return this.imageSource;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000, // Duración en milisegundos
      position: 'bottom',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
        },
      ],
    });

    
    toast.present();
  }
}
