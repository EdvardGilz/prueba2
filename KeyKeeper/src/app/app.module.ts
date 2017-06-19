import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { Clipboard } from '@ionic-native/clipboard';

import { MyApp } from './app.component';
import { Agregar } from '../pages/agregar/agregar';
import { Configuracion } from '../pages/configuracion/configuracion';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { PopOver } from '../pages/pop-over/pop-over';

@NgModule({
  declarations: [
    MyApp,
    Agregar,
    Configuracion,
    HomePage,
    Login,
    PopOver
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Agregar,
    Configuracion,
    HomePage,
    Login,
    PopOver
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Toast,
    Clipboard
  ]
})
export class AppModule {}
