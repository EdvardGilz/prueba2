import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { Clipboard } from '@ionic-native/clipboard';

import { PassInfoModel } from '../../models/models';

import { Agregar } from '../agregar/agregar';
import { PopOver } from '../pop-over/pop-over';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public passInfo: PassInfoModel[] = [];

  constructor(private navCtrl: NavController,
              private storage: Storage,
              private modalCtrl: ModalController,
              private popoverCtrl: PopoverController,
              private clipboard: Clipboard,
              private toast: Toast) {
    this.cargarData();
  }

  cargarData() {
    this.storage.get('info').then((data) => {
      if (data != null) {
        this.passInfo = data;
      }
    });
  }

  agregarItems() {
    let agregarModal = this.modalCtrl.create(Agregar);
    agregarModal.present();

    agregarModal.onWillDismiss(() => {
      this.cargarData();
    });
  }

  editar(index) {
    this.storage.get('info').then((data) => {
      let modModal = this.modalCtrl.create(Agregar, {
        mod: true,
        id: index,
        titulo: data[index].titulo,
        user: data[index].user,
        pass: data[index].pass,
        extra: data[index].extra
      });
      modModal.present();

      modModal.onWillDismiss(() => {
        this.cargarData();
      });
    });
  }

  eliminar(index) {
    this.storage.get('info').then((data) => {
      data.splice(index, 1);
      this.passInfo = data;
      this.storage.set('info', this.passInfo);
    });
  }

  copiar(index, campo) {
    if (campo == 1) {
      this.clipboard.copy(this.passInfo[index].user);
    }
    else if (campo == 2) {
      this.clipboard.copy(this.passInfo[index].pass);
    }
    else if (campo == 3) {
      this.clipboard.copy(this.passInfo[index].extra);
    }

    // this.toast.showShortBottom('Copiado al portapapeles').subscribe();
    console.log("copiado");
  }

  activar(index) {
    var activo = 0;
    if (this.passInfo[index].activo == true) {
      activo = 1;
    }
    for (var i in this.passInfo) {
      this.passInfo[i].activo = false;
    }

    if (activo == 0) {
      this.passInfo[index].activo = true;
    }
  }

  abrirMenu(ev) {
    let popover = this.popoverCtrl.create(PopOver);
    popover.present({
      ev: ev
    });
  }

}
