import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly ROOT_URL = "http://127.0.0.1:8000/api/articles.json/";
  posts: any;


  constructor(private http: HttpClient) {
    this.posts = this.http.get(this.ROOT_URL);
  }

  // getPosts() {
  //   this.posts = this.http.get(this.ROOT_URL);
  // }
}
