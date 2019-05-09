import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cavaleiros',
  templateUrl: 'cavaleiros.html',
})

export class CavaleirosPage {
  cavaleiros: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cavaleiros = [
      {nome:"Aldebaran de Touro", descricao: "Tem o título de O Furioso Touro Dourado e sua casa é conhecida como O Templo do Touro Dourado "},
      {nome:"Saga de Gêmeos", descricao: "Tem o título de A Encarnação de um Deus e sua casa é conhecida como O Templo dos Gêmeos"},
      {nome:"Mascára da morte de Câncer", descricao:"Tem o título de O Homem que Aprecia as Lutas e Massacres, Carrasco e Guardião dos Mortos. Sua casa é conhecida como O Templo do Caranguejo Gigante"},
      {nome:"Aioria de Leão", descricao:"Tem o título de Um Modelo de Cavaleiro e sua casa é conhecida como O Templo do Leão"},
      {nome:"Shaka de Virgem", descricao:"Tem o título de O Homem mais Próximo de Deus e sua casa é conhecida como O Templo da Donzela"},
      {nome:"Dohko de Libra", descricao:"Tem o título de A Balança Entre o Bem e o Mal e sua casa é conhecida como O Templo da Balança"},
      {nome:"Milo de Escorpião", descricao:"Tem o título de O Impacto Rubro e sua casa é conhecida como O Templo do Escorpião Celestial", atributos:"traiçoeiro, corajoso e luta pelos amigos"},
      {nome:"Aiolos de Sagitário", descricao: "Tem o título de Um Cavaleiro Exemplar e sua casa é conhecida como O Templo do Centauro", atributos:"beleza"},
      {nome:"Shura de Capricórnio", descricao: "Tem o título de O Homem que Levou Seus Membros ao Limite Para Chamá-los de Espada Sagrada e sua casa é conhecida como O Templo do Bode Montês",atributos:"fiel, vingativo, impulsivo, auto confiança"},
      {nome:"Camus de Aquário", descricao: "Tem o título de O Mago da Água e do Gelo e sua casa é conhecida como O Templo da Urna Preciosa", atributos:"neutralidade, prudencia e justiça"},
      {nome:"Aphrodite de Peixes", descricao: "Tem o título de O Guerreiro Cuja Beleza Transcende o Céu e a Terra e sua casa é conhecida como O Templo dos Peixes Gêmeos", atributos:"compaixão, empatia e inspiração"},
      {nome:"Shion de Áries", descricao: "Antigo Cavaleiro de Áries e Mestre do Santuário", atributos:"tranquilo, poderoso, resiliente"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CavaleirosPage');
  }

}
