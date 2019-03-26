import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CombustivelPage } from './combustivel';

@NgModule({
  declarations: [
    CombustivelPage,
  ],
  imports: [
    IonicPageModule.forChild(CombustivelPage),
  ],
})
export class CombustivelPageModule {}
