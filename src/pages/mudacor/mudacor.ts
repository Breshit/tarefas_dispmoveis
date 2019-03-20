import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MudacorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-mudacor',
 	templateUrl: 'mudacor.html',
 })
 export class MudacorPage {

 	flag: boolean;

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad MudacorPage');
 	}

 	mudar(){
 		this.flag = !this.flag;
 	}
 }
