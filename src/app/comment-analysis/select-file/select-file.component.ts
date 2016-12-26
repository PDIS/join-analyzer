import {EventEmitter} from '@angular/core/src/facade/async';
import { Component, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-select-file',
  templateUrl: './select-file.component.html',
  styleUrls: ['./select-file.component.scss']
})
export class SelectFileComponent implements OnInit {

  @Output() getFileContent = new EventEmitter();

  private preview : Array<String>;

  constructor() { }

  onChange(event) {
    var self = this;
    var files = event.srcElement.files;
    var file = files[0];
    var fileContent = ""
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (e) {
        self.preview = this.result.split("\n").slice(0,6);
        self.getFileContent.emit(this.result);
      }
    }
  }

  ngOnInit() {
  }

}
