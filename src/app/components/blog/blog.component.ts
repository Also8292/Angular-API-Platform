import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  readonly ROOT_URL = "http://127.0.0.1:8000/api/articles.json/";
  articles: any;

  constructor(private http: HttpClient) {
    this.articles = this.http.get(this.ROOT_URL);
  }

  getImage (imageName) {
    return 'http://127.0.0.1:8000/images/projects/' + imageName;
  }

}
