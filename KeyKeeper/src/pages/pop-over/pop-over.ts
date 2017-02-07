import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';

import { ConfiguracionPage } from '../configuracion/configuracion';

/*
  Generated class for the PopOver page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html'
})
export class PopOverPage {

  constructor(public viewCtrl: ViewController,
              public modalCtrl: ModalController) {}

  config() {
    let configModal = this.modalCtrl.create(ConfiguracionPage);
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
