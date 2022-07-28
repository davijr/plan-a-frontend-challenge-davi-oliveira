import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toast: ToastController
  ) { }

  async info(message: string) {
    const toast = await this.toast.create({
      message,
      color: 'primary',
      duration: 3000
    });
    toast.present();
  }

  async success(message: string) {
    const toast = await this.toast.create({
      message,
      color: 'success',
      duration: 3000
    });
    toast.present();
  }

  async error(message: string) {
    const toast = await this.toast.create({
      message,
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }
}
