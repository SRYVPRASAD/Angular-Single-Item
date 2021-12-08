import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brand-box',
  templateUrl: './brand-box.component.html',
  styleUrls: ['./brand-box.component.css']
})
export class BrandBoxComponent implements OnInit {
items:any =[
  "CONTACT SUPPLIER ",
  "RESEARCH PRODUCT",
  "BULK DOWNLOAD",
  "DOWNLOAD SHOROOM",
 ];

   brand: any = {
      imageUrl :"assets/IGS-Logo.svg",
      imageAlt : "Brand Name",
      title: "Connect with the Manuacturer",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
