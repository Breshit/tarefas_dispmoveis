import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { GasPage } from '../gas/gas';
import { AlcoolPage } from '../alcool/alcool';

/**
 * Generated class for the CombustivelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
 	selector: 'page-combustivel',
 	templateUrl: 'combustivel.html',
})
export class CombustivelPage {

 	constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad CombustivelPage');
 	}

 	funcao(a, g){
 		var r =  a/g;
 		if(r < 0.70){
 			this.navCtrl.push(AlcoolPage);
 		}else{
 			this.navCtrl.push(GasPage);
 		}
 	}
}
