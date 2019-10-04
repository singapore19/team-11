import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, icon } from 'leaflet';
// declare variable
declare let L;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  options = {
  	layers: [
  		tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
  	],
  	zoom: 12,
  	center: latLng(1.3667974879, 103.8209835067)
  };


  layers = [];

  sightings =[
    {
        name:'John',
        phone_number:'91234567',
        dateTime : '29/05/2019 05:50:06',
        num_of_people: '1',
        description: 'Elderly man in 60s',
        n_lat: 1.370660,
        n_long: 103.956859,
        loc_details: 'Under block',
        attended: false
    },
    {
        name:'John',
        phone_number:'91234567',
        dateTime : '15/03/2019 19:30:06',
        num_of_people: '4',
        description: 'Family of 4. Young girl aged 3-5 and baby',
        n_lat: 1.299285,
        n_long: 103.909398,
        loc_details: 'None',
        attended: false
    },
    {
        name:'Frank',
        phone_number:'81234567',
        dateTime : '8/12/2018 05:50:25',
        num_of_people: '2',
        description: 'Couple in 70s',
        n_lat: 1.302949,
        n_long: 103.920004,
        loc_details: 'Nil',
        attended: false
    },
    {
        name:'David',
        phone_number:'83453458',
        dateTime : '26/8/2018 10:03:00',
        num_of_people: '1',
        description: 'Middle-aged women, short brown hair',
        n_lat: 1.349098,
        n_long: 103.939281,
        loc_details: 'N/A',
        attended: false
    },
    {
        name:'Asher',
        phone_number:'91234123',
        dateTime : '7/9/2019 10:03:00',
        num_of_people: '1',
        description: 'Bald uncle with wooden cane',
        n_lat: 1.353150,
        n_long: 103.884368,
        loc_details: 'N/A',
        attended: false
    },
        {
        name:'Mark',
        phone_number:'91234567',
        dateTime : '29/07/2019 05:50:06',
        num_of_people: '1',
        description: 'Elderly man in 60s',
        n_lat: 1.441654,
        n_long: 103.773770,
        loc_details: 'Under block',
        attended: false
    },
    {
        name:'Ivan',
        phone_number:'9234568',
        dateTime : '15/03/2019 19:30:06',
        num_of_people: '4',
        description: 'Family of 4. Young girl aged 3-5 and baby',
        n_lat: 1.432522,
        n_long: 103.840313,
        loc_details: 'None',
        attended: true
    },
    {
        name:'Jessie',
        phone_number:'81234567',
        dateTime : '8/12/2018 05:50:25',
        num_of_people: '2',
        description: 'Couple in 70s',
        n_lat: 1.414479,
        n_long: 103.841422,
        loc_details: 'Nil',
        attended: true
    },
    {
        name:'Cameron',
        phone_number:'83453458',
        dateTime : '26/8/2017 21:50:00',
        num_of_people: '1',
        description: 'Middle-aged women, short brown hair',
        n_lat: 1.357881,
        n_long: 103.845163,
        loc_details: 'N/A',
        attended: true
    },
    {
        name:'Joey',
        phone_number:'91823412',
        dateTime : '7/9/2019 10:03:00',
        num_of_people: '1',
        description: 'Bald uncle with wooden cane',
        n_lat: 1.370660,
        n_long: 103.956859,
        loc_details: 'N/A',
        attended: true
    },
    {
        name:'Zac',
        phone_number:'92341237',
        dateTime : '7/9/2019 10:03:00',
        num_of_people: '1',
        description: 'Middle-aged women, short brown hair',
        n_lat: 1.433509,
        n_long: 103.781172,
        loc_details: 'N/A',
        attended: true
    },
    {
        name:'Tom',
        phone_number:'91241238',
        dateTime : '7/9/2019 10:03:00',
        num_of_people: '1',
        description: 'Middle-aged women, short brown hair',
        n_lat: 1.435511,
        n_long: 103.790432,
        loc_details: 'N/A',
        attended: true
    },
    {
        name:'Tom',
        phone_number:'92341293',
        dateTime : '7/9/2019 10:03:00',
        num_of_people: '1',
        description: 'Family of 3. Young boy aged 5-6',
        n_lat: 1.435511,
        n_long: 103.790432,
        loc_details: 'N/A',
        attended: true
    },
    {
        name:'Tom',
        phone_number:'92341293',
        dateTime : '19/5/2019 17:03:00',
        num_of_people: '1',
        description: 'Family of 3. Young girl aged 3-5',
        n_lat: 1.397003,
        n_long: 103.748404,
        loc_details: 'N/A',
        attended: false
    },
    {
        name:'Tom',
        phone_number:'92341293',
        dateTime : '7/11/2019 20:16:00',
        num_of_people: '1',
        description: 'Elderly man in 40s',
        n_lat: 1.346004,
        n_long: 103.754180,
        loc_details: 'N/A',
        attended: false
    },
    {
        name:'Tom',
        phone_number:'92341293',
        dateTime : '21/5/2019 04:18:00',
        num_of_people: '1',
        description: 'Elderly man in 60s',
        n_lat: 1.346091,
        n_long: 103.750479,
        loc_details: 'N/A',
        attended: false
    }
]

  constructor() { }

  ngOnInit() {
    var scope = this;
    this.sightings.forEach(function(sighting) {

      scope.layers.push(
        circle([sighting.n_lat, sighting.n_long], { radius: 500 }).on('click', scope.onClick.bind(this)).bindTooltip(
          "From: " + sighting.name +
          "<br> Phone Number: " + sighting.phone_number +
          "<br>Number of people: " + sighting.num_of_people +
          "<br>" + sighting.loc_details,
        {
          sticky: false,
        })
      );
    })

  }

  onClick(circle) {
    console.log(circle);
  }



}
