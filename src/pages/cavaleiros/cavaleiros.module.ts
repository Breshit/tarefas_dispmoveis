import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CavaleirosPage } from './cavaleiros';

@NgModule({
  declarations: [
    CavaleirosPage,
  ],
  imports: [
    IonicPageModule.forChild(CavaleirosPage),
  ],
})
export class CavaleirosPageModule {}
