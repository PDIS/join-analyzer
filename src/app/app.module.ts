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
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { EndorseStatisticComponent } from './endorse-statistic/endorse-statistic.component';
import { GovResponseComponent } from './endorse-statistic/gov-response/gov-response.component';
import { OrgSearchPipe } from './endorse-statistic/gov-response/org-search.pipe';
import { EndorsingComponent } from './endorse-statistic/endorsing/endorsing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreProcessComponent,
    WordSegmentComponent,
    WordCloudComponent,
    CommentAnalysisComponent,
    SelectFileComponent,
    BarChartComponent,
    EndorseStatisticComponent,
    GovResponseComponent,
    OrgSearchPipe,
    EndorsingComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
