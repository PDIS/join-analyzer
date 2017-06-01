import { Http } from '@angular/http';
import { AppConfig } from './../../app.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endorsing',
  templateUrl: './endorsing.component.html',
  styleUrls: ['./endorsing.component.scss']
})
export class EndorsingComponent implements OnInit {

  private endorses:Array<Object> = [];
  private orgQuery = "";
  private now = new Date();

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(AppConfig.EndorsingJSON)
    .map((data)=>{
      var endorses = data.json().filter(a=>a.endorseCount<5000);

      endorses.sort(function(a,b){
        return b.endorseCount - a.endorseCount
      })
      return endorses;
    })
    .subscribe((endorses)=>{
      this.endorses = endorses;
    })
  }

}
