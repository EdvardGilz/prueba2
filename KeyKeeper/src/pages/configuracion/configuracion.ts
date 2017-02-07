import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Toast } from 'ionic-native';

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
  public pass;
  public passN;
  public passN2;
  public btnDisabled = true;
  public diferentes = false;
  public diferentes2 = false;

  constructor(public viewCtrl: ViewController,
              public storage: Storage) {}

  cancelar() {
    this.viewCtrl.dismiss();
  }

  verificarLlenado() {
    this.diferentes2 = false;
    
    if (this.pass && this.passN && this.passN2 && this.pass != "" && this.passN != "" && this.passN2 != "" && this.passN == this.passN2) {
      if (this.pass == this.passN) {
        this.btnDisabled = true;
        this.diferentes2 = true;
      }
      else {
        this.diferentes2 = false;
        this.btnDisabled = false;
      }
    }
    else {
      this.btnDisabled = true;
    }

    if (this.passN == this.passN2) {
      this.diferentes = false;
    }
    else {
      if (this.passN2) {
        if (this.passN.length == this.passN2.length || this.passN2.length > this.passN.length) {
          this.diferentes = true;
        }
        else {
          this.diferentes = false;
        }
      }
    }
  }

  aceptar() {
    this.storage.get('pass').then((data) => {
      if (this.pass != data) {
        // Toast.showShortBottom('La contraseña es incorrecta').subscribe();
        console.log("La contraseña es incorrecta")
      }
      else {
        this.storage.set('pass', this.passN);
        // Toast.showShortBottom('La contraseña se ha modificado').subscribe();
        console.log("La contraseña se ha modificado");
        this.viewCtrl.dismiss();
      }
    });
  }

}
