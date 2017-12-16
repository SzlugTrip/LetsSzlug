import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountSettings {

  constructor(public navCtrl: NavController) {

  }

  return(){
    this.navCtrl.pop();
  }

}