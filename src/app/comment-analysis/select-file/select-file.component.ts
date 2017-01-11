import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { AppConfig } from './../../app.config';
import { Http } from '@angular/http';
import { EventEmitter } from '@angular/core/src/facade/async';
import { Component, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-select-file',
  templateUrl: './select-file.component.html',
  styleUrls: ['./select-file.component.scss']
})
export class SelectFileComponent implements OnInit {

  @Output() getFileContent = new EventEmitter();
  @Output() getEndorseTitle = new EventEmitter();

  private completedEndorses: Array<Object> = [];
  private endorsingEndorses: Array<Object> = [];
  private preview: Array<String>;

  constructor(private http: Http) { }

  onChange(endorse,type) {

    this.getEndorseTitle.emit(endorse.options[endorse.selectedIndex].innerText);
    
    this.http.get(AppConfig.suggestionCSV + type + '/' + endorse.value + ".csv")
      .map((data)=>{
        data = data['_body'];
        return data.toString();
      })
      .subscribe((data) => {
        this.preview = data.split("\n").slice(0,10);
        this.getFileContent.emit(data);
      });
  }

  ngOnInit() {
    this.http.get(AppConfig.CompletedEndorsesJSON)
      .map((data) => {
        var endorses = data.json();
        endorses.sort(function (a, b) {
          return b.secondSignedTime - a.secondSignedTime
        })
        return endorses;
      })
      .subscribe((endorses) => {
        this.completedEndorses = endorses;
      })

    this.http.get(AppConfig.EndorsingJSON)
      .map((data) => {
        var endorses = data.json();
        endorses.sort(function(a,b){
          return b.endorseCount - a.endorseCount
        })
        return endorses;
      })
      .subscribe((endorses) => {
        this.endorsingEndorses = endorses;
      })
  }

}
