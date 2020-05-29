import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    apiValues: string[] = [];
    title = 'ClientApp';

  constructor(private httpService: HttpService) { }

  ngOnInit() {

    this.httpService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.apiValues = data;
    });

   }

   getPostByUser() {
      this.httpService.getPostByUser(1).subscribe(posts => console.log(posts));
   }


   getPosts()
   {
     this.httpService.getPosts().subscribe(posts => console.log(posts));
   }

   getPost()
   {
     this.httpService.getPost(1).subscribe(post => {
       console.log(post);
     },
      (error: HttpErrorResponse) => {console.log(error.status);
      }
    );
   }

   addPost()
   {
     const p: Post = ({
       userId: 1,
       id: 1,
       title: 'dupadupaduap',
       body: 'dupa22222'
     });

     this.httpService.addPost(p).subscribe(post => {
       console.log(post);
     });

    }

    updatePost(){
      const p: Post = ({
        userId: 1,
        id: 1,
        title: 'dupadupaduap',
        body: 'dupa22222'
      });
      this.httpService.updatePost(p).subscribe(post => {
        console.log(post);
      });
    }

    // getPosts()
    // {
    //   this.httpService.getPosts().subscribe(posts => console.log(posts));
    // }

    deletePost()
    {
      this.httpService.deletePost(1).subscribe(post => {
        console.log(post);
      });
    }

    changePost() {
      const p: Post = ({
        id: 1,
        body: 'zmieniam tylko wpis',
      });

      this.httpService.changePost(p).subscribe(posts => console.log(posts));

    }

 }



export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;

}
