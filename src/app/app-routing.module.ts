import { CommentAnalysisComponent } from './comment-analysis/comment-analysis.component';
import { EndorseStatisticComponent } from './endorse-statistic/endorse-statistic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'endorses', pathMatch:'full'},
  {path: 'endorses', component: EndorseStatisticComponent},
  {path: 'comment', component: CommentAnalysisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
