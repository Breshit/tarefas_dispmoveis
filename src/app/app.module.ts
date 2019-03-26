import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IdadePage } from '../pages/idade/idade';
import { MudacorPage } from '../pages/mudacor/mudacor';
import { ImcPage } from '../pages/imc/imc';
import { CalcPage } from '../pages/calc/calc';
import { CombustivelPage } from '../pages/combustivel/combustivel';
import { GasPage } from '../pages/gas/gas';
import { AlcoolPage } from '../pages/alcool/alcool';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IdadePage,
    MudacorPage,
    ImcPage,
    CalcPage,
    CombustivelPage,
    GasPage,
    AlcoolPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IdadePage,
    MudacorPage,
    ImcPage,
    CalcPage,
    CombustivelPage,
    GasPage,
    AlcoolPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
