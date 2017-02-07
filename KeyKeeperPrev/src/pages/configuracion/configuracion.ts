import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Configuracion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html'
})
export class ConfiguracionPage {

  constructor(public viewCtrl: ViewController) {}

  cancelar() {
    this.viewCtrl.dismiss();
  }

  aceptar() {
    
  }

}
