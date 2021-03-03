import { JsonPlaceholderService } from './services/json-placeholder.service';
import { Post } from './interfaces/post.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http-service';
  posts:Post [] = [
    { userId: 1, id: 1, title: 'title1', body: 'body1' },
    { userId: 2, id: 2, title: 'title2', body: 'body2' },
    { userId: 3, id: 3, title: 'title3', body: 'body3' }
    ];

    displayComponent = true;
    displayComponent2 = true;
    displayComponent3 = true;

    constructor(private jsonPlaceholderService: JsonPlaceholderService){}

    ngOnInit(): void {
      const observable = this.jsonPlaceholderService.getPosts();
      observable.subscribe((posts) => {
        this.posts = posts;
      });
    }
}
