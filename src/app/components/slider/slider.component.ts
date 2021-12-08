import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


  ngOnInit(): void {
  }
imageObject: Array<object> = [{

        image: 'assets/IGS-Logo.svg',
        thumbImage: 'assets/IGS-Logo.svg',
        alt: 'alt of image',
        title: 'title of image'
    }, {
        image: 'assets/IGS-Logo.svg', // Support base64 image
        thumbImage: 'assets/IGS-Logo.svg', // Support base64 image
        title: 'Image title', //Optional: You can use this key if want to show image with title
        alt: 'Image alt', //Optional: You can use this key if want to show image with alt
        order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },{
        image: 'assets/IGS-Logo.svg',
        thumbImage: 'assets/IGS-Logo.svg',
        alt: 'alt of image',
        title: 'title of image'
    },{
        image: 'assets/IGS-Logo.svg',
        thumbImage: 'assets/IGS-Logo.svg',
        alt: 'alt of image',
        title: 'title of image'
    },
    

];

}
