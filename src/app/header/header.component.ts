import { AppConfig } from './../app.config';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private timestamp = "";

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(AppConfig.updateTimestamp)
      .map((data) => {
        data = data['_body'];
        return data.toString();
      })
      .subscribe((timestamp) => {
        this.timestamp = timestamp;
      })
  }

}
