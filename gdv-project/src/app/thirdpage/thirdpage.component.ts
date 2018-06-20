import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import * as $ from 'jquery';
import { Button } from 'protractor';


const categoryLinks = {
  '1950': 'https://www.was-war-wann.de/1900/1950/kunst_der_50er.html',
  '1955': 'http://www.google.com/search?q=foo+bar',
  '1960': 'http://www.google.com/serach?q=foobar'
};

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.css']
})

export class ThirdpageComponent implements OnInit {


  ngOnInit() {

    a();
  
    
    function a () {
     var chart = Highcharts.chart('Materialien', {
     /* colors: ['#2ed89c', '#05386d', '#8bbc21', '#910000', '#84d5e8',
        '#959b6f', '#f28f63', '#87569e', '#c42525', '#52e22b', '#e2130f', '#c620c9', '#e2710e', '#b0c2f4'], */

      chart: {
        zoomType: 'x',
        height: '600px',
        type: 'line',
        events: {
          load: function () {
            $('.highcharts-legend-item path').attr('stroke-width', 16);
          },
          redraw:  function () {
            $('.highcharts-legend-item path').attr('stroke-width', 16);
          },
        }
      },
      title: {
        text: 'Benutzte Materialien und Werkzeuge im Verlauf der Jahre'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollen' : '..'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%Y. %a. %b',
          year: '%Y'
        },
        labels: {
          formatter: function () {
            const date = Highcharts.dateFormat('%Y', this.value);
            // return '<a href=" http://www.google.com?q=' + date + '" target="_blank">' + date + '</a>';
            return '<a href="' + categoryLinks[date] + '" target="_blank" style="text-decoration: none";>' + date + '</a>';
          },
          useHTML: true
        }
      },
      yAxis: {
        title: {
          
          text: 'Usage'
        },
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: true,
        symbolRadius: 0,
        backgroundColor: '#FFFFFF',
        shadow: true,
      },
      plotOptions: {
        area: {
          marker: {
            enabled: false
          }
        },
        series: {
          allowPointSelect: true,
          lineWidth: 2,
          marker: {
            symbol: 'circle',
            states: {
              hover: {
                radius: 5
              }
            },
            enabled: false

          }
        },
      },
      tooltip: {
        xDateFormat: '<b>%Y</b>',
        shared: true
      },

      series: [
        {
          name: 'Druck',
          color:'blue',
          legendIndex:1,
          visible:true,
          data: [
            [Date.UTC(1850, 1, 1), 41],
            [Date.UTC(1850, 1, 1), 4],
            [Date.UTC(1851, 1, 1), 53],
            [Date.UTC(1852, 1, 1), 45],
            [Date.UTC(1853, 1, 1), 10],
            [Date.UTC(1854, 1, 1), 22],
            [Date.UTC(1855, 1, 1), 44],
            [Date.UTC(1856, 1, 1), 11],
            [Date.UTC(1857, 1, 1), 17],
            [Date.UTC(1858, 1, 1), 57],
            [Date.UTC(1859, 1, 1), 112],
            [Date.UTC(1860, 1, 1), 298],
            [Date.UTC(1860, 1, 1), 1],
            [Date.UTC(1861, 1, 1), 264],
            [Date.UTC(1862, 1, 1), 13],
            [Date.UTC(1863, 1, 1), 22],
            [Date.UTC(1864, 1, 1), 98],
            [Date.UTC(1865, 1, 1), 39],
            [Date.UTC(1866, 1, 1), 20],
            [Date.UTC(1867, 1, 1), 150],
            [Date.UTC(1868, 1, 1), 14],
            [Date.UTC(1869, 1, 1), 142],
            [Date.UTC(1870, 1, 1), 145],
            [Date.UTC(1871, 1, 1), 18],
            [Date.UTC(1872, 1, 1), 38],
            [Date.UTC(1873, 1, 1), 15],
            [Date.UTC(1874, 1, 1), 8],
            [Date.UTC(1875, 1, 1), 35],
            [Date.UTC(1876, 1, 1), 18],
            [Date.UTC(1877, 1, 1), 7],
            [Date.UTC(1878, 1, 1), 212],
            [Date.UTC(1879, 1, 1), 6],
            [Date.UTC(1880, 1, 1), 30],
           

          ]
        }, {
          name: 'Filztift',
          color:'black',
          visible:false,
          data: [

  

          ]
        },
        {
          name: 'Gelatinendruck',
          color:'black',
          legendIndex:26,
          visible:false,
          data: [
            //    [Date.UTC(1927, 1, 1), 3],
    

          ]
        }, {
          name: 'Graphite',
          color:'black',
          visible:false,
          data: [
            [Date.UTC(1858, 1, 1), 1],
            [Date.UTC(1875, 1, 1), 2],
            [Date.UTC(1878, 1, 1), 3],
      
          ]
        }, {
          name: 'Holz',
          color:'brown',
          data: [
    
            [Date.UTC(1857, 1, 1), 2],
            [Date.UTC(1858, 1, 1), 1],
            [Date.UTC(1859, 1, 1), 1],
            [Date.UTC(1860, 1, 1), 1],
            [Date.UTC(1865, 1, 1), 39],
            [Date.UTC(1867, 1, 1), 1],
            [Date.UTC(1869, 1, 1), 1],
            [Date.UTC(1872, 1, 1), 1],
            [Date.UTC(1873, 1, 1), 1],
            [Date.UTC(1875, 1, 1), 26],
            [Date.UTC(1876, 1, 1), 2],
            [Date.UTC(1878, 1, 1), 47],
            [Date.UTC(1879, 1, 1), 38],
            [Date.UTC(1880, 1, 1), 3],
         
          ]
        }, {
          name: 'Kugelschreiber',
          color:'black',
          visible:false,
          data: [


          ]
        },
        {
          name: 'Öl',
          color:'black',
          visible:false,
          data: [
            [Date.UTC(1871, 1, 1), 3],
            [Date.UTC(1872, 1, 1), 10],
            [Date.UTC(1875, 1, 1), 9],
            [Date.UTC(1877, 1, 1), 3],
            [Date.UTC(1878, 1, 1), 27],
           
          ]
        },
        {
          name: 'Papier',
          color:'yellow',
          data: [

            [Date.UTC(1850, 1, 1), 11],
            [Date.UTC(1850, 1, 1), 4],
            [Date.UTC(1851, 1, 1), 1],
            [Date.UTC(1852, 1, 1), 11],
            [Date.UTC(1853, 1, 1), 7],
            [Date.UTC(1854, 1, 1), 7],
            [Date.UTC(1855, 1, 1), 2],
            [Date.UTC(1856, 1, 1), 4],
            [Date.UTC(1857, 1, 1), 3],
            [Date.UTC(1858, 1, 1), 37],
            [Date.UTC(1859, 1, 1), 4],
            [Date.UTC(1860, 1, 1), 10],
            [Date.UTC(1861, 1, 1), 146],
            [Date.UTC(1862, 1, 1), 3],
            [Date.UTC(1865, 1, 1), 8],
            [Date.UTC(1866, 1, 1), 1],
            [Date.UTC(1867, 1, 1), 1],
            [Date.UTC(1868, 1, 1), 9],
            [Date.UTC(1870, 1, 1), 12],
            [Date.UTC(1872, 1, 1), 7],
            [Date.UTC(1873, 1, 1), 1],
            [Date.UTC(1875, 1, 1), 10],
            [Date.UTC(1876, 1, 1), 2],
            [Date.UTC(1877, 1, 1), 1],
            [Date.UTC(1878, 1, 1), 67],
            [Date.UTC(1879, 1, 1), 1],
          

          ]
        },
        {
          name: 'Pastel',
          visible:false,
          color:'black',
          data: [
            [Date.UTC(1875, 1, 1), 1],
            [Date.UTC(1878, 1, 1), 14],
           

          ]
        },
        {
          name: 'Stahl',
          color:'black',
          visible:false,
          data: [
           
            [Date.UTC(1868, 1, 1), 1],
            [Date.UTC(1872, 1, 1), 1],
           

          ]
        },
        {
          name: 'Stift',
          color:'violet',

          data: [
            [Date.UTC(1868, 1, 1), 2],
            [Date.UTC(1872, 1, 1), 7],
            [Date.UTC(1875, 1, 1), 2],
            [Date.UTC(1878, 1, 1), 19],
           

          ]
        },
        {
          name: 'Tinte',
          color:'black',
          visible:false,
          data: [
          
            [Date.UTC(1866, 1, 1), 1],
            [Date.UTC(1870, 1, 1), 2],
            [Date.UTC(1878, 1, 1), 5],
            [Date.UTC(1879, 1, 1), 1],
          
          ]
        },
        {
          name: 'Visitenkarte',
          visible:false,
          color:'black',
          data: [
        

          ]
        },
        {
          name: 'Wasserfarben',
          visible:false,
          color:'black',
          data: [
           
            [Date.UTC(1868, 1, 1), 1],
            [Date.UTC(1872, 1, 1), 6],
            [Date.UTC(1875, 1, 1), 1],
            [Date.UTC(1878, 1, 1), 12],
            
          ]
        },
        {
          name: 'Abs',
          color:'black',
          visible:false,
          data: [
          

          ]
        },
        {
          name: 'Acryl',
          color:'black',
          visible:false,
          data: [
            [Date.UTC(1880, 1, 1), 1],
           
          ]
        },
        {
          name: 'Airbush',
          color:'black',
          visible:false,
          data: [
           
          ]
        },
        {
          name: 'Aquatint',
          color:'orange',
          data: [
            [Date.UTC(1857, 1, 1), 8],
            [Date.UTC(1859, 1, 1), 1],
            [Date.UTC(1865, 1, 1), 1],
            [Date.UTC(1866, 1, 1), 2],
            [Date.UTC(1870, 1, 1), 2],
            [Date.UTC(1872, 1, 1), 1],
            [Date.UTC(1875, 1, 1), 4],
            [Date.UTC(1878, 1, 1), 60],
           
          ]
        },
        {
          name: 'Bronze',
          color: 'black',
          visible:false,
          data: [
            [Date.UTC(1878, 1, 1), 14],
           
          ]
        },
        {
          name: 'Carbon',
          color:'black',
          visible:false,
          data: [
         
            [Date.UTC(1855, 1, 1), 1],
            [Date.UTC(1856, 1, 1), 1],
            [Date.UTC(1857, 1, 1), 1],
            [Date.UTC(1864, 1, 1), 2],
            [Date.UTC(1874, 1, 1), 1],
            [Date.UTC(1875, 1, 1), 4],
            [Date.UTC(1876, 1, 1), 1],
          

          ]
        },
        {
          name: 'Glas',
          color:'black',
          visible:false,
          data: [
          
            [Date.UTC(1850, 1, 1), 3],
            [Date.UTC(1851, 1, 1), 1],
            [Date.UTC(1852, 1, 1), 39],
            [Date.UTC(1853, 1, 1), 4],
            [Date.UTC(1854, 1, 1), 4],
            [Date.UTC(1855, 1, 1), 3],
            [Date.UTC(1856, 1, 1), 1],
            [Date.UTC(1857, 1, 1), 1],
            [Date.UTC(1859, 1, 1), 4],
            [Date.UTC(1860, 1, 1), 21],
            [Date.UTC(1860, 1, 1), 1],
            [Date.UTC(1861, 1, 1), 16],
            [Date.UTC(1862, 1, 1), 2],
            [Date.UTC(1863, 1, 1), 15],
            [Date.UTC(1864, 1, 1), 19],
            [Date.UTC(1865, 1, 1), 9],
            [Date.UTC(1866, 1, 1), 2],
            [Date.UTC(1867, 1, 1), 16],
            [Date.UTC(1868, 1, 1), 2],
            [Date.UTC(1869, 1, 1), 143],
            [Date.UTC(1870, 1, 1), 13],
            [Date.UTC(1871, 1, 1), 1],
            [Date.UTC(1872, 1, 1), 2],
            [Date.UTC(1873, 1, 1), 3],
            [Date.UTC(1874, 1, 1), 1],
            [Date.UTC(1875, 1, 1), 5],
            [Date.UTC(1876, 1, 1), 9],
            [Date.UTC(1878, 1, 1), 2],
            [Date.UTC(1880, 1, 1), 2],
           
          ]
        },
        {
          name: 'Mylar',
          color:'black',
          visible:false,
          data: [
         
          ]
        },
        {
          name: 'Photomontage',
          color:'lightblue',
          data: [
            [Date.UTC(1870, 1, 1), 1],
           

          ]
        },
        {
          name: 'Polyster',
          color:'black',
          visible:false,
          data: [
         
          ]
        },
        {
          name: 'Video',
          color: 'darkgreen',
          data: [
            [Date.UTC(1870, 1, 1), 1],
          
          ]
        },
      ],
      exporting: {
        buttons: {
            contextButton: {     
                onclick: function () {
                    alert('Clicked');
                },
            }
        }
    },     
    } );
    
  }
  function c (){
    Highcharts.chart('container', {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Materialien Nutzung des Künstlers Bougleois (1911 - 2010)'
      },
      subtitle: {
          text:'Source: <a href="dashboard">Click me for Biography of Artist</a>'
      },
      plotOptions: {
          series: {
              dataLabels: {
                  enabled: true,
                  format: '{point.name}: {point.y:.1f}'
              }
          }
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
      },
      series: [{
        name: 'Brands',
        data: [{
            name: 'Filzstift',
            y: 0
        }, {
            name: 'Aquatint',
            y: 0
        }, {
            name: 'Graphite',
            y: 0

        }, {
            name: 'Bronze',
            y: 0
        }, {
            name: 'Holz',
            y: 41
        }, {
            name: 'Carbon',
            y: 0
        }, {
            name: 'Kugelschreiber',
            y: 3
        }, {
            name: 'Glas',
            y: 0
        },{
          name: 'Öl',
          y: 2

      },{
        name: 'Mylar',
        y: 0
    },
    {
      name: 'Papier',
      y: 41
  },
  {
    name: 'Photomontage',
    y: 0
},
{
  name: 'Pastel',
  y: 0

},{
  name: 'Polyester',
  y: 0
},
{
  name: 'Stahl',
  y: 3
},
{
  name: 'Video',
  y: 0
},
{
  name: 'Stift',
  y: 25
},
{
  name: 'Druck',
  y:565
},
{
  name: 'Tinte',
  y: 41
},
{
  name: 'Gelantinendruck',
  y: 0
},
{
  name: 'Visitenkarte',
  y: 0
},
{
  name: 'Wasserfarben',
  y: 13
},
{
  name: 'Abs',
  y: 0
},
{
  name: 'Acryl',
  y: 0
},
{
  name: 'Airbrush',
  y: 0
},
      ]
    }]
      
  });
  }

  function d (){
    Highcharts.chart('artist2', {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Materialien Nutzung des Künstlers Bougleois (1911 - 2010)'
      },
      subtitle: {
          text:'Source: <a href="dashboard">Click me for Biography of Artist</a>'
      },
      plotOptions: {
          series: {
              dataLabels: {
                  enabled: true,
                  format: '{point.name}: {point.y:.1f}'
              }
          }
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
      },
      series: [{
        name: 'Brands',
        data: [{
            name: 'Filzstift',
            y: 0
        }, {
            name: 'Aquatint',
            y: 0
        }, {
            name: 'Graphite',
            y: 0

        }, {
            name: 'Bronze',
            y: 0
        }, {
            name: 'Holz',
            y: 41
        }, {
            name: 'Carbon',
            y: 0
        }, {
            name: 'Kugelschreiber',
            y: 3
        }, {
            name: 'Glas',
            y: 0
        },{
          name: 'Öl',
          y: 2

      },{
        name: 'Mylar',
        y: 0
    },
    {
      name: 'Papier',
      y: 41
  },
  {
    name: 'Photomontage',
    y: 0
},
{
  name: 'Pastel',
  y: 0

},{
  name: 'Polyester',
  y: 0
},
{
  name: 'Stahl',
  y: 3
},
{
  name: 'Video',
  y: 0
},
{
  name: 'Stift',
  y: 25
},
{
  name: 'Druck',
  y:565
},
{
  name: 'Tinte',
  y: 41
},
{
  name: 'Gelantinendruck',
  y: 0
},
{
  name: 'Visitenkarte',
  y: 0
},
{
  name: 'Wasserfarben',
  y: 13
},
{
  name: 'Abs',
  y: 0
},
{
  name: 'Acryl',
  y: 0
},
{
  name: 'Airbrush',
  y: 0
},
      ]
    }]
      
  });
  }

  function e (){
    Highcharts.chart('artist3', {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Materialien Nutzung des Künstlers Bougleois (1911 - 2010)'
      },
      subtitle: {
          text:'Source: <a href="dashboard">Click me for Biography of Artist</a>'
      },
      plotOptions: {
          series: {
              dataLabels: {
                  enabled: true,
                  format: '{point.name}: {point.y:.1f}'
              }
          }
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
      },
      series: [{
        name: 'Brands',
        data: [{
            name: 'Filzstift',
            y: 0
        }, {
            name: 'Aquatint',
            y: 0
        }, {
            name: 'Graphite',
            y: 0

        }, {
            name: 'Bronze',
            y: 0
        }, {
            name: 'Holz',
            y: 41
        }, {
            name: 'Carbon',
            y: 0
        }, {
            name: 'Kugelschreiber',
            y: 3
        }, {
            name: 'Glas',
            y: 0
        },{
          name: 'Öl',
          y: 2

      },{
        name: 'Mylar',
        y: 0
    },
    {
      name: 'Papier',
      y: 41
  },
  {
    name: 'Photomontage',
    y: 0
},
{
  name: 'Pastel',
  y: 0

},{
  name: 'Polyester',
  y: 0
},
{
  name: 'Stahl',
  y: 3
},
{
  name: 'Video',
  y: 0
},
{
  name: 'Stift',
  y: 25
},
{
  name: 'Druck',
  y:565
},
{
  name: 'Tinte',
  y: 41
},
{
  name: 'Gelantinendruck',
  y: 0
},
{
  name: 'Visitenkarte',
  y: 0
},
{
  name: 'Wasserfarben',
  y: 13
},
{
  name: 'Abs',
  y: 0
},
{
  name: 'Acryl',
  y: 0
},
{
  name: 'Airbrush',
  y: 0
},
      ]
    }]
      
  });
  }

  function f (){
    Highcharts.chart('container', {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Materialien Nutzung des Künstlers Bougleois (1911 - 2010)'
      },
      subtitle: {
          text:'Source: <a href="dashboard">Click me for Biography of Artist</a>'
      },
      plotOptions: {
          series: {
              dataLabels: {
                  enabled: true,
                  format: '{point.name}: {point.y:.1f}'
              }
          }
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
      },
      series: [{
        name: 'Brands',
        data: [{
            name: 'Filzstift',
            y: 0
        }, {
            name: 'Aquatint',
            y: 0
        }, {
            name: 'Graphite',
            y: 0

        }, {
            name: 'Bronze',
            y: 0
        }, {
            name: 'Holz',
            y: 41
        }, {
            name: 'Carbon',
            y: 0
        }, {
            name: 'Kugelschreiber',
            y: 3
        }, {
            name: 'Glas',
            y: 0
        },{
          name: 'Öl',
          y: 2

      },{
        name: 'Mylar',
        y: 0
    },
    {
      name: 'Papier',
      y: 41
  },
  {
    name: 'Photomontage',
    y: 0
},
{
  name: 'Pastel',
  y: 0

},{
  name: 'Polyester',
  y: 0
},
{
  name: 'Stahl',
  y: 3
},
{
  name: 'Video',
  y: 0
},
{
  name: 'Stift',
  y: 25
},
{
  name: 'Druck',
  y:565
},
{
  name: 'Tinte',
  y: 41
},
{
  name: 'Gelantinendruck',
  y: 0
},
{
  name: 'Visitenkarte',
  y: 0
},
{
  name: 'Wasserfarben',
  y: 13
},
{
  name: 'Abs',
  y: 0
},
{
  name: 'Acryl',
  y: 0
},
{
  name: 'Airbrush',
  y: 0
},
      ]
    }]
      
  });
  }

  function g (){
    Highcharts.chart('container', {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Materialien Nutzung des Künstlers Bougleois (1911 - 2010)'
      },
      subtitle: {
          text:'Source: <a href="dashboard">Click me for Biography of Artist</a>'
      },
      plotOptions: {
          series: {
              dataLabels: {
                  enabled: true,
                  format: '{point.name}: {point.y:.1f}'
              }
          }
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
      },
      series: [{
        name: 'Brands',
        data: [{
            name: 'Filzstift',
            y: 0
        }, {
            name: 'Aquatint',
            y: 0
        }, {
            name: 'Graphite',
            y: 0

        }, {
            name: 'Bronze',
            y: 0
        }, {
            name: 'Holz',
            y: 41
        }, {
            name: 'Carbon',
            y: 0
        }, {
            name: 'Kugelschreiber',
            y: 3
        }, {
            name: 'Glas',
            y: 0
        },{
          name: 'Öl',
          y: 2

      },{
        name: 'Mylar',
        y: 0
    },
    {
      name: 'Papier',
      y: 41
  },
  {
    name: 'Photomontage',
    y: 0
},
{
  name: 'Pastel',
  y: 0

},{
  name: 'Polyester',
  y: 0
},
{
  name: 'Stahl',
  y: 3
},
{
  name: 'Video',
  y: 0
},
{
  name: 'Stift',
  y: 25
},
{
  name: 'Druck',
  y:565
},
{
  name: 'Tinte',
  y: 41
},
{
  name: 'Gelantinendruck',
  y: 0
},
{
  name: 'Visitenkarte',
  y: 0
},
{
  name: 'Wasserfarben',
  y: 13
},
{
  name: 'Abs',
  y: 0
},
{
  name: 'Acryl',
  y: 0
},
{
  name: 'Airbrush',
  y: 0
},
      ]
    }]
      
  });
  }

  

  
  
}



}