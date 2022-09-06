import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit,AfterViewInit {
  @ViewChildren('imagess') imgs! :QueryList<any>;
  selectedIndex = 0;
  length = 0;
  
  images = [
    "../../../assets/aven.jpg",
    "../../../assets/aven2.jpg",
    "../../../assets/fall.jpg",
    "../../../assets/cover.jpg"
  ]
  constructor() { 
    document.body.style.setProperty('--navbar-scroll', "#000");
    this.length=this. images.length;
  }
  ngAfterViewInit(): void {
    var array =this.imgs.toArray();
  //  setInterval(() => {
  //   this.selectedIndex = (this.selectedIndex+1)%this.images.length;
    
  //   if(this.selectedIndex!=-1)
  //   {
  //     // array[this.selectedIndex].nativeElement.style.display='initial';
  //     // array[this.selectedIndex].nativeElement.style.float='left';
  //     // setTimeout(() => {
  //     //   array[this.selectedIndex].nativeElement.style.display='none';
        

  //     // }, 4000);
      
  //   }
    
  //   // console.log()
    
  //  }, 2800);
   
    // this.imgs.toArray()[0].nativeElement.classList.remove('active');
  }

  ngOnInit(): void {
  }

  changeSelection(i:number)
  {
    this.selectedIndex = i;
  }
}
