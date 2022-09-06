import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-popular-blogs',
  templateUrl: './popular-blogs.component.html',
  styleUrls: ['./popular-blogs.component.scss']
})
export class PopularBlogsComponent implements OnInit {

  constructor(private dataSvc: DataService,private router:Router) { }
  data:any=[];
  ngOnInit(): void {
    this.getData();
  }

  getData()
  {
    this.dataSvc.getBlogs().subscribe(res=>{
      this.data = res;
      console.log(this.data);
    })
  }

  clicked(id:string) {
    this.router.navigate(['b-details',id])
  }
}
