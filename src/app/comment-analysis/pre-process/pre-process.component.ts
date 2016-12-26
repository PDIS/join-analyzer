import { Comment } from '../comment';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

declare function escape(s:string): string;

@Component({
  selector: 'app-pre-process',
  templateUrl: './pre-process.component.html',
  styleUrls: ['./pre-process.component.scss']
})
export class PreProcessComponent implements OnInit, OnChanges {

  @Input() rawFileContent: String;

  rawLineCount: number = 0;
  cleanLineCount: number = 0;

  parsedFileContent: Array<Comment> = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

    if (this.rawFileContent === undefined) {
      return;
    }

    var lines = this.rawFileContent.split("\n").slice(1,10);
    this.rawLineCount = lines.length;

    for (var i = 0; i < lines.length - 1; i++) {
      var comment = new Comment();
      comment.seqNum = lines[i].split(",")[0];
      comment.datetime = new Date(lines[i].split(",")[1]);
      comment.city1 = lines[i].split(",")[2];
      comment.city2 = lines[i].split(",")[3];
      comment.username = lines[i].split(",")[4];
      comment.comment = lines[i].split(",")[5];

      if (comment.comment.startsWith("\"") && !(lines[i + 1].startsWith("No."))) {
        do {
          i += 1;
          comment.comment = comment.comment + ";" + lines[i];
        } while (!(lines[i + 1].startsWith("No.")))
      }
      this.parsedFileContent.push(comment as Comment);
      // console.log(comment.seqNum + " " + this.parsedFileContent.length)
      this.cleanLineCount = this.parsedFileContent.length;
    }

  }

  downloadJSON() {
     window.open("data:text/json;charset=utf-8," + escape(JSON.stringify(this.parsedFileContent))) 
  }

}
