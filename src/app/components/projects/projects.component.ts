import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  readonly ROOT_URL = "http://127.0.0.1:8000/api/projects.json/";
  projects: any;

  constructor(private http: HttpClient) {
    this.projects = this.http.get(this.ROOT_URL);
  }

  getImage (imageName) {
    return 'http://127.0.0.1:8000/images/projects/' + imageName;
  }

}
