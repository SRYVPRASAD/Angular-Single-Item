import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
items:any =[
  "CONTACT SUPPLIER ",
  "RESEARCH PRODUCT",
  "BULK DOWNLOAD",
  "DOWNLOAD SHOROOM",
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
