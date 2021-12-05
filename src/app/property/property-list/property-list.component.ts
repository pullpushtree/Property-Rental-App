import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
  {
    "Id": 1,
    "Name":"Rich Man",
    "Type":"House",
    "Price":18000,
    "Image":"assets/images/house.png"
  },
  {
    "Id": 2,
    "Name":"Jan Man",
    "Type":18,
    "Price":10000,
    "Image":"assets/images/house.png"
  },
  {
    "Id": 3,
    "Name":"Yan Man",
    "Type":"House",
    "Price":2000,
    "Image":"assets/images/house.png"
  },
  {
    "Id": 4,
    "Name":"Fan Man",
    "Type":"House",
    "Price":6000,
    "Image":"assets/images/house.png"
  },
  {
    "Id": 5,
    "Name":"Brenn Man",
    "Type":"House",
    "Price":8000,
    "Image":"assets/images/house.png"
  },
  {
    "Id": 6,
    "Name":"Stan Man",
    "Type":"House",
    "Price":42000,
    "Image":"assets/images/house.png"
  },
  {
    "Id": 7,
    "Name":"Glen Man",
    "Type":"House",
    "Price":20000,
    "Image":"assets/images/house.png"
  },
  {
    "Id": 8,
    "Name":"Stef Man",
    "Type":"House",
    "Price":8500,
    "Image":"assets/images/house.png"
  },
  {
    "Id": 9,
    "Name":"Jeff Man",
    "Type":"House",
    "Price":67000,
    "Image":"assets/images/house.png"
  },{
    "Id": 10,
    "Name":"Kat Man",
    "Type":"House",
    "Price":54200,
    "Image":"assets/images/house.png"
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
