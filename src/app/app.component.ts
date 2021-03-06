import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IdadePage } from '../pages/idade/idade';
import { MudacorPage } from '../pages/mudacor/mudacor';
import { ImcPage } from '../pages/imc/imc';
import { CalcPage } from '../pages/calc/calc';
import { CombustivelPage } from '../pages/combustivel/combustivel';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CavaleirosPage } from '../pages/cavaleiros/cavaleiros';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Idade', component: IdadePage },
      { title: 'Muda cor', component: MudacorPage },
      { title: 'IMC', component: ImcPage},
      { title: 'Calculadora', component: CalcPage},
      { title: 'Navegação entre telas', component: CombustivelPage},
      { title: 'CadastroFuncionário', component: CadastroPage},
      { title: 'Cavaleiros do Zodiaco', component: CavaleirosPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
