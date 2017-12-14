import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapsComponent } from '../maps/maps.component';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }



  registerRoute(){
    this.navCtrl.push(RegisterPage);
  }

  loginRoute(){
    this.navCtrl.push(LoginPage);
  }
}
