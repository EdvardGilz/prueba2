import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Toast } from 'ionic-native';

import { HomePage } from '../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public conPass = true;
  public pass;
  public passStored;
  public passN;
  public passN2;
  public btnDisabled = true;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public storage: Storage) {
    
    this.verificaPass();
  }

  verificaPass() {
    this.storage.get('pass').then((data) => {
      if (data == null) {
        this.conPass = false;
      }
      else {
        this.passStored = data;
      }
    });
  }

  verificarLlenado() {
    if (this.passN && this.passN2 && this.passN != "" && this.passN2 != "" && this.passN == this.passN2) {
      this.btnDisabled = false;
    }
    else {
      this.btnDisabled = true;
    }
  }

  verificarLlenado2() {
    if (this.pass && this.pass != "") {
      this.btnDisabled = false;
    }
    else {
      this.btnDisabled = true;
    }
  }

  guardar() {
    this.storage.set('pass', this.passN);
    this.navCtrl.setRoot(HomePage);
  }

  entrar() {
    if (this.pass == this.passStored) {
      this.navCtrl.setRoot(HomePage);
    }
    else {
      console.log("no valido");
      Toast.showShortBottom('Contraseña invalida').subscribe();
    }
  }

  eliminarStorage() {
    let confirm = this.alertCtrl.create({
      title: 'Alerta',
      message: "Estas a punto de eliminar toda la información de la app. ¿Estas seguro?",
      buttons: [
        {
          text: 'No borrar',
          role: 'cancel'
        },
        {
          text: "Si borrar",
          handler: () => {
            this.storage.clear();
            this.verificaPass();
          }
        }
      ]
    });
    confirm.present();
  }
}
