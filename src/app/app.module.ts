import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PreProcessComponent } from './comment-analysis/pre-process/pre-process.component';
import { WordSegmentComponent } from './comment-analysis/word-segment/word-segment.component';
import { WordCloudComponent } from './comment-analysis/word-cloud/word-cloud.component';
import { CommentAnalysisComponent } from './comment-analysis/comment-analysis.component';
import { SelectFileComponent } from './comment-analysis/select-file/select-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreProcessComponent,
    WordSegmentComponent,
    WordCloudComponent,
    CommentAnalysisComponent,
    SelectFileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
