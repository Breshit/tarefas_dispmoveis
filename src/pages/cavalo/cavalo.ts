import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CavaloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cavalo',
  templateUrl: 'cavalo.html',
})
export class CavaloPage {
  c: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.c = this.navParams.get('c');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CavaloPage');
  }
}
