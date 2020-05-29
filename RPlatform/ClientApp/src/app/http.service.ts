import { HttpParams, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from './app.component';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

private REST_API_SERVER = 'https://jsonplaceholder.typicode.com/posts/';

constructor(private http: HttpClient) { }

public getPosts(): Observable<Array<Post>> {
 return this.http.get<Array<Post>>(this.REST_API_SERVER);

}



// /** Pobieramy wszystkie posty */
// getPosts(): Observable<Array<Post>>
// {
//   return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
// }

/** pobieramy jeden post podajac id */
public getPost(id: number): Observable<Post>
{
 return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1');
}

public getPostByUser(userId: number)
{
  const param = new HttpParams().set('userId', userId + '');
  return this.http.get('https://jsonplaceholder.typicode.com/posts/1', {params: param});
}

public sendGetRequest(){
  return this.http.get(this.REST_API_SERVER);
}

public addPost(post: Post): Observable<Post>
{
  return this.http.post(this.REST_API_SERVER, post);
}

public updatePost(post: Post): Observable<Post>
{
  return this.http.put(this.REST_API_SERVER + post.id, post);
}

deletePost(id: number)
{
  return this.http.delete<Post>(this.REST_API_SERVER + id);
}

changePost(post: Post)
{
  return this.http.patch(this.REST_API_SERVER + post.id, post);
}

}
