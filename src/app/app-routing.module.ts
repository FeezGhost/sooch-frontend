import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MainBodyDashboardComponent } from './components/main-body-dashboard/main-body-dashboard.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

const routes: Routes = [
{path:'',redirectTo:'dashboard',pathMatch:'full'},
{path:'dashboard',component:MainBodyDashboardComponent},
{path:'b-details/:bid',component:BlogDetailsComponent},
{path:'our-team',component:OurTeamComponent},
{path:'contact',component:ContactUsComponent},
{path:'about-us',component:AboutUsComponent},
{path:'details',component:ProjectDetailsComponent},
{path:'all-projects',component:AllProjectsComponent,children:[
  {path:'',redirectTo:'portfolio',pathMatch:"full"},
  {path:'portfolio',component:PortfolioComponent},
  {path:'details/:pid',component:ProjectDetailsComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
