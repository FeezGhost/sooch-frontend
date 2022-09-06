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
   videos=[{src:"https://www.youtube.com/embed/oaj5ecsb0H0"},
   {src:"https://www.youtube.com/embed/0NFxcNheoLc"},
   {src:"https://www.youtube.com/embed/oaj5ecsb0H0"},
   {src:"https://www.youtube.com/embed/0NFxcNheoLc"},{src:"https://www.youtube.com/embed/0NFxcNheoLc"},{src:"https://www.youtube.com/embed/0NFxcNheoLc"}
   ,{src:"https://www.youtube.com/embed/0NFxcNheoLc"},
   {src:"https://www.youtube.com/embed/oaj5ecsb0H0"},
   {src:"https://www.youtube.com/embed/0NFxcNheoLc"},
   {src:"https://www.youtube.com/embed/oaj5ecsb0H0"},
  ]
  ngOnInit(): void {
  }
  

}
