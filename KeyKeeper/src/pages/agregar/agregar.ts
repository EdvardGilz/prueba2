import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { PassInfoModel } from '../../models/models';

/**
 * Generated class for the Agregar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class Agregar {
  public passInfo: PassInfoModel[] = [];
  public titulo;
  public user;
  public pass;
  public extra;
  public txt;

  constructor(private viewCtrl: ViewController,
              private params: NavParams,
              private storage: Storage) {
    storage.get('info').then((data) => {
      if (data != null) {
        this.passInfo = data;
      }
    });

    if (params.get("id") == undefined) {
      this.txt = "Nueva llave";
    }
    else {
      this.txt = "Modificar llave";
    }

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
