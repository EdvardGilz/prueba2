import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Agregar } from './agregar';

@NgModule({
  declarations: [
    Agregar,
  ],
  imports: [
    IonicPageModule.forChild(Agregar),
  ],
  exports: [
    Agregar
  ]
})
export class AgregarModule {}
