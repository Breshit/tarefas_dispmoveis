import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-idade',
	templateUrl: 'idade.html'
})
export class IdadePage {
	label: any = "";

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}

	verIdade(e){
		console.log(e.value);
		if(e.value.idade <= "12"){
			this.label = "Criança";
		}else if(e.value.idade >= "12" && e.value.idade <= "18"){
			this.label = "Adolescente";
		}else if(e.value.idade > "18"){
			this.label = "Adulto";
		}else{
			this.label = "Não sei";
		}
	}
}
