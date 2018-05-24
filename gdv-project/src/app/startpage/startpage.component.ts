import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit} from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  constructor() { }

  @ViewChild('chartTarget') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;

  public AfterViewInit() {
   
  }

  OnDestroy() {
    this.chart = null;
  }

  ngOnInit() {
    Highcharts.setOptions({

      colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
     
        return {
     
          radialGradient: {
     
            cx: 0.5,
     
            cy: 0.3,
     
            r: 0.7
     
          },
     
          stops: [
     
            [0, color],
     
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
     
          ]
     
        };
     
      })
     
     });// Build the chart
     
     Highcharts.chart('container', {
     
      chart: {
     
        plotBackgroundColor: null,
     
        plotBorderWidth: null,
     
        plotShadow: false,
     
        type: 'pie'
     
      },
     
      title: {
     
        text: 'Browser market shares in January, 2018'
     
      },
     
      tooltip: {
     
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     
      },
     
      plotOptions: {
     
        pie: {
     
          allowPointSelect: true,
     
          cursor: 'pointer',
     
          dataLabels: {
     
            enabled: true,
     
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
     
            style: {
     
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
     
            },
     
            connectorColor: 'silver'
     
          }
     
        }
     
      },
     
      series: [{
     
        name: 'Share',
     
        data: [
     
          { name: 'Davinci', y: 61.41 },
     
          { name: 'Gustaff', y: 11.84 },
     
          { name: 'Ferdinand', y: 10.85 },
     
          { name: 'Okan', y: 4.67 },
     
          { name: 'Selim', y: 4.18 },
     
          { name: 'Hamza', y: 7.05 }
     
        ]
     
      }]
     
     })}};