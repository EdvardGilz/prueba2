import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'; 
import { NavController, ModalController, PopoverController } from 'ionic-angular';
import { Clipboard, Toast } from 'ionic-native';

import { PassInfoModel } from '../../models/models';

import { AgregarPage } from '../agregar/agregar';
import { PopOverPage } from '../pop-over/pop-over';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public passInfo: PassInfoModel[] = [];

  constructor(public navCtrl: NavController,
              public storage: Storage,
              public modalCtrl: ModalController,
              public popoverCtrl: PopoverController) {
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
    let agregarModal = this.modalCtrl.create(AgregarPage);
    agregarModal.present();

    agregarModal.onWillDismiss(() => {
      this.cargarData();
    });
  }

  editar(index) {
    this.storage.get('info').then((data) => {
      let modModal = this.modalCtrl.create(AgregarPage, {
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
      Clipboard.copy(this.passInfo[index].user);
    }
    else if (campo == 2) {
      Clipboard.copy(this.passInfo[index].pass);
    }
    else if (campo == 3) {
      Clipboard.copy(this.passInfo[index].extra);
    }

    // Toast.showShortBottom('Copiado al portapapeles').subscribe();
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
    let popover = this.popoverCtrl.create(PopOverPage);
    popover.present({
      ev: ev
    });
  }

} 
