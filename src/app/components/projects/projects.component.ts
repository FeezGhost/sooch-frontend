import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @ViewChild('modalOpen') modalOpen!:ElementRef<HTMLAnchorElement>;
  selected!:any;
  projects:any[]=
  [
    {id:'1',title:'Lorem ipsum dolor sit amet consectetur',subTitle:"Lorem ipsum dolor sit amet consectetur",description:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus quisquam impedit maiores atque veritatis incidunt dolore asperiores natus facere, aperiam velit exercitationem nam quasi. Suscipit ratione nihil maxime animi!",
    cover_photo:"./../../../assets/aa.jpg"},
    {id:'2',title:'Lorem ipsum dolor sit amet consectetur',subTitle:"Lorem ipsum dolor sit amet consectetur",description:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus quisquam impedit maiores atque veritatis incidunt dolore asperiores natus facere, aperiam velit exercitationem nam quasi. Suscipit ratione nihil maxime animi!",
    cover_photo:"./../../../assets/cover.jpg"}
  ]
  constructor(private dataSvc:DataService) { }

  ngOnInit(): void {
    this.dataSvc.getFavProjects().subscribe(Res=>{
      this.projects = Res;
    })
  }

  open(project:any)
  {
    this.selected = project;
    setTimeout(() => {
      this.modalOpen.nativeElement.click();
    }, 0);
    
  }

  
}
