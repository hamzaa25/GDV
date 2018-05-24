import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {

  constructor() { }
  test() {
    var data = [
      [Date.UTC(1970, 9, 21), 0],
      [Date.UTC(1970, 10, 4), 0.28],
      [Date.UTC(1970, 10, 9), 0.25],
      [Date.UTC(1970, 10, 27), 0.2],
      [Date.UTC(1970, 11, 2), 0.28],
      [Date.UTC(1970, 11, 26), 0.28],
      [Date.UTC(1970, 11, 29), 0.47],
      [Date.UTC(1971, 0, 11), 0.79],
      [Date.UTC(1971, 0, 26), 0.72],
      [Date.UTC(1971, 1, 3), 1.02],
      [Date.UTC(1971, 1, 11), 1.12],
      [Date.UTC(1971, 1, 25), 1.2],
      [Date.UTC(1971, 2, 11), 1.18],
      [Date.UTC(1971, 3, 11), 1.19],
      [Date.UTC(1971, 4, 1), 1.85],
      [Date.UTC(1971, 4, 5), 2.22],
      [Date.UTC(1971, 4, 19), 1.15],
      [Date.UTC(1971, 5, 3), 0]
    ];
    return data;
  }
  ngOnInit() {

    Highcharts.chart('container', {
      chart: {
        zoomType: 'x',
      },
      title: {
        text: 'Used Mediums in sense of Time'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime',

        dateTimeLabelFormats: { // don't display the dummy year

          month: '%Y. %a. %b',

          year: '%Y.'
        }
      },
      yAxis: {
        title: {
          text: 'Exchange rate'
        }
      },
      legend: {
        enabled: true,
      },
      plotOptions: {
        area: {
          marker: {
            enabled: false
        }
        },
        series: {
          stacking: 'normal',

        }
      },

      series: [
        {
          name: 'Barock',
          
          type: 'area',
          // Define the data points. All series have a dummy year
          // of 1970/71 in order to be compared on the same x axis. Note
          // that in JavaScript, months start at 0 for January, 1 for February etc.
          data:
            [
              [Date.UTC(1970, 9, 21), 5],
              [Date.UTC(1990, 9, 21), 5]
            ]
        },
        {
        name: 'Royal',
          type: 'area',
          // Define the data points. All series have a dummy year
          // of 1970/71 in order to be compared on the same x axis. Note
          // that in JavaScript, months start at 0 for January, 1 for February etc.
          data:
            [
              [Date.UTC(1990, 9, 21), 5],
              [Date.UTC(2005, 9, 21), 5]
            ]
        },
        {
          name: 'Hammer',

          type: 'line',
          // Define the data points. All series have a dummy year
          // of 1970/71 in order to be compared on the same x axis. Note
          // that in JavaScript, months start at 0 for January, 1 for February etc.
          data:
            [
              [Date.UTC(1970, 9, 21), 50],
              [Date.UTC(1971, 0, 11), 30],
              [Date.UTC(1976, 4, 19), 20],
              [Date.UTC(1975, 5, 3), 0]
            ]
        }, {
          name: 'Meisel',

          type: 'line',
          data: [
            [Date.UTC(1970, 9, 21), 50],
            [Date.UTC(1971, 0, 11), 30],
            [Date.UTC(1976, 4, 19), 20],
            [Date.UTC(1975, 5, 3), 0]
          ]
        }, {
          name: 'Stift',

          type: 'line',
          data: [
            [Date.UTC(2000, 9, 21), 50],
            [Date.UTC(2005, 0, 11), 100],
            [Date.UTC(1995, 4, 19), 20],
            [Date.UTC(1990, 5, 3), 0]
          ]
        },
        {
          name: 'Papier',

          type: 'line',
          data: [
            [Date.UTC(1970, 9, 21), 50],
            [Date.UTC(1971, 0, 11), 30],
            [Date.UTC(1976, 4, 19), 20],
            [Date.UTC(1975, 5, 3), 0]
          ]
        }, {
          name: 'Stift',

          type: 'line',
          data: [
            [Date.UTC(1970, 9, 21), 50],
            [Date.UTC(1971, 0, 11), 30],
            [Date.UTC(1976, 4, 19), 20],
            [Date.UTC(1975, 5, 3), 0]
          ]
        }]

    });
  }
};