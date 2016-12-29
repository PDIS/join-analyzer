import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  @Input() barChartLabels: string[];
  @Input() barChartData: any[];

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }
}
