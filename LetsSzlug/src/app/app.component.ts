import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { MapaPage } from '../pages/mapa/mapa';
import { PolylinePage } from '../pages/polyline/polyline';
import { PolygonPage } from '../pages/polygon/polygon';
import { HtmlInfoWindowPage } from '../pages/html-info-window/html-info-window';
import { MarkerClusterPage } from '../pages/marker-cluster/marker-cluster';
import { MarkerPage } from '../pages/marker/marker';
import { TileOverlayPage } from '../pages/tile-overlay/tile-overlay';
import { AccountSettings } from '../pages/account/account';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Mapa', component: MapaPage },
      { title: 'Konto', component: AccountSettings },
      { title: 'Ustawienia', component: MapaPage },
      { title: 'Wyloguj', component: MapaPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.rootPage = HomePage;

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
