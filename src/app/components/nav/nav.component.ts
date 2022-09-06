import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  show: boolean = false;
  constructor() { 
    // window.addEventListener('scroll', this.scroll, true);
    
  } 

  ngOnInit(): void {
  }
  
  // scroll = (): void => {

  //   let scrollHeigth;
 
  //   if(window.innerWidth < 350){
  //    scrollHeigth = 150;
  //   }else if(window.innerWidth < 500 && window.innerWidth > 350){
  //    scrollHeigth = 250;
  //   }else if(window.innerWidth < 700 && window.innerWidth > 500){
  //    scrollHeigth = 350;
  //   }else if(window.innerWidth < 1000 && window.innerWidth > 700){
  //    scrollHeigth = 500;
  //   }else{
  //     scrollHeigth = 300;
  //   }
 
  //    if(window.scrollY >= scrollHeigth){
    
  //      document.body.style.setProperty('--navbar-scroll', "#000");
  //      document.body.style.setProperty('--navbar-scroll-text', "black");
  //      document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
  //    }else if(window.scrollY < scrollHeigth){
  //      document.body.style.setProperty('--navbar-scroll', "transparent");
  //     //  document.body.style.setProperty('--navbar-scroll-text', "white");
  //     //  document.body.style.setProperty('--navbar-scroll-shadow', "none");
  //    }
  //  }
 

  
 }


