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
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CavaleirosPage } from '../pages/cavaleiros/cavaleiros';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule } from '@angular/forms';

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
    AlcoolPage,
    CadastroPage,
    CavaleirosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
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
    AlcoolPage,
    CadastroPage,
    CavaleirosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
