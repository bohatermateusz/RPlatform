import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    apiValues: string[] = [];
  title = 'ClientApp';
  ngOnInit() {

    }

    getPosts()
    {
    }

  }



export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;

}
