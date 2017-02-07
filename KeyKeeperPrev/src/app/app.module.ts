import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AgregarPage } from '../pages/agregar/agregar';
import { PopOverPage } from '../pages/pop-over/pop-over';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { AcercaPage } from '../pages/acerca/acerca';
import { ApoyaPage } from '../pages/apoya/apoya';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    AgregarPage,
    PopOverPage,
    ConfiguracionPage,
    AcercaPage,
    ApoyaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    AgregarPage,
    PopOverPage,
    ConfiguracionPage,
    AcercaPage,
    ApoyaPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
  ]
})
export class AppModule {}
