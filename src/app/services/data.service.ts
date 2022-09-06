import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { environment } from 'projects/loader/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getBlogs()
  {
    return this.http.get(environment.apiUrl+'blogs/');
  }

  getBlogById(id:string)
  {
    return this.http.get(environment.apiUrl+'blogs/'+id);
  }

  getProjects()
  {
    return this.http.get<any[]>(environment.apiUrl+'projects/');
  }

  getFavProjects()
  {
    return this.http.get<any[]>(environment.apiUrl+'projects/?isFav=true');
  }

  getProjectById(id:string)
  {
    return this.http.get<any[]>(environment.apiUrl+'projects/'+id);

  }

  getProjectSpecificationsById(id:string)
  {
    return this.http.get<any[]>(environment.apiUrl+'project-specifications/?project='+id);
  }
}
