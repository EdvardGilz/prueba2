import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { PassInfoModel } from '../../models/models';

/*
  Generated class for the Agregar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html'
})
export class AgregarPage {
  public passInfo: PassInfoModel[] = [];
  public titulo;
  public user;
  public pass;
  public extra;

  constructor(public viewCtrl: ViewController,
              public params: NavParams,
              public storage: Storage) {
    storage.get('info').then((data) => {
      if (data != null) {
        this.passInfo = data;
      }
    });

    this.titulo = params.get('titulo');
    this.user = params.get('user');
    this.pass = params.get('pass');
    this.extra = params.get('extra');
  }

  regresar() {
    this.viewCtrl.dismiss();
  }

  guardar() {
    if (this.params.get('mod') == true) {
      var index = this.params.get('id');
      this.storage.get('info').then((data) => {
        data[index].titulo = this.titulo;
        data[index].user = this.user;
        data[index].pass = this.pass;
        data[index].extra = this.extra;

        this.passInfo = data;
      })
      .then(() => {
        this.storage.set('info', this.passInfo);
        this.viewCtrl.dismiss();
      });
    }
    else {
      var newData = {
        titulo: this.titulo,
        user: this.user,
        pass: this.pass,
        extra: this.extra,
        activo: false
      };

      this.passInfo.push(newData);
      this.storage.set('info', this.passInfo);
      this.viewCtrl.dismiss();
    }
  }

}
