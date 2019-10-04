import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sighting',
  templateUrl: './sighting.component.html',
  styleUrls: ['./sighting.component.css']
})
export class SightingComponent implements OnInit {

  lat = null;
  lon = null;
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Got position", position.coords);
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
      });
  }

  submitForm() {
    this.submitted = true;
  }


}
