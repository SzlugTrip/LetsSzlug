import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  loginForm = {};

  loginUser(){
    //check database
    if(true){
      this.navCtrl.push(MapaPage);
      console.log(this.loginForm);
    }
  }

  registerRoute(){
    this.navCtrl.push(RegisterPage);
  }

}
