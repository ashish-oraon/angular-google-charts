import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540],
    ]);
    this.gChart.draw(data, this.options);
  }
  @ViewChild('gChart') gChart: any;
  title = 'Browser market shares at a specific website, 2014';
  type = ChartType.PieChart;
  data: (string | number)[][] = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7],
  ];
  options = {
    vAxis: { title: 'Cups' },
    hAxis: { title: 'Month' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } },
    animation: {
      duration: 1000,
      easing: 'out',
    },
  };
  columnNames = ['Browser', 'Percentage'];
  width = 550;
  height = 400;

  chartColumns = ['City', 'Inhabitants'];

  clickHandler(ev: any) {
    console.log('adsd');
    console.log(ev);
  }

  selectHandler(pay: any) {
    console.log('selectHandler');
    console.log(pay);
    this.data[0] = [this.data[0][0], (this.data[0][1] as number) - 1];
    console.log(this.data);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
