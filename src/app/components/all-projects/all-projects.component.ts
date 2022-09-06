import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {

  constructor() { document.body.style.setProperty('--navbar-scroll', "#000");}

  ngOnInit(): void {
    document.body.style.setProperty('--navbar-scroll', "#000");
  }

}
