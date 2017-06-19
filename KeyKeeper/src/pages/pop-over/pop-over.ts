import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController } from 'ionic-angular';

import { Configuracion } from '../configuracion/configuracion';

/**
 * Generated class for the PopOver page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html',
})
export class PopOver {

  constructor(public viewCtrl: ViewController,
              public modalCtrl: ModalController) {
  }

  config() {
    let configModal = this.modalCtrl.create(Configuracion);
    configModal.present();

    configModal.onWillDismiss(() => {

    });

    this.viewCtrl.dismiss();
  }

  // acerca() {
  //   let acercaModal = this.modalCtrl.create(AcercaPage);
  //   acercaModal.present();

  //   acercaModal.onWillDismiss(() => {

  //   });

  //   this.viewCtrl.dismiss();
  // }

  // apoya() {
  //   let apoyaModal = this.modalCtrl.create(ApoyaPage);
  //   apoyaModal.present();

  //   apoyaModal.onWillDismiss(() => {

  //   });

  //   this.viewCtrl.dismiss();
  // }

}
