import {PipeTransform} from '@angular/core/src/change_detection/pipe_transform';
import {Pipe} from '@angular/core/src/metadata/directives';
import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from '../../app.config'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-gov-response',
  templateUrl: './gov-response.component.html',
  styleUrls: ['./gov-response.component.scss']
})
export class GovResponseComponent implements OnInit {

  private endorses:Array<Object> = [];
  private orgQuery = "";

  constructor(private http: Http) { }
  
  ngOnInit() {
    this.http.get(AppConfig.endorsesJSON)
    .map((data)=>{
      var endorses = data.json();
      endorses.sort(function(a,b){
        return b.secondSignedTime - a.secondSignedTime
      })
      return endorses;
    })
    .subscribe((endorses)=>{
      this.endorses = endorses;
    })
  }

}


