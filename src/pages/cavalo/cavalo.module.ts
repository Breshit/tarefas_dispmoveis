import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CavaloPage } from './cavalo';

@NgModule({
  declarations: [
    CavaloPage,
  ],
  imports: [
    IonicPageModule.forChild(CavaloPage),
  ],
})
export class CavaloPageModule {}
