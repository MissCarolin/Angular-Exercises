import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
