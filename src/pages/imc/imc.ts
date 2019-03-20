import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
 	selector: 'page-imc',
 	templateUrl: 'imc.html',
})
export class ImcPage {
	imc: any;
	label: any = "hmm...";

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	calcImc(e){
 		var p = Number(e.value.peso);
 		var a = Number(e.value.altura);
 		console.log(e.value, p, a);
 		this.imc = p / (a*a);
 		console.log(this.imc);
 		if(this.imc < 17){
 			this.label = "Muito abaixo do peso";
 		}else if(this.imc >= 17 && this.imc <= 18.49){
 			this.label = "Abaixo do peso";
 		}else if(this.imc >= 18.5 && this.imc <= 24.99){
 			this.label = "Peso normal";
 		}else if(this.imc >= 25 && this.imc <= 29.99){
 			this.label = "Acima do peso";
 		}else if(this.imc >= 30 && this.imc < 34.99){
 			this.label = "Obesidade I";
 		}else if(this.imc >= 35 && this.imc < 39.99){
 			this.label = "Obesidade II (severa)";
 		}else if(this.imc >= 40){
 			this.label = "Obesidade III (mórbida)";
 		}  
 	}



 }
