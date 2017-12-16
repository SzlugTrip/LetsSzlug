import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
 // GoogleMapsAnimation,
  MarkerCluster,
  MyLocation
} from '@ionic-native/google-maps';
import {Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {
  mapReady: boolean = false;
  map: GoogleMap;
  current_lat;
  current_lng;
  constructor(
    private GoogleMaps: GoogleMaps,
    private Geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public popoverCtrl: PopoverController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.loadMap();
  //  this.nativeGeocoder.forwardGeocode('Berlin')
  //  .then((coordinates: NativeGeocoderForwardResult) => this.showToast('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude))
  //  .catch((error: any) => console.log(error));
  }
  loadMap() {
    let locationOptions = {timeout: 10000, enableHighAccuracy: true};
    this.Geolocation.getCurrentPosition(locationOptions).then((position) => {
      this.map = this.GoogleMaps.create('map_canvas', {
        camera: {
          target: {
            lat: this.current_lat = position.coords.latitude,
            lng: this.current_lng = position.coords.longitude
          },
          zoom: 18,
          tilt: 30
        }
      });
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        this.mapReady = true;
        this.addCluster(this.dummyData());
      });
    });
  }
    // Create a map after the view is loaded.
    // (platform is already ready in app.component.ts)
   

    // Wait the maps plugin is ready until the MAP_READY event
    

  addCluster(data) {
    this.map.addMarkerCluster({
      markers: data,
      icons: [
        {
          min: 3,
          max: 9,
          url: "./assets/markercluster/small.png",
          label: {
            color: "white"
          }
        },
        {
          min: 10,
          url: "./assets/markercluster/large.png",
          label: {
            color: "white"
          }
        }
      ]
    }).then((markerCluster: MarkerCluster) => {

      markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
        let marker: Marker = params[1];
        marker.setTitle(marker.get("name"));
        marker.setSnippet(marker.get("address"));
        marker.showInfoWindow();
      });

    });
  }
  onButtonClick() {
    if (!this.mapReady) {
      this.showToast('map is not ready yet. Please try again.');
      return;
    }
    //this.map.clear();

    // Get the location of you
    this.map.getMyLocation()
      .then((location: MyLocation) => {

        // Move the map camera to the location with animation
     /*   return this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        }).then(() => {
          // add a marker
          return this.map.addMarker({
            title: '@ionic-native/google-maps plugin!',
            snippet: 'This plugin is awesome!',
            position: location.latLng,
            animation: GoogleMapsAnimation.BOUNCE
          });
        })
      }).then((marker: Marker) => {
        // show the infoWindow
        marker.showInfoWindow();

        // If clicked it, display the alert
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast('clicked!');
        }); */
      }); 

      this.addCluster([
        {
          "position": {
            "lat": this.current_lat,
            "lng": this.current_lng
          },
          "name": "Szlugen",
          "address": "Szlaban \n Przy slaskich",
          "icon": "assets/markercluster/marker.png"
        }
      ])
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present(toast);
  }
  dummyData() {
    return [
      {
        "position": {
          "lat": 50.263826,
          "lng": 19.0170435
        },
        "name": "Szlugen Pauzen",
        "address": "Szlaban \n Przy slaskich",
        "icon": "assets/markercluster/marker.png"
      }
    ]};
}
