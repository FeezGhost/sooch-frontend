import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blogId:string='';
  data!:any;
  constructor(private route:ActivatedRoute,private dataSvc:DataService) {
    document.body.style.setProperty('--navbar-scroll', "#000");
    this.route.params.subscribe(r=>{
      this.blogId = r['bid'];
      this.dataSvc.getBlogById(this.blogId).subscribe(res=>{
        this.data = res;
        console.log(this.data,'byid');
      })

    })
  }

  ngOnInit(): void {
  }

}
