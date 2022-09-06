import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, Subject } from 'rxjs';
import { CommonSvcService } from 'src/app/services/common-svc.service';

@Component({
  selector: 'app-main-body-dashboard',
  templateUrl: './main-body-dashboard.component.html',
  styleUrls: ['./main-body-dashboard.component.scss']
})
export class MainBodyDashboardComponent implements OnInit,AfterViewInit {
length;
  @ViewChildren('images') imgs! :QueryList<any>;
  // private rolesSubject = new BehaviorSubject<any>([]);
  // @ViewChildren('images') imgs   = this.rolesSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private router:Router,public common:CommonSvcService) {

    if(localStorage.getItem('first')==undefined)
    {
      //show here
      this.common.showOverlay = true;
      document.body.style.setProperty('--overFlow-body', "hidden");
      localStorage.setItem('first','done');
    }


    window.addEventListener('scroll', this.scroll, true);
   this.length=this. images.length
   }
   selectedIndex=-1;
  ngAfterViewInit(): void {
    var array =this.imgs.toArray();
   setInterval(() => {
    this.selectedIndex = (this.selectedIndex+1)%this.images.length;
    
    if(this.selectedIndex!=-1)
    {
      // array[this.selectedIndex].nativeElement.style.display='initial';
      // array[this.selectedIndex].nativeElement.style.float='left';
      // setTimeout(() => {
      //   array[this.selectedIndex].nativeElement.style.display='none';
        

      // }, 4000);
      
    }
    
    // console.log()
    
   }, 2800);
   
    // this.imgs.toArray()[0].nativeElement.classList.remove('active');
  }

  clicked()
  {
    this.common.showOverlay= false;
    document.body.style.setProperty('--overFlow-body', "auto");
  }

  ngOnInit(): void {
    
  }

  images = [
    "../../../assets/aa.jpg",
    "../../../assets/bb.jpg",
    "../../../assets/cc.jpg",
    "../../../assets/cover.jpg"
  ]
  scroll = (): void => {

    let scrollHeigth;
 
    if(window.innerWidth < 350){
     scrollHeigth = 150;
    }else if(window.innerWidth < 500 && window.innerWidth > 350){
     scrollHeigth = 250;
    }else if(window.innerWidth < 700 && window.innerWidth > 500){
     scrollHeigth = 350;
    }else if(window.innerWidth < 1000 && window.innerWidth > 700){
     scrollHeigth = 500;
    }else{
      scrollHeigth = 300;
    }
 
     if(window.scrollY >= scrollHeigth && this.router.isActive('dashboard',false)){
    
       document.body.style.setProperty('--navbar-scroll', "#000");
       document.body.style.setProperty('--navbar-scroll-text', "black");
       document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
     }else if(window.scrollY < scrollHeigth && this.router.isActive('dashboard',false)){
       document.body.style.setProperty('--navbar-scroll', "transparent");
      //  document.body.style.setProperty('--navbar-scroll-text', "white");
      //  document.body.style.setProperty('--navbar-scroll-shadow', "none");
     }
   }
 

}
