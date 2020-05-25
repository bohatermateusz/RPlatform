import { HttpParams, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from './app.component';

@Injectable()
export class HttpService {

/**
 *
 */
constructor(private http: HttpClient) { }

/** Pobieramy wszystkie posty */
getPosts()
{
  this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
}

/** pobieramy jeden post podajac id */
getPost(id: number)
{

}



}
