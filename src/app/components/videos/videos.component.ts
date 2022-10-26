import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  cards = 0;
  slides = 0;
  constructor(private domSanitizer: DomSanitizer) {
   this.cards =Math.floor( window.innerWidth / 360);
    this.slides  =Math.ceil( this.videos.length / this.cards);
    console.log(this.cards,this.slides)
  }
   videos=[{src:"https://www.youtube.com/embed/J2KwjxIpM2k"},
   {src:"https://www.youtube.com/embed/FUtd2gxOrSY"},
   {src:"https://www.youtube.com/embed/yOL7bM8_hnI"},
   {src:"https://www.youtube.com/embed/zp55h3AxCzs"},{src:"https://www.youtube.com/embed/UEJiKJDp3bs"},{src:"https://www.youtube.com/embed/EWi-9nxxqJM"}
   ,{src:"https://www.youtube.com/embed/0MdiIcRULpc"},
   {src:"https://www.youtube.com/embed/FUtd2gxOrSY"},
   {src:"https://www.youtube.com/embed/_SoRp9XXvWU"},
  
  ]
  ngOnInit(): void {
  }
  

}
