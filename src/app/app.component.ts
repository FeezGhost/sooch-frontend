import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, ResolveEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent  {
  title = 'project';
  show = true;
  constructor(public router:Router)
  {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    ).subscribe((e:NavigationEnd)=>{
      console.log(this.router.url,  window.innerWidth>600,this.router.url == '/all-projects/portfolio')
     if(this.router.url == '/all-projects/portfolio' && window.innerWidth>600)
     {
      this.show = false;
     }
     else
     {
      this.show = true;
     }
    });

  }

 
 
  
}
