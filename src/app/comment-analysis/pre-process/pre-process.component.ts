import { PreProcessService } from './pre-process.service';
import { Comment } from '../comment';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

declare function escape(s:string): string;

@Component({
  selector: 'app-pre-process',
  templateUrl: './pre-process.component.html',
  styleUrls: ['./pre-process.component.scss']
})
export class PreProcessComponent implements OnInit, OnChanges {

  @Input() rawFile: String;

  rawFileContent: Array<String> = [];
  parsedFileContent: Array<Comment> = [];
  hasCommentFileContent: Array<Comment> = [];

  timelineLabel: Array<String> = [];
  timelineData: Array<any> = [];

  commentLengthLabel: Array<any> = [];
  commentLengthData: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

    if (this.rawFile === undefined) {
      return;
    }

    this.rawFileContent = this.rawFile.split("\r\n").slice(1);

    for (var i = 0; i < this.rawFileContent.length - 1; i++) {
      var comment = new Comment();
      comment.seqNum = this.rawFileContent[i].split(",")[0];
      comment.datetime = new Date(this.rawFileContent[i].split(",")[1]);
      comment.city1 = this.rawFileContent[i].split(",")[2];
      comment.city2 = this.rawFileContent[i].split(",")[3];
      comment.username = this.rawFileContent[i].split(",")[4];
      comment.comment = this.rawFileContent[i].split(",")[5];
      comment.comment = (comment.comment===undefined) ? "" : comment.comment.replace('"','').replace('\n','');
      this.parsedFileContent.push(comment as Comment);
    }

    this.hasCommentFileContent = this.parsedFileContent.filter((comment)=>comment.comment!=="");

    this.timelineLabel = PreProcessService.toTimelineLabel(this.parsedFileContent);

    this.timelineData.push({
      data:PreProcessService.toTimelineData(this.parsedFileContent,this.timelineLabel),
      label:"附議數"
    })

    this.commentLengthLabel = PreProcessService.toCommentLengthLabel(this.parsedFileContent);
    this.commentLengthData.push({
      data:PreProcessService.toCommentLengthData(this.parsedFileContent,this.commentLengthLabel),
      label:"附議數"
    })

    this.commentLengthLabel = this.commentLengthLabel.map((value)=>{
      if(value === 1) 
        return "1-25";
      else 
        return value + "-" + (value+25);
    })

  }

  downloadJSON() {
     window.open("data:text/json;charset=utf-8," + escape(JSON.stringify(this.parsedFileContent))) 
  }

}
