import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit  {
    constructor(private http: HttpClient){

    }

    list = [];
    ngOnInit() {
        console.log('[ window ] >', window)
        if(!window) {
            this.list = Array.from({ length: 100000 }, (_, i) => i) as [];
        } else {
            this.http.get('http://localhost:3000/api/list').subscribe((data: any) => {
              this.list = data.data; // JSON data from the server
            });
        }
      }
  title = 'ssrdemo';
}
