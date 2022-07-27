import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  map: GoogleMap;

  constructor() {}

  ionViewDidEnter(){
    this.createMap();
  }

  async createMap(){
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.maps,
      element: this.mapRef.nativeElement,
      forceCreate: true,
      config: {
        zoom: 8,
        center: {
          lat: 33.6,
          lng: -117.9
        }
      }
    });
    this.map.addMarker({
      coordinate: {
        lat: 33.6,
        lng: -117.9
      },
      title: 'My Marker',
      iconUrl: '/assets/svg/home.svg',
    });
  }
}
