import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainBodyDashboardComponent } from './components/main-body-dashboard/main-body-dashboard.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { DomchangeDirective } from './directives/domchange.directive';
import { VideosComponent } from './components/videos/videos.component';
import { TrustPipe } from './pipes/trust.pipe';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { PopularBlogsComponent } from './components/popular-blogs/popular-blogs.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormComponent } from './components/contact-us/form/form.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainBodyDashboardComponent,
    LoaderComponent,
    AboutUsComponent,
    ProjectsComponent,
    AllProjectsComponent,
    FooterComponent,
    ProjectDetailsComponent,
    PortfolioComponent,
    DomchangeDirective,
    VideosComponent,
    TrustPipe,
    OurTeamComponent,
    PopularBlogsComponent,
    CompanyProfileComponent,
    ContactUsComponent,
    FormComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
