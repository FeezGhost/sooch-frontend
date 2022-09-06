import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private dataSvc:DataService) {
    document.body.style.setProperty('--navbar-scroll', "#000");
    this.length=this. images.length;

   }
  @ViewChildren('imagess') imgs! :QueryList<any>;
  selectedIndex = 0;
  length = 0;selected:any;
  @ViewChild('modalOpen') modalOpen!:ElementRef<HTMLAnchorElement>;
  
  images = [
    "../../../assets/aven.jpg",
    "../../../assets/aven2.jpg",
    "../../../assets/fall.jpg",
    "../../../assets/cover.jpg"
  ]
  items:any[]=[{src:"../../../assets/aa.jpg",title:"Lorem ipsum dolor sit amet consectetur.",subTitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora cupiditate"}
,{src:"../../../assets/aa.jpg",title:"Lorem ipsum dolor sit amet consectetur.",subTitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora cupiditate"},{src:"../../../assets/aa.jpg",title:"Lorem ipsum dolor sit amet consectetur.",subTitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora cupiditate"},{src:"../../../assets/aa.jpg",title:"Lorem ipsum dolor sit amet consectetur.",subTitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora cupiditate"},{src:"../../../assets/aa.jpg",title:"Lorem ipsum dolor sit amet consectetur.",subTitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora cupiditate"},{src:"../../../assets/aa.jpg",title:"Lorem ipsum dolor sit amet consectetur.",subTitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora cupiditate"},{src:"../../../assets/aa.jpg",title:"Lorem ipsum dolor sit amet consectetur.",subTitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora cupiditate"}]
  ngOnInit(): void {
    this.dataSvc.getProjects().subscribe(res=>{
      console.log(res,'project')
      this.items = res;
    });
    this.dataSvc.getFavProjects().subscribe(res=>{
      this.images = res.map(r=> {
        return r.cover_photo
      })
      console.log(this.images)
    });

  }

  changeSelection(i:number)
  {
    this.selectedIndex = i;
  }
  open(id:string)
  {
    this.selected = this.items.find(x=> x.id == id);
    setTimeout(() => {
      this.modalOpen.nativeElement.click();
    }, 0);
    
  }
  
}
