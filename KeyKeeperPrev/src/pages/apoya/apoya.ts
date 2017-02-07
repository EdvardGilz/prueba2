import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Apoya page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-apoya',
  templateUrl: 'apoya.html'
})
export class ApoyaPage {

  constructor(public viewCtrl: ViewController) {}

  regresar() {
    this.viewCtrl.dismiss();
  }

}
