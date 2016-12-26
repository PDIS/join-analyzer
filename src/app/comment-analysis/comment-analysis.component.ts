import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-analysis',
  templateUrl: './comment-analysis.component.html',
  styleUrls: ['./comment-analysis.component.scss']
})
export class CommentAnalysisComponent implements OnInit {

  private rawFileContent: String;

  constructor() { }

  ngOnInit() {
  }

  getRawFileContent(file) {
    this.rawFileContent = file;
  }

}
