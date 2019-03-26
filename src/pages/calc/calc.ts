import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-calc',
 	templateUrl: 'calc.html',
 })
 export class CalcPage {
 	result: number = 0;

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad CalcPage');
 	}

 	soma(n1, n2){
 		this.result = Number(n1) + Number(n2);
 	}
 	sub(n1, n2){
 		this.result = Number(n1) - Number(n2);
 	}
 	mult(n1, n2){
 		this.result = Number(n1) * Number(n2);
 	}
 	div(n1, n2){
 		this.result = Number(n1) / Number(n2);
 	}
 }
