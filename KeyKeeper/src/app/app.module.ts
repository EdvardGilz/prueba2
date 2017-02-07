import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AgregarPage } from '../pages/agregar/agregar';
import { PopOverPage } from '../pages/pop-over/pop-over';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AgregarPage,
    PopOverPage,
    ConfiguracionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AgregarPage,
    PopOverPage,
    ConfiguracionPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
    ]
})
export class AppModule {}
