import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Acerca page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-acerca',
  templateUrl: 'acerca.html'
})
export class AcercaPage {

  constructor(public viewCtrl: ViewController) {}

  regresar() {
    this.viewCtrl.dismiss();
  }

}
