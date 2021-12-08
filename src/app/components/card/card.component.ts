import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
items:any =[
  {
    imageUrl :"assets/IGS-Logo.svg",
  imageAlt : "one",
  details : "Virtual Showroom Available",},
   {
     imageUrl :"assets/IGS-Logo.svg",
  imageAlt : "two",
  details : "Created By IGS BIM Solutions",
},
   {
    imageUrl :"assets/IGS-Logo.svg",
  imageAlt : "three",
  details : "Bulk Download Options",
},

]
  constructor() { }

  ngOnInit(): void {
  }

}
