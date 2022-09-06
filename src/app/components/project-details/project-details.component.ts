import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  data!:any;
  constructor(private DataSvc:DataService, private route: ActivatedRoute) { document.body.style.setProperty('--navbar-scroll', "#000");
  
  this.route.params.subscribe(p=>{
    this.DataSvc.getProjectSpecificationsById(p['pid']).subscribe(res=>{
      this.data = res;
    })
  })
}

  ngOnInit(): void {
    document.body.style.setProperty('--navbar-scroll', "#000");
  }

}
