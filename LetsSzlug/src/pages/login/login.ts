import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapsComponent } from '../maps/maps.component';
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
      this.navCtrl.push(MapsComponent);
      console.log(this.loginForm);
    }
  }

  registerRoute(){
    this.navCtrl.push(RegisterPage);
  }

}
