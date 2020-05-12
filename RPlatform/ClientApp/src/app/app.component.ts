import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: Http) { }
  accessPointUrl: string = 'https://localhost:44324/api/values';
  apiValues: string[] = [];
  title = 'ClientApp';
  ngOnInit() {
    this._httpService.get(this.accessPointUrl).subscribe(values => {
      this.apiValues = values.json() as string[];
    })
  }
}
