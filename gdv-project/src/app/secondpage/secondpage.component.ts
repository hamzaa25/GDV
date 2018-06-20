import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import * as $ from 'jquery';
import { Button } from 'protractor';
import { directiveCreate } from '@angular/core/src/render3/instructions';


const categoryLinks = {
  '1950': 'https://www.was-war-wann.de/1900/1950/kunst_der_50er.html',
  '1955': 'http://www.google.com/search?q=foo+bar',
  '1960': 'http://www.google.com/serach?q=foobar'
};

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})

export class SecondpageComponent implements OnInit {

constructor (){

}

magischerRealismuss () {
  document.getElementById("text").innerHTML = ` Der magische Realismus (spanisch realismo mágico) ist eine künstlerische Strömung, die seit den 1920er-Jahren
  vor allem im Gebiet der Malerei und der Literatur in einigen Ländern Europas sowie Nord- und Südamerikas
  vertreten ist. Aufgegriffen und weitergeführt wurde der magische Realismus später auch in den Bereichen
  Filmkunst und Fotografie. Der magische Realismus stellt die Verschmelzung von realer Wirklichkeit (greifbar,
  sichtbar, rational) und magischer Realität (Halluzinationen, Träume) dar. Er ist eine „dritte Realität“, eine
  Synthese aus den uns geläufigen Wirklichkeiten. Der Übergang zum Surrealismus ist fließend.
  `
  


  Highcharts.chart('secondChart', {
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
     text: 'Benutzte Materialien und Werkzeuge im Magischer Realismus'
   },
   subtitle: {
     text: document.ontouchstart === undefined ?
       'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
     enabled: true
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
         enabled: true
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
         enabled: true

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
    
         [Date.UTC(1918, 1, 1), 352],
         [Date.UTC(1919, 1, 1), 413],
         [Date.UTC(1920, 1, 1), 890],
         [Date.UTC(1920, 1, 1), 1],
         [Date.UTC(1921, 1, 1), 389],
         [Date.UTC(1922, 1, 1), 660],
         [Date.UTC(1923, 1, 1), 168],
         [Date.UTC(1924, 1, 1), 250],
         [Date.UTC(1925, 1, 1), 200],
         [Date.UTC(1926, 1, 1), 731],
         [Date.UTC(1927, 1, 1), 728],
         [Date.UTC(1928, 1, 1), 158],
         [Date.UTC(1929, 1, 1), 432],
         [Date.UTC(1930, 1, 1), 760],
         [Date.UTC(1931, 1, 1), 206],
         [Date.UTC(1932, 1, 1), 500],
         [Date.UTC(1933, 1, 1), 777],
      

       ]
     }, {
       name: 'Filztift',
       
       visible:true,
       data: [
      

       ]
     },
     {
       name: 'Gelatinendruck',
       
       legendIndex:26,
       visible:true,
       data: [
         //    [Date.UTC(1927, 1, 1), 3],
     

       ]
     }, {
       name: 'Graphite',
       
       visible:true,
       data: [
    
         [Date.UTC(1918, 1, 1), 1],
         [Date.UTC(1919, 1, 1), 2],
         [Date.UTC(1920, 1, 1), 16],
         [Date.UTC(1921, 1, 1), 2],
         [Date.UTC(1923, 1, 1), 1],
         [Date.UTC(1925, 1, 1), 2],
         [Date.UTC(1926, 1, 1), 2],
         [Date.UTC(1927, 1, 1), 44],
         [Date.UTC(1928, 1, 1), 1],
         [Date.UTC(1929, 1, 1), 1],
         [Date.UTC(1931, 1, 1), 3],
         [Date.UTC(1933, 1, 1), 3],
       

       ]
     }, {
       name: 'Holz',
       color:'brown',
       data: [

         [Date.UTC(1918, 1, 1), 60],
         [Date.UTC(1919, 1, 1), 128],
         [Date.UTC(1920, 1, 1), 23],
         [Date.UTC(1921, 1, 1), 118],
         [Date.UTC(1922, 1, 1), 17],
         [Date.UTC(1923, 1, 1), 75],
         [Date.UTC(1924, 1, 1), 8],
         [Date.UTC(1925, 1, 1), 43],
         [Date.UTC(1926, 1, 1), 222],
         [Date.UTC(1927, 1, 1), 80],
         [Date.UTC(1928, 1, 1), 81],
         [Date.UTC(1929, 1, 1), 24],
         [Date.UTC(1930, 1, 1), 92],
         [Date.UTC(1931, 1, 1), 40],
         [Date.UTC(1932, 1, 1), 26],
         [Date.UTC(1933, 1, 1), 61],
       
       ]
     }, {
       name: 'Kugelschreiber',
       
       visible:true,
       data: [
         [Date.UTC(1921, 1, 1), 21],
         [Date.UTC(1926, 1, 1), 1],
         [Date.UTC(1927, 1, 1), 3],
         [Date.UTC(1931, 1, 1), 5],
         [Date.UTC(1933, 1, 1), 1],
       

       ]
     },
     {
       name: 'Öl',
       
       visible:true,
       data: [
        
         [Date.UTC(1918, 1, 1), 19],
         [Date.UTC(1919, 1, 1), 20],
         [Date.UTC(1920, 1, 1), 6],
         [Date.UTC(1921, 1, 1), 30],
         [Date.UTC(1922, 1, 1), 24],
         [Date.UTC(1923, 1, 1), 13],
         [Date.UTC(1924, 1, 1), 15],
         [Date.UTC(1925, 1, 1), 22],
         [Date.UTC(1926, 1, 1), 32],
         [Date.UTC(1927, 1, 1), 91],
         [Date.UTC(1928, 1, 1), 11],
         [Date.UTC(1929, 1, 1), 7],
         [Date.UTC(1930, 1, 1), 18],
         [Date.UTC(1931, 1, 1), 19],
         [Date.UTC(1932, 1, 1), 26],
         [Date.UTC(1933, 1, 1), 45],
        
       ]
     },
     {
       name: 'Papier',
       color:'yellow',
       data: [
        
         [Date.UTC(1918, 1, 1), 47],
         [Date.UTC(1919, 1, 1), 36],
         [Date.UTC(1920, 1, 1), 52],
         [Date.UTC(1921, 1, 1), 262],
         [Date.UTC(1922, 1, 1), 52],
         [Date.UTC(1923, 1, 1), 95],
         [Date.UTC(1924, 1, 1), 19],
         [Date.UTC(1925, 1, 1), 72],
         [Date.UTC(1926, 1, 1), 70],
         [Date.UTC(1927, 1, 1), 2306],
         [Date.UTC(1928, 1, 1), 19],
         [Date.UTC(1929, 1, 1), 30],
         [Date.UTC(1930, 1, 1), 44],
         [Date.UTC(1931, 1, 1), 64],
         [Date.UTC(1932, 1, 1), 66],
         [Date.UTC(1933, 1, 1), 158],
      
       ]
     },
     {
       name: 'Pastel',
       visible:true,
       
       data: [
      
         [Date.UTC(1918, 1, 1), 1],
         [Date.UTC(1919, 1, 1), 1],
         [Date.UTC(1920, 1, 1), 1],
         [Date.UTC(1921, 1, 1), 4],
         [Date.UTC(1922, 1, 1), 1],
         [Date.UTC(1924, 1, 1), 1],
         [Date.UTC(1925, 1, 1), 1],
         [Date.UTC(1926, 1, 1), 2],
         [Date.UTC(1927, 1, 1), 8],
         [Date.UTC(1930, 1, 1), 1],
         [Date.UTC(1931, 1, 1), 2],
         [Date.UTC(1932, 1, 1), 1],
      

       ]
     },
     {
       name: 'Stahl',
       
       visible:true,
       data: [
     
         [Date.UTC(1919, 1, 1), 1],
         [Date.UTC(1920, 1, 1), 8],
         [Date.UTC(1921, 1, 1), 1],
         [Date.UTC(1922, 1, 1), 1],
         [Date.UTC(1923, 1, 1), 1],
         [Date.UTC(1924, 1, 1), 1],
         [Date.UTC(1926, 1, 1), 7],
         [Date.UTC(1927, 1, 1), 37],
         [Date.UTC(1929, 1, 1), 2],
         [Date.UTC(1930, 1, 1), 4],
         [Date.UTC(1931, 1, 1), 4],
         [Date.UTC(1932, 1, 1), 6],
         [Date.UTC(1933, 1, 1), 8],
       

       ]
     },
     {
       name: 'Stift',
       color:'violet',

       data: [
    
         [Date.UTC(1918, 1, 1), 18],
         [Date.UTC(1919, 1, 1), 18],
         [Date.UTC(1920, 1, 1), 18],
         [Date.UTC(1921, 1, 1), 125],
         [Date.UTC(1922, 1, 1), 29],
         [Date.UTC(1923, 1, 1), 16],
         [Date.UTC(1924, 1, 1), 11],
         [Date.UTC(1925, 1, 1), 33],
         [Date.UTC(1926, 1, 1), 31],
         [Date.UTC(1927, 1, 1), 2116],
         [Date.UTC(1928, 1, 1), 9],
         [Date.UTC(1929, 1, 1), 11],
         [Date.UTC(1930, 1, 1), 25],
         [Date.UTC(1931, 1, 1), 28],
         [Date.UTC(1932, 1, 1), 33],
         [Date.UTC(1933, 1, 1), 92],
     

       ]
     },
     {
       name: 'Tinte',
       
       visible:true,
       data: [
       
         [Date.UTC(1918, 1, 1), 53],
         [Date.UTC(1919, 1, 1), 16],
         [Date.UTC(1920, 1, 1), 17],
         [Date.UTC(1921, 1, 1), 55],
         [Date.UTC(1922, 1, 1), 8],
         [Date.UTC(1923, 1, 1), 72],
         [Date.UTC(1925, 1, 1), 31],
         [Date.UTC(1926, 1, 1), 32],
         [Date.UTC(1927, 1, 1), 514],
         [Date.UTC(1928, 1, 1), 10],
         [Date.UTC(1929, 1, 1), 17],
         [Date.UTC(1930, 1, 1), 15],
         [Date.UTC(1931, 1, 1), 28],
         [Date.UTC(1932, 1, 1), 33],
         [Date.UTC(1933, 1, 1), 91],
     
       ]
     },
     {
       name: 'Visitenkarte',
       visible:true,
       
       data: [
        

       ]
     },
     {
       name: 'Wasserfarben',
       visible:true,
       
       data: [
      
         [Date.UTC(1918, 1, 1), 37],
         [Date.UTC(1919, 1, 1), 17],
         [Date.UTC(1920, 1, 1), 13],
         [Date.UTC(1921, 1, 1), 188],
         [Date.UTC(1922, 1, 1), 37],
         [Date.UTC(1923, 1, 1), 70],
         [Date.UTC(1924, 1, 1), 11],
         [Date.UTC(1925, 1, 1), 12],
         [Date.UTC(1926, 1, 1), 50],
         [Date.UTC(1927, 1, 1), 204],
         [Date.UTC(1928, 1, 1), 6],
         [Date.UTC(1929, 1, 1), 6],
         [Date.UTC(1930, 1, 1), 19],
         [Date.UTC(1931, 1, 1), 29],
         [Date.UTC(1932, 1, 1), 43],
         [Date.UTC(1933, 1, 1), 79],
       ]
     },
     {
       name: 'Abs',
       
       visible:true,
       data: [
     
       ]
     },
     {
       name: 'Acryl',
       
       visible:true,
       data: [
    
         [Date.UTC(1927, 1, 1), 7],
         [Date.UTC(1931, 1, 1), 4],
      
       ]
     },
     {
       name: 'Airbush',
       
       visible:true,
       data: [
         [Date.UTC(1920, 1, 1), 1],
         [Date.UTC(1922, 1, 1), 2],
         [Date.UTC(1923, 1, 1), 1],
         [Date.UTC(1927, 1, 1), 5],
         [Date.UTC(1933, 1, 1), 1],
      
       ]
     },
     {
       name: 'Aquatint',
       color:'orange',
       data: [
      
         [Date.UTC(1918, 1, 1), 79],
         [Date.UTC(1919, 1, 1), 129],
         [Date.UTC(1920, 1, 1), 10],
         [Date.UTC(1921, 1, 1), 16],
         [Date.UTC(1922, 1, 1), 57],
         [Date.UTC(1923, 1, 1), 45],
         [Date.UTC(1924, 1, 1), 12],
         [Date.UTC(1925, 1, 1), 24],
         [Date.UTC(1926, 1, 1), 177],
         [Date.UTC(1927, 1, 1), 665],
         [Date.UTC(1928, 1, 1), 16],
         [Date.UTC(1929, 1, 1), 50],
         [Date.UTC(1930, 1, 1), 101],
         [Date.UTC(1931, 1, 1), 82],
         [Date.UTC(1932, 1, 1), 42],
         [Date.UTC(1933, 1, 1), 232],
        
       ]
     },
     {
       name: 'Bronze',
       
       visible:true,
       data: [
         
         [Date.UTC(1919, 1, 1), 4],
         [Date.UTC(1924, 1, 1), 2],
         [Date.UTC(1925, 1, 1), 4],
         [Date.UTC(1926, 1, 1), 7],
         [Date.UTC(1927, 1, 1), 7],
         [Date.UTC(1929, 1, 1), 1],
         [Date.UTC(1930, 1, 1), 1],
         [Date.UTC(1931, 1, 1), 2],
         [Date.UTC(1932, 1, 1), 7],
         [Date.UTC(1933, 1, 1), 23],
      
       ]
     },
     {
       name: 'Carbon',
       
       visible:true,
       data: [
        
         [Date.UTC(1918, 1, 1), 1],
         [Date.UTC(1921, 1, 1), 5],
         [Date.UTC(1923, 1, 1), 1],
         [Date.UTC(1926, 1, 1), 9],
         [Date.UTC(1927, 1, 1), 9],
         [Date.UTC(1930, 1, 1), 3],
         [Date.UTC(1932, 1, 1), 2],
      

       ]
     },
     {
       name: 'Glas',
       
       visible:true,
       data: [
         [Date.UTC(1920, 1, 1), 7],
         [Date.UTC(1921, 1, 1), 5],
         [Date.UTC(1923, 1, 1), 1],
         [Date.UTC(1925, 1, 1), 2],
         [Date.UTC(1926, 1, 1), 22],
         [Date.UTC(1927, 1, 1), 24],
         [Date.UTC(1928, 1, 1), 4],
         [Date.UTC(1929, 1, 1), 16],
         [Date.UTC(1930, 1, 1), 5],
         [Date.UTC(1931, 1, 1), 2],
         [Date.UTC(1932, 1, 1), 5],
         [Date.UTC(1933, 1, 1), 4],
       
       ]
     },
     {
       name: 'Mylar',
       
       visible:true,
       data: [
     

       ]
     },
     {
       name: 'Photomontage',
       color:'lightblue',
       data: [
       
         [Date.UTC(1920, 1, 1), 7],
         [Date.UTC(1923, 1, 1), 18],
         [Date.UTC(1924, 1, 1), 2],
         [Date.UTC(1925, 1, 1), 1],
         [Date.UTC(1926, 1, 1), 4],
         [Date.UTC(1927, 1, 1), 2],
         [Date.UTC(1931, 1, 1), 1],

       ]
     },
     {
       name: 'Polyster',
       
       visible:true,
       data: [
        
       ]
     },
     {
       name: 'Video',
       color: 'darkgreen',
       data: [
         
         [Date.UTC(1918, 1, 1), 1],
         [Date.UTC(1919, 1, 1), 4],
         [Date.UTC(1920, 1, 1), 4],
         [Date.UTC(1921, 1, 1), 1],
         [Date.UTC(1923, 1, 1), 5],
         [Date.UTC(1924, 1, 1), 5],
         [Date.UTC(1925, 1, 1), 3],
         [Date.UTC(1926, 1, 1), 23],
         [Date.UTC(1927, 1, 1), 7],
         [Date.UTC(1928, 1, 1), 3],
         [Date.UTC(1929, 1, 1), 7],
         [Date.UTC(1930, 1, 1), 3],
         [Date.UTC(1931, 1, 1), 7],
         [Date.UTC(1932, 1, 1), 6],
         [Date.UTC(1933, 1, 1), 18],
         [Date.UTC(1928, 1, 1), 2],
      
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

AbstrakterExpressionismus () {
  document.getElementById("text").innerHTML = ` Der abstrakte Expressionismus ist eine nordamerikanische Kunstrichtung der modernen Malerei, die
  vornehmlich durch die New York School in den späten 1940er bis frühen 1960er Jahren bekannt wurde. Ihre
  Hauptströmungen manifestierten sich im Action Painting und der Farbfeldmalerei.
  `
  Highcharts.chart('secondChart', {
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
     text: 'Benutzte Materialien und Werkzeuge im Abstrakter Expressionismus'
   },
   subtitle: {
     text: document.ontouchstart === undefined ?
       'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
   },
   xAxis: {
     description:'test',
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
     enabled: true
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
         enabled: true
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
         enabled: true

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
        
        [Date.UTC(1950, 1, 1), 351],
        [Date.UTC(1951, 1, 1), 258],
        [Date.UTC(1952, 1, 1), 738],
        [Date.UTC(1953, 1, 1), 417],
        [Date.UTC(1954, 1, 1), 267],
        [Date.UTC(1955, 1, 1), 830],
        [Date.UTC(1956, 1, 1), 1160],
        [Date.UTC(1957, 1, 1), 469],
        [Date.UTC(1958, 1, 1), 433],
        [Date.UTC(1959, 1, 1), 184],
        [Date.UTC(1960, 1, 1), 1284],
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1961, 1, 1), 619],
        [Date.UTC(1962, 1, 1), 645],
        [Date.UTC(1963, 1, 1), 821],
        [Date.UTC(1964, 1, 1), 1106],
        [Date.UTC(1965, 1, 1), 792],
        

      ]
    }, {
      name: 'Filztift',
      visible:true,
      data: [
        
        [Date.UTC(1958, 1, 1), 1],
        [Date.UTC(1959, 1, 1), 2],
        

      ]
    },
    {
      name: 'Gelatinendruck',
      legendIndex:26,
      visible:true,
      data: [
        //    [Date.UTC(1927, 1, 1), 3],
        

      ]
    }, {
      name: 'Graphite',
      visible:true,
      data: [
        
        [Date.UTC(1952, 1, 1), 1],
        [Date.UTC(1953, 1, 1), 5],
        [Date.UTC(1954, 1, 1), 7],
        [Date.UTC(1955, 1, 1), 1],
        [Date.UTC(1956, 1, 1), 1],
        [Date.UTC(1957, 1, 1), 8],
        [Date.UTC(1958, 1, 1), 1],
        [Date.UTC(1959, 1, 1), 12],
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 18],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 12],
        [Date.UTC(1965, 1, 1), 20],
        

      ]
    }, {
      name: 'Holz',
      color:'brown',
      data: [
        
        [Date.UTC(1950, 1, 1), 80],
        [Date.UTC(1951, 1, 1), 32],
        [Date.UTC(1952, 1, 1), 30],
        [Date.UTC(1953, 1, 1), 56],
        [Date.UTC(1954, 1, 1), 33],
        [Date.UTC(1955, 1, 1), 98],
        [Date.UTC(1956, 1, 1), 51],
        [Date.UTC(1957, 1, 1), 24],
        [Date.UTC(1958, 1, 1), 67],
        [Date.UTC(1959, 1, 1), 27],
        [Date.UTC(1960, 1, 1), 158],
        [Date.UTC(1961, 1, 1), 233],
        [Date.UTC(1962, 1, 1), 53],
        [Date.UTC(1963, 1, 1), 46],
        [Date.UTC(1964, 1, 1), 69],
        [Date.UTC(1965, 1, 1), 80],
        
      ]
    }, {
      name: 'Kugelschreiber',
      visible:true,
      data: [
        
        [Date.UTC(1950, 1, 1), 1],
        [Date.UTC(1952, 1, 1), 5],
        [Date.UTC(1953, 1, 1), 2],
        [Date.UTC(1954, 1, 1), 19],
        [Date.UTC(1955, 1, 1), 7],
        [Date.UTC(1956, 1, 1), 6],
        [Date.UTC(1957, 1, 1), 2],
        [Date.UTC(1958, 1, 1), 9],
        [Date.UTC(1959, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 10],
        [Date.UTC(1961, 1, 1), 5],
        [Date.UTC(1962, 1, 1), 7],
        [Date.UTC(1963, 1, 1), 13],
        [Date.UTC(1964, 1, 1), 24],
        [Date.UTC(1965, 1, 1), 10],
        

      ]
    },
    {
      name: 'Öl',
      visible:true,
      data: [
        
        [Date.UTC(1950, 1, 1), 26],
        [Date.UTC(1951, 1, 1), 15],
        [Date.UTC(1952, 1, 1), 15],
        [Date.UTC(1953, 1, 1), 83],
        [Date.UTC(1954, 1, 1), 16],
        [Date.UTC(1955, 1, 1), 10],
        [Date.UTC(1956, 1, 1), 17],
        [Date.UTC(1957, 1, 1), 21],
        [Date.UTC(1958, 1, 1), 27],
        [Date.UTC(1959, 1, 1), 23],
        [Date.UTC(1960, 1, 1), 29],
        [Date.UTC(1961, 1, 1), 27],
        [Date.UTC(1962, 1, 1), 30],
        [Date.UTC(1963, 1, 1), 23],
        [Date.UTC(1964, 1, 1), 35],
        [Date.UTC(1965, 1, 1), 22],
        
      ]
    },
    {
      name: 'Papier',
      color:'yellow',
      data: [
        
        [Date.UTC(1950, 1, 1), 71],
        [Date.UTC(1951, 1, 1), 68],
        [Date.UTC(1952, 1, 1), 44],
        [Date.UTC(1953, 1, 1), 228],
        [Date.UTC(1954, 1, 1), 141],
        [Date.UTC(1955, 1, 1), 205],
        [Date.UTC(1956, 1, 1), 135],
        [Date.UTC(1957, 1, 1), 74],
        [Date.UTC(1958, 1, 1), 90],
        [Date.UTC(1959, 1, 1), 60],
        [Date.UTC(1960, 1, 1), 170],
        [Date.UTC(1961, 1, 1), 87],
        [Date.UTC(1962, 1, 1), 193],
        [Date.UTC(1963, 1, 1), 200],
        [Date.UTC(1964, 1, 1), 391],
        [Date.UTC(1965, 1, 1), 180],
        

      ]
    },
    {
      name: 'Pastel',
      visible:true,
      data: [
        
        [Date.UTC(1950, 1, 1), 2],
        [Date.UTC(1952, 1, 1), 2],
        [Date.UTC(1953, 1, 1), 1],
        [Date.UTC(1954, 1, 1), 1],
        [Date.UTC(1955, 1, 1), 4],
        [Date.UTC(1956, 1, 1), 6],
        [Date.UTC(1957, 1, 1), 1],
        [Date.UTC(1958, 1, 1), 2],
        [Date.UTC(1959, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1961, 1, 1), 2],
        [Date.UTC(1962, 1, 1), 9],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 10],
        [Date.UTC(1965, 1, 1), 5],
        

      ]
    },
    {
      name: 'Stahl',
      visible:true,
      data: [
        
        [Date.UTC(1950, 1, 1), 38],
        [Date.UTC(1951, 1, 1), 9],
        [Date.UTC(1952, 1, 1), 10],
        [Date.UTC(1953, 1, 1), 16],
        [Date.UTC(1954, 1, 1), 17],
        [Date.UTC(1955, 1, 1), 10],
        [Date.UTC(1956, 1, 1), 8],
        [Date.UTC(1957, 1, 1), 9],
        [Date.UTC(1958, 1, 1), 15],
        [Date.UTC(1959, 1, 1), 6],
        [Date.UTC(1960, 1, 1), 36],
        [Date.UTC(1961, 1, 1), 14],
        [Date.UTC(1962, 1, 1), 13],
        [Date.UTC(1963, 1, 1), 12],
        [Date.UTC(1964, 1, 1), 21],
        [Date.UTC(1965, 1, 1), 21],
        

      ]
    },
    {
      name: 'Stift',
      color:'violet',

      data: [
        
        [Date.UTC(1950, 1, 1), 11],
        [Date.UTC(1951, 1, 1), 32],
        [Date.UTC(1952, 1, 1), 15],
        [Date.UTC(1953, 1, 1), 56],
        [Date.UTC(1954, 1, 1), 29],
        [Date.UTC(1955, 1, 1), 78],
        [Date.UTC(1956, 1, 1), 76],
        [Date.UTC(1957, 1, 1), 62],
        [Date.UTC(1958, 1, 1), 53],
        [Date.UTC(1959, 1, 1), 20],
        [Date.UTC(1960, 1, 1), 90],
        [Date.UTC(1961, 1, 1), 30],
        [Date.UTC(1962, 1, 1), 70],
        [Date.UTC(1963, 1, 1), 27],
        [Date.UTC(1964, 1, 1), 175],
        [Date.UTC(1965, 1, 1), 63],
        

      ]
    },
    {
      name: 'Tinte',
      visible:true,
      data: [
        
        [Date.UTC(1950, 1, 1), 27],
        [Date.UTC(1951, 1, 1), 30],
        [Date.UTC(1952, 1, 1), 26],
        [Date.UTC(1953, 1, 1), 85],
        [Date.UTC(1954, 1, 1), 94],
        [Date.UTC(1955, 1, 1), 63],
        [Date.UTC(1956, 1, 1), 74],
        [Date.UTC(1957, 1, 1), 89],
        [Date.UTC(1958, 1, 1), 71],
        [Date.UTC(1959, 1, 1), 40],
        [Date.UTC(1960, 1, 1), 115],
        [Date.UTC(1961, 1, 1), 59],
        [Date.UTC(1962, 1, 1), 79],
        [Date.UTC(1963, 1, 1), 158],
        [Date.UTC(1964, 1, 1), 95],
        [Date.UTC(1965, 1, 1), 59],
        
      ]
    },
    {
      name: 'Visitenkarte',
      visible:true,
      data: [
        [Date.UTC(1954, 1, 1), 61],
        [Date.UTC(1955, 1, 1), 24],
        [Date.UTC(1956, 1, 1), 4],
        [Date.UTC(1959, 1, 1), 8],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 15],
        [Date.UTC(1965, 1, 1), 19],
        

      ]
    },
    {
      name: 'Wasserfarben',
      visible:true,
      data: [
        
        [Date.UTC(1950, 1, 1), 8],
        [Date.UTC(1951, 1, 1), 44],
        [Date.UTC(1952, 1, 1), 5],
        [Date.UTC(1953, 1, 1), 46],
        [Date.UTC(1954, 1, 1), 12],
        [Date.UTC(1955, 1, 1), 19],
        [Date.UTC(1956, 1, 1), 29],
        [Date.UTC(1957, 1, 1), 11],
        [Date.UTC(1958, 1, 1), 43],
        [Date.UTC(1959, 1, 1), 9],
        [Date.UTC(1960, 1, 1), 34],
        [Date.UTC(1961, 1, 1), 32],
        [Date.UTC(1962, 1, 1), 18],
        [Date.UTC(1963, 1, 1), 24],
        [Date.UTC(1964, 1, 1), 102],
        [Date.UTC(1965, 1, 1), 57],
        
      ]
    },
    {
      name: 'Abs',
      visible:true,
      data: [
        
        [Date.UTC(1950, 1, 1), 1],
        [Date.UTC(1954, 1, 1), 1],
        [Date.UTC(1957, 1, 1), 1],
        [Date.UTC(1958, 1, 1), 2],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1962, 1, 1), 2],
        [Date.UTC(1963, 1, 1), 1],
        

      ]
    },
    {
      name: 'Acryl',
      visible:true,
      data: [
        
        [Date.UTC(1950, 1, 1), 7],
        [Date.UTC(1953, 1, 1), 4],
        [Date.UTC(1954, 1, 1), 3],
        [Date.UTC(1955, 1, 1), 3],
        [Date.UTC(1956, 1, 1), 4],
        [Date.UTC(1957, 1, 1), 1],
        [Date.UTC(1958, 1, 1), 14],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 10],
        [Date.UTC(1964, 1, 1), 6],
        [Date.UTC(1965, 1, 1), 3],
        
      ]
    },
    {
      name: 'Airbush',
      visible:true,
      data: [
        
        [Date.UTC(1954, 1, 1), 1],
        [Date.UTC(1965, 1, 1), 1],
        
      ]
    },
    {
      name: 'Aquatint',
      color:'orange',
      data: [
        
        [Date.UTC(1950, 1, 1), 69],
        [Date.UTC(1951, 1, 1), 16],
        [Date.UTC(1952, 1, 1), 55],
        [Date.UTC(1953, 1, 1), 110],
        [Date.UTC(1954, 1, 1), 35],
        [Date.UTC(1955, 1, 1), 30],
        [Date.UTC(1956, 1, 1), 107],
        [Date.UTC(1957, 1, 1), 43],
        [Date.UTC(1958, 1, 1), 92],
        [Date.UTC(1959, 1, 1), 16],
        [Date.UTC(1960, 1, 1), 341],
        [Date.UTC(1961, 1, 1), 99],
        [Date.UTC(1962, 1, 1), 87],
        [Date.UTC(1963, 1, 1), 118],
        [Date.UTC(1964, 1, 1), 210],
        [Date.UTC(1965, 1, 1), 103],
        
      ]
    },
    {
      name: 'Bronze',
      color: 'black',
      visible:true,
      data: [
        
        [Date.UTC(1950, 1, 1), 2],
        [Date.UTC(1953, 1, 1), 2],
        [Date.UTC(1954, 1, 1), 6],
        [Date.UTC(1955, 1, 1), 1],
        [Date.UTC(1956, 1, 1), 1],
        [Date.UTC(1957, 1, 1), 1],
        [Date.UTC(1958, 1, 1), 4],
        [Date.UTC(1959, 1, 1), 3],
        [Date.UTC(1960, 1, 1), 5],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 2],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 1],
        [Date.UTC(1965, 1, 1), 3],
        
      ]
    },
    {
      name: 'Carbon',
      visible:true,
      data: [
        
        [Date.UTC(1954, 1, 1), 1],
        [Date.UTC(1956, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 6],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 3],
        [Date.UTC(1963, 1, 1), 4],
        [Date.UTC(1964, 1, 1), 2],
        [Date.UTC(1965, 1, 1), 7],
        

      ]
    },
    {
      name: 'Glas',
      visible:true,
      data: [
        
        [Date.UTC(1950, 1, 1), 36],
        [Date.UTC(1951, 1, 1), 5],
        [Date.UTC(1952, 1, 1), 1],
        [Date.UTC(1953, 1, 1), 20],
        [Date.UTC(1954, 1, 1), 21],
        [Date.UTC(1955, 1, 1), 9],
        [Date.UTC(1956, 1, 1), 7],
        [Date.UTC(1957, 1, 1), 5],
        [Date.UTC(1958, 1, 1), 8],
        [Date.UTC(1959, 1, 1), 7],
        [Date.UTC(1960, 1, 1), 9],
        [Date.UTC(1961, 1, 1), 13],
        [Date.UTC(1962, 1, 1), 16],
        [Date.UTC(1963, 1, 1), 13],
        [Date.UTC(1964, 1, 1), 10],
        [Date.UTC(1965, 1, 1), 29],
        

      ]
    },
    {
      name: 'Mylar',
      visible:true,
      data: [
        
        [Date.UTC(1952, 1, 1), 6],
        [Date.UTC(1953, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1965, 1, 1), 4],
        
      ]
    },
    {
      name: 'Photomontage',
      color:'lightblue',
      data: [
        
        [Date.UTC(1959, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 1],
        

      ]
    },
    {
      name: 'Polyster',
      visible:true,
      data: [
        
        [Date.UTC(1950, 1, 1), 5],
        [Date.UTC(1953, 1, 1), 1],
        [Date.UTC(1958, 1, 1), 1],
        [Date.UTC(1959, 1, 1), 4],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1962, 1, 1), 1],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 1],
        [Date.UTC(1965, 1, 1), 3],
        
      ]
    },
    {
      name: 'Video',
      color: 'darkgreen',
      data: [
        
        [Date.UTC(1950, 1, 1), 72],
        [Date.UTC(1951, 1, 1), 25],
        [Date.UTC(1952, 1, 1), 10],
        [Date.UTC(1953, 1, 1), 28],
        [Date.UTC(1954, 1, 1), 13],
        [Date.UTC(1955, 1, 1), 14],
        [Date.UTC(1956, 1, 1), 20],
        [Date.UTC(1957, 1, 1), 73],
        [Date.UTC(1958, 1, 1), 55],
        [Date.UTC(1959, 1, 1), 17],
        [Date.UTC(1960, 1, 1), 37],
        [Date.UTC(1961, 1, 1), 14],
        [Date.UTC(1962, 1, 1), 55],
        [Date.UTC(1963, 1, 1), 23],
        [Date.UTC(1964, 1, 1), 15],
        [Date.UTC(1965, 1, 1), 18],
        [Date.UTC(1950, 1, 1), 1],
        [Date.UTC(1952, 1, 1), 1],
        [Date.UTC(1953, 1, 1), 1],
        [Date.UTC(1955, 1, 1), 1],
        [Date.UTC(1957, 1, 1), 24],
        [Date.UTC(1960, 1, 1), 26],
        [Date.UTC(1961, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 7],
        [Date.UTC(1965, 1, 1), 11],
        
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

Dadaismuss () {
  document.getElementById("text").innerHTML = ` Dadaismus oder Dada war eine künstlerische und literarische Bewegung, die 1916 von Hugo Ball, Emmy
  Hennings, Tristan Tzara, Richard Huelsenbeck, Marcel Janco und Hans Arp in Zürich begründet wurde und sich
  durch Ablehnung „konventioneller“ Kunst und Kunstformen – die oft parodiert wurden – und bürgerlicher Ideale
  auszeichnete. Vom Dada gingen erhebliche Impulse auf die Kunst der Moderne bis hin zur heutigen
  Zeitgenössischen Kunst aus. Im Wesentlichen war es eine Revolte gegen die Kunst von Seiten der Künstler
  selbst, die die Gesellschaft ihrer Zeit und deren Wertesystem ablehnten. Traditionelle Kunstformen wurden
  deshalb satirisch und übertrieben verwendet.
  `
  Highcharts.chart('secondChart', {
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
     text: 'Benutzte Materialien und Werkzeuge im Dadaismus'
   },
   subtitle: {
     text: document.ontouchstart === undefined ?
       'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
     enabled: true
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
         enabled: true
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
         enabled: true

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
        
        [Date.UTC(1916, 1, 1), 453],
        [Date.UTC(1917, 1, 1), 421],
        [Date.UTC(1918, 1, 1), 352],
        [Date.UTC(1919, 1, 1), 413],
        [Date.UTC(1920, 1, 1), 890],
        [Date.UTC(1920, 1, 1), 1],
        [Date.UTC(1921, 1, 1), 389],
        [Date.UTC(1922, 1, 1), 660],
        
      ]
    }, {
      name: 'Filztift',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Gelatinendruck',
      legendIndex:26,
      visible:true,
      data: [
        //    [Date.UTC(1927, 1, 1), 3],
        

      ]
    }, {
      name: 'Graphite',
      visible:true,
      data: [
        
        [Date.UTC(1916, 1, 1), 3],
        [Date.UTC(1918, 1, 1), 1],
        [Date.UTC(1919, 1, 1), 2],
        [Date.UTC(1920, 1, 1), 16],
        [Date.UTC(1921, 1, 1), 2],
        

      ]
    }, {
      name: 'Holz',
      color:'brown',
      data: [
        
        [Date.UTC(1916, 1, 1), 19],
        [Date.UTC(1917, 1, 1), 176],
        [Date.UTC(1918, 1, 1), 60],
        [Date.UTC(1919, 1, 1), 128],
        [Date.UTC(1920, 1, 1), 23],
        [Date.UTC(1921, 1, 1), 118],
        [Date.UTC(1922, 1, 1), 17],
        
      ]
    }, {
      name: 'Kugelschreiber',
      visible:true,
      data: [
        [Date.UTC(1921, 1, 1), 21],
        

      ]
    },
    {
      name: 'Öl',
      visible:true,
      data: [
        
        [Date.UTC(1916, 1, 1), 16],
        [Date.UTC(1917, 1, 1), 25],
        [Date.UTC(1918, 1, 1), 19],
        [Date.UTC(1919, 1, 1), 20],
        [Date.UTC(1920, 1, 1), 6],
        [Date.UTC(1921, 1, 1), 30],
        [Date.UTC(1922, 1, 1), 24],
        
      ]
    },
    {
      name: 'Papier',
      color:'yellow',
      data: [
        
        [Date.UTC(1916, 1, 1), 725],
        [Date.UTC(1917, 1, 1), 62],
        [Date.UTC(1918, 1, 1), 47],
        [Date.UTC(1919, 1, 1), 36],
        [Date.UTC(1920, 1, 1), 52],
        [Date.UTC(1921, 1, 1), 262],
        [Date.UTC(1922, 1, 1), 52],
        

      ]
    },
    {
      name: 'Pastel',
      visible:true,
      data: [
        
        [Date.UTC(1918, 1, 1), 1],
        [Date.UTC(1919, 1, 1), 1],
        [Date.UTC(1920, 1, 1), 1],
        [Date.UTC(1921, 1, 1), 4],
        [Date.UTC(1922, 1, 1), 1],
        

      ]
    },
    {
      name: 'Stahl',
      visible:true,
      data: [
        
        [Date.UTC(1917, 1, 1), 1],
        [Date.UTC(1919, 1, 1), 1],
        [Date.UTC(1920, 1, 1), 8],
        [Date.UTC(1921, 1, 1), 1],
        [Date.UTC(1922, 1, 1), 1],
        
      ]
    },
    {
      name: 'Stift',
      color:'violet',

      data: [
        
        [Date.UTC(1916, 1, 1), 746],
        [Date.UTC(1917, 1, 1), 21],
        [Date.UTC(1918, 1, 1), 18],
        [Date.UTC(1919, 1, 1), 18],
        [Date.UTC(1920, 1, 1), 18],
        [Date.UTC(1921, 1, 1), 125],
        [Date.UTC(1922, 1, 1), 29],
        

      ]
    },
    {
      name: 'Tinte',
      visible:true,
      data: [
        
        [Date.UTC(1916, 1, 1), 56],
        [Date.UTC(1917, 1, 1), 18],
        [Date.UTC(1918, 1, 1), 53],
        [Date.UTC(1919, 1, 1), 16],
        [Date.UTC(1920, 1, 1), 17],
        [Date.UTC(1921, 1, 1), 55],
        [Date.UTC(1922, 1, 1), 8],
        
      ]
    },
    {
      name: 'Visitenkarte',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Wasserfarben',
      visible:true,
      data: [
        
        [Date.UTC(1916, 1, 1), 16],
        [Date.UTC(1917, 1, 1), 19],
        [Date.UTC(1918, 1, 1), 37],
        [Date.UTC(1919, 1, 1), 17],
        [Date.UTC(1920, 1, 1), 13],
        [Date.UTC(1921, 1, 1), 188],
        [Date.UTC(1922, 1, 1), 37],
        
      ]
    },
    {
      name: 'Abs',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Acryl',
      visible:true,
      data: [
        
      ]
    },
    {
      name: 'Airbush',
      visible:true,
      data: [
        [Date.UTC(1920, 1, 1), 1],
        [Date.UTC(1922, 1, 1), 2],
        
      ]
    },
    {
      name: 'Aquatint',
      color:'orange',
      data: [
        
        [Date.UTC(1916, 1, 1), 25],
        [Date.UTC(1917, 1, 1), 148],
        [Date.UTC(1918, 1, 1), 79],
        [Date.UTC(1919, 1, 1), 129],
        [Date.UTC(1920, 1, 1), 10],
        [Date.UTC(1921, 1, 1), 16],
        [Date.UTC(1922, 1, 1), 57],
        
      ]
    },
    {
      name: 'Bronze',
      color: 'black',
      visible:true,
      data: [
        
        [Date.UTC(1916, 1, 1), 6],
        [Date.UTC(1917, 1, 1), 1],
        [Date.UTC(1919, 1, 1), 4],
        
      ]
    },
    {
      name: 'Carbon',
      visible:true,
      data: [
        
        [Date.UTC(1918, 1, 1), 1],
        [Date.UTC(1921, 1, 1), 5],
        

      ]
    },
    {
      name: 'Glas',
      visible:true,
      data: [
        
        [Date.UTC(1916, 1, 1), 1],
        [Date.UTC(1920, 1, 1), 7],
        [Date.UTC(1921, 1, 1), 5],
        

      ]
    },
    {
      name: 'Mylar',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Photomontage',
      color:'lightblue',
      data: [
        
        [Date.UTC(1916, 1, 1), 1],
        [Date.UTC(1920, 1, 1), 7],
        

      ]
    },
    {
      name: 'Polyster',
      visible:true,
      data: [
        
      ]
    },
    {
      name: 'Video',
      color: 'darkgreen',
      data: [
        
        [Date.UTC(1916, 1, 1), 2],
        [Date.UTC(1917, 1, 1), 4],
        [Date.UTC(1918, 1, 1), 1],
        [Date.UTC(1919, 1, 1), 4],
        [Date.UTC(1920, 1, 1), 4],
        [Date.UTC(1921, 1, 1), 1],
        
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

 Impressionismuss () {
  document.getElementById("text").innerHTML = ` Die Malerei des Impressionismus entstand aus einer Bewegung französischer Maler in der zweiten Hälfte des 19.
  Jahrhunderts. Der Impressionismus verbreitete sich weltweit und wurde vom Post-Impressionismus abgelöst. Im
  Impressionismus entstanden wesentliche Voraussetzungen für den neuen Charakter der Bildenden Kunst des 20.
  Jahrhunderts. In der Kunstgeschichte wird er unterschiedlich eingeordnet. Einige Kunsthistoriker bezeichnen ihn
  als Beginn der Moderne, andere wiederum als Ende der alten Epoche — wiederum andere als beides zugleich.[1]
  Die meisten impressionistischen Werke wurden unter freiem Himmel (plein-air) und in einer skizzenhaften Art
  gemalt, die es ermöglichte, die Reflexe des Lichts rasch einzufangen. Die Impressionisten bezogen eine zu den
  Klassizisten entgegengesetzte Position, da sie der Farbgebung und nicht der Linie deutlich mehr Beachtung
  schenkten.
  `
  Highcharts.chart('secondChart', {
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
      text: 'Benutzte Materialien im Impresionismuss'
    },
    subtitle: {
      text: document.ontouchstart === undefined ?
        'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
      enabled: true
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
          enabled: true
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
          enabled: true

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
          [Date.UTC(1881, 1, 1), 28],
          [Date.UTC(1882, 1, 1), 291],
          [Date.UTC(1883, 1, 1), 7],
          [Date.UTC(1884, 1, 1), 30],
          [Date.UTC(1885, 1, 1), 60],
          [Date.UTC(1886, 1, 1), 13],
          [Date.UTC(1887, 1, 1), 12],
          [Date.UTC(1888, 1, 1), 9],
          [Date.UTC(1889, 1, 1), 6],
          [Date.UTC(1890, 1, 1), 51],
          [Date.UTC(1891, 1, 1), 156],
          [Date.UTC(1892, 1, 1), 5027],
          [Date.UTC(1893, 1, 1), 106],
          [Date.UTC(1894, 1, 1), 22],
          [Date.UTC(1895, 1, 1), 98],
          [Date.UTC(1896, 1, 1), 40],
          [Date.UTC(1897, 1, 1), 26],
          [Date.UTC(1898, 1, 1), 138],
          [Date.UTC(1899, 1, 1), 75],
          [Date.UTC(1900, 1, 1), 267],
      

        ]
      }, {
        name: 'Filztift',
        
       
        data: [
         

        ]
      },
      {
        name: 'Gelatinendruck',
        
        legendIndex:26,
       
        data: [
          //    [Date.UTC(1927, 1, 1), 3],
       

        ]
      }, {
        name: 'Graphite',
        
        
        data: [
         
          [Date.UTC(1875, 1, 1), 2],
          [Date.UTC(1878, 1, 1), 3],
          [Date.UTC(1891, 1, 1), 1],
          [Date.UTC(1893, 1, 1), 1],
        

        ]
      }, {
        name: 'Holz',
        color:'brown',
        data: [
   
          [Date.UTC(1872, 1, 1), 1],
          [Date.UTC(1873, 1, 1), 1],
          [Date.UTC(1875, 1, 1), 26],
          [Date.UTC(1876, 1, 1), 2],
          [Date.UTC(1878, 1, 1), 47],
          [Date.UTC(1879, 1, 1), 38],
          [Date.UTC(1880, 1, 1), 3],
          [Date.UTC(1881, 1, 1), 41],
          [Date.UTC(1882, 1, 1), 2],
          [Date.UTC(1884, 1, 1), 1],
          [Date.UTC(1885, 1, 1), 1],
          [Date.UTC(1886, 1, 1), 2],
          [Date.UTC(1890, 1, 1), 26],
          [Date.UTC(1891, 1, 1), 5],
          [Date.UTC(1892, 1, 1), 2],
          [Date.UTC(1893, 1, 1), 52],
          [Date.UTC(1895, 1, 1), 50],
          [Date.UTC(1896, 1, 1), 2],
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 15],
          [Date.UTC(1900, 1, 1), 4],
        
        ]
      }, {
        name: 'Kugelschreiber',
        
       
        data: [
         

        ]
      },
      {
        name: 'Öl',
        
        
        data: [
          [Date.UTC(1871, 1, 1), 3],
          [Date.UTC(1872, 1, 1), 10],
          [Date.UTC(1875, 1, 1), 9],
          [Date.UTC(1877, 1, 1), 3],
          [Date.UTC(1878, 1, 1), 27],
          [Date.UTC(1882, 1, 1), 1],
          [Date.UTC(1883, 1, 1), 6],
          [Date.UTC(1890, 1, 1), 2],
          [Date.UTC(1891, 1, 1), 3],
          [Date.UTC(1895, 1, 1), 3],
          [Date.UTC(1897, 1, 1), 7],
          [Date.UTC(1898, 1, 1), 5],
          [Date.UTC(1899, 1, 1), 10],
          [Date.UTC(1900, 1, 1), 4],
         
        ]
      },
      {
        name: 'Papier',
        color:'yellow',
        data: [
    
          [Date.UTC(1870, 1, 1), 12],
          [Date.UTC(1872, 1, 1), 7],
          [Date.UTC(1873, 1, 1), 1],
          [Date.UTC(1875, 1, 1), 10],
          [Date.UTC(1876, 1, 1), 2],
          [Date.UTC(1877, 1, 1), 1],
          [Date.UTC(1878, 1, 1), 67],
          [Date.UTC(1879, 1, 1), 1],
          [Date.UTC(1883, 1, 1), 3],
          [Date.UTC(1884, 1, 1), 1],
          [Date.UTC(1885, 1, 1), 2],
          [Date.UTC(1890, 1, 1), 11],
          [Date.UTC(1891, 1, 1), 13],
          [Date.UTC(1892, 1, 1), 682],
          [Date.UTC(1893, 1, 1), 5],
          [Date.UTC(1894, 1, 1), 3],
          [Date.UTC(1895, 1, 1), 8],
          [Date.UTC(1896, 1, 1), 1],
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 4],
          [Date.UTC(1899, 1, 1), 24],
          [Date.UTC(1900, 1, 1), 34],
         

        ]
      },
      {
        name: 'Pastel',
      
        
        data: [
          [Date.UTC(1875, 1, 1), 1],
          [Date.UTC(1878, 1, 1), 14],
          [Date.UTC(1891, 1, 1), 1],
          [Date.UTC(1893, 1, 1), 1],
          [Date.UTC(1894, 1, 1), 1],
          [Date.UTC(1896, 1, 1), 1],
          [Date.UTC(1899, 1, 1), 1],
          [Date.UTC(1900, 1, 1), 2],
         
        ]
      },
      {
        name: 'Stahl',
        
     
        data: [
        
          [Date.UTC(1872, 1, 1), 1],
          [Date.UTC(1889, 1, 1), 1],
          [Date.UTC(1899, 1, 1), 1],
          [Date.UTC(1900, 1, 1), 2],
        

        ]
      },
      {
        name: 'Stift',
        color:'violet',

        data: [
         
          [Date.UTC(1872, 1, 1), 7],
          [Date.UTC(1875, 1, 1), 2],
          [Date.UTC(1878, 1, 1), 19],
          [Date.UTC(1885, 1, 1), 1],
          [Date.UTC(1890, 1, 1), 8],
          [Date.UTC(1891, 1, 1), 9],
          [Date.UTC(1892, 1, 1), 1],
          [Date.UTC(1893, 1, 1), 2],
          [Date.UTC(1895, 1, 1), 3],
          [Date.UTC(1896, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 4],
          [Date.UTC(1899, 1, 1), 9],
          [Date.UTC(1900, 1, 1), 6],
      

        ]
      },
      {
        name: 'Tinte',
        
     
        data: [
       
          [Date.UTC(1870, 1, 1), 2],
          [Date.UTC(1878, 1, 1), 5],
          [Date.UTC(1879, 1, 1), 1],
          [Date.UTC(1883, 1, 1), 1],
          [Date.UTC(1885, 1, 1), 2],
          [Date.UTC(1890, 1, 1), 3],
          [Date.UTC(1891, 1, 1), 3],
          [Date.UTC(1893, 1, 1), 3],
          [Date.UTC(1895, 1, 1), 2],
          [Date.UTC(1899, 1, 1), 9],
          [Date.UTC(1900, 1, 1), 17],
         
        ]
      },
      {
        name: 'Visitenkarte',
        
        
        data: [
       

        ]
      },
      {
        name: 'Wasserfarben',
       
        
        data: [

          [Date.UTC(1872, 1, 1), 6],
          [Date.UTC(1875, 1, 1), 1],
          [Date.UTC(1878, 1, 1), 12],
          [Date.UTC(1882, 1, 1), 3],
          [Date.UTC(1883, 1, 1), 1],
          [Date.UTC(1891, 1, 1), 2],
          [Date.UTC(1892, 1, 1), 1],
          [Date.UTC(1893, 1, 1), 6],
          [Date.UTC(1895, 1, 1), 4],
          [Date.UTC(1897, 1, 1), 2],
          [Date.UTC(1898, 1, 1), 5],
          [Date.UTC(1899, 1, 1), 8],
          [Date.UTC(1900, 1, 1), 21],
         
        ]
      },
      {
        name: 'Abs',
        
        
        data: [
        
        ]
      },
      {
        name: 'Acryl',
        
        
        data: [
          [Date.UTC(1880, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 1],
         
        ]
      },
      {
        name: 'Airbush',
        
        
        data: [
        
        ]
      },
      {
        name: 'Aquatint',
        color:'orange',
        data: [
        
          [Date.UTC(1870, 1, 1), 2],
          [Date.UTC(1872, 1, 1), 1],
          [Date.UTC(1875, 1, 1), 4],
          [Date.UTC(1878, 1, 1), 60],
          [Date.UTC(1882, 1, 1), 68],
          [Date.UTC(1885, 1, 1), 4],
          [Date.UTC(1886, 1, 1), 2],
          [Date.UTC(1888, 1, 1), 39],
          [Date.UTC(1891, 1, 1), 40],
          [Date.UTC(1892, 1, 1), 3],
          [Date.UTC(1893, 1, 1), 1],
          [Date.UTC(1895, 1, 1), 30],
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 5],
          [Date.UTC(1899, 1, 1), 2],
        
        ]
      },
      {
        name: 'Bronze',
        
    
        data: [
          [Date.UTC(1878, 1, 1), 14],
          [Date.UTC(1886, 1, 1), 1],
          [Date.UTC(1890, 1, 1), 10],
          [Date.UTC(1895, 1, 1), 2],
          [Date.UTC(1897, 1, 1), 2],
          [Date.UTC(1899, 1, 1), 2],
          [Date.UTC(1900, 1, 1), 2],
         
        ]
      },
      {
        name: 'Carbon',
        
        
        data: [

          [Date.UTC(1874, 1, 1), 1],
          [Date.UTC(1875, 1, 1), 4],
          [Date.UTC(1876, 1, 1), 1],
          [Date.UTC(1887, 1, 1), 1],
          [Date.UTC(1894, 1, 1), 2],
          [Date.UTC(1897, 1, 1), 1],
         

        ]
      },
      {
        name: 'Glas',
        
      
        data: [
          [Date.UTC(1870, 1, 1), 13],
          [Date.UTC(1871, 1, 1), 1],
          [Date.UTC(1872, 1, 1), 2],
          [Date.UTC(1873, 1, 1), 3],
          [Date.UTC(1874, 1, 1), 1],
          [Date.UTC(1875, 1, 1), 5],
          [Date.UTC(1876, 1, 1), 9],
          [Date.UTC(1878, 1, 1), 2],
          [Date.UTC(1880, 1, 1), 2],
          [Date.UTC(1881, 1, 1), 3],
          [Date.UTC(1886, 1, 1), 1],
          [Date.UTC(1887, 1, 1), 3],
          [Date.UTC(1888, 1, 1), 2],
          [Date.UTC(1889, 1, 1), 1],
          [Date.UTC(1890, 1, 1), 32],
          [Date.UTC(1892, 1, 1), 7],
          [Date.UTC(1893, 1, 1), 4],
          [Date.UTC(1894, 1, 1), 4],
          [Date.UTC(1895, 1, 1), 1],
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1900, 1, 1), 18],
         

        ]
      },
      {
        name: 'Mylar',
        
     
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
        
      
        data: [
        
        ]
      },
      {
        name: 'Video',
        color: 'darkgreen',
        data: [
         [Date.UTC(1870, 1, 1), 1],
         [Date.UTC(1884, 1, 1), 3],
         [Date.UTC(1891, 1, 1), 1],
         [Date.UTC(1897, 1, 1), 1],
         [Date.UTC(1899, 1, 1), 2],
       
        ]
      },
    ],
  
  
  
  
  } );
 }

 LandArt () {
  document.getElementById("text").innerHTML = ` Land Art, Projekt Hügel Zikkurat von Ed und Tomas Hoke sowie Armin Guerino im Kärntner Rosental Andy
  Goldsworthys sheepfold, Lake District, England Robert Smithson: Spiral Jetty Jacek Tylicki, Nature Nr.1, (von
  der Natur geschaffen), 4 Tage auf der Wiese in den Wald, südlich von Lund, Schweden, Aquarellpapier, 46 cm ×
  46 cm. 16.07 - 20.07 1973 Robert Smithson: Broken Circle and Spiral Hill, Emmen, Niederlande FlugRost:
  Malerei und Installation, transportable LandArt Kurt Fleckenstein See bei Milicz Land Art (so auch im
  Deutschen gebräuchlich) ist eine Ende der 1960er Jahre in den USA entstandene, 1968 im Rahmen einer
  Ausstellung in der Galerie von Virginia Dwan in New York erstmals als „Earth Works“ bezeichnete
  Kunstströmung der bildenden Kunst. Die vor allem in Deutschland gängige Bezeichnung „Land Art“ wurde
  1969 von dem deutschen Filmemacher und Fernsehgaleristen Gerry Schum in seiner ersten Fernsehausstellung
  Land Art (Ausstrahlung am 15. April 1969 im SFB) geprägt. Die Land Art gehörte – gemeinsam mit dem
  Minimalismus – zu den radikalsten künstlerischen Konzepten jener Zeit und ist noch gegenwärtig – auch in der
  Architektur und in der Landschaftsarchitektur – eine wichtige Inspirationsquelle. Selbst lehnten die Künstler
  allerdings Ende der 1960er Jahre jegliche Klassifizierung strikt ab und arbeiteten oft parallel in mehreren
  Kunstrichtungen.
  `
  Highcharts.chart('secondChart', {
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
     text: 'Benutzte Materialien im Kubismus'
   },
   subtitle: {
     text: document.ontouchstart === undefined ?
       'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
     enabled: true
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
         enabled: true
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
         enabled: true

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
        
        [Date.UTC(1958, 1, 1), 433],
        [Date.UTC(1959, 1, 1), 184],
        [Date.UTC(1960, 1, 1), 1284],
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1961, 1, 1), 619],
        [Date.UTC(1962, 1, 1), 645],
        [Date.UTC(1963, 1, 1), 821],
        [Date.UTC(1964, 1, 1), 1106],
        [Date.UTC(1965, 1, 1), 792],
        [Date.UTC(1966, 1, 1), 1239],
        [Date.UTC(1967, 1, 1), 1243],
        [Date.UTC(1968, 1, 1), 974],
        [Date.UTC(1969, 1, 1), 1203],
        [Date.UTC(1970, 1, 1), 623],
        [Date.UTC(1970, 1, 1), 2],
        

      ]
    }, {
      name: 'Filztift',
      data: [
        
        [Date.UTC(1958, 1, 1), 1],
        [Date.UTC(1959, 1, 1), 2],
        [Date.UTC(1967, 1, 1), 2],
        [Date.UTC(1968, 1, 1), 2],
        

      ]
    },
    {
      name: 'Gelatinendruck',
      legendIndex:26,
      data: [
        //    [Date.UTC(1927, 1, 1), 3],
        [Date.UTC(1968, 1, 1), 1],
        [Date.UTC(1969, 1, 1), 2],
        [Date.UTC(1970, 1, 1), 2],
        

      ]
    }, {
      name: 'Graphite',
      data: [
        
        [Date.UTC(1958, 1, 1), 1],
        [Date.UTC(1959, 1, 1), 12],
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 18],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 12],
        [Date.UTC(1965, 1, 1), 20],
        [Date.UTC(1966, 1, 1), 6],
        [Date.UTC(1967, 1, 1), 23],
        [Date.UTC(1968, 1, 1), 28],
        [Date.UTC(1969, 1, 1), 13],
        [Date.UTC(1970, 1, 1), 6],
        

      ]
    }, {
      name: 'Holz',
      color:'brown',
      data: [
        
        [Date.UTC(1958, 1, 1), 67],
        [Date.UTC(1959, 1, 1), 27],
        [Date.UTC(1960, 1, 1), 158],
        [Date.UTC(1961, 1, 1), 233],
        [Date.UTC(1962, 1, 1), 53],
        [Date.UTC(1963, 1, 1), 46],
        [Date.UTC(1964, 1, 1), 69],
        [Date.UTC(1965, 1, 1), 80],
        [Date.UTC(1966, 1, 1), 228],
        [Date.UTC(1967, 1, 1), 103],
        [Date.UTC(1968, 1, 1), 115],
        [Date.UTC(1969, 1, 1), 50],
        [Date.UTC(1970, 1, 1), 66],
        
      ]
    }, {
      name: 'Kugelschreiber',
      data: [
        
        [Date.UTC(1958, 1, 1), 9],
        [Date.UTC(1959, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 10],
        [Date.UTC(1961, 1, 1), 5],
        [Date.UTC(1962, 1, 1), 7],
        [Date.UTC(1963, 1, 1), 13],
        [Date.UTC(1964, 1, 1), 24],
        [Date.UTC(1965, 1, 1), 10],
        [Date.UTC(1966, 1, 1), 11],
        [Date.UTC(1967, 1, 1), 16],
        [Date.UTC(1968, 1, 1), 8],
        [Date.UTC(1969, 1, 1), 13],
        [Date.UTC(1970, 1, 1), 13],
        

      ]
    },
    {
      name: 'Öl',
      data: [
        
        [Date.UTC(1958, 1, 1), 27],
        [Date.UTC(1959, 1, 1), 23],
        [Date.UTC(1960, 1, 1), 29],
        [Date.UTC(1961, 1, 1), 27],
        [Date.UTC(1962, 1, 1), 30],
        [Date.UTC(1963, 1, 1), 23],
        [Date.UTC(1964, 1, 1), 35],
        [Date.UTC(1965, 1, 1), 22],
        [Date.UTC(1966, 1, 1), 37],
        [Date.UTC(1967, 1, 1), 34],
        [Date.UTC(1968, 1, 1), 12],
        [Date.UTC(1969, 1, 1), 47],
        [Date.UTC(1970, 1, 1), 9],
        
      ]
    },
    {
      name: 'Papier',
      color:'yellow',
      data: [
        
        [Date.UTC(1958, 1, 1), 90],
        [Date.UTC(1959, 1, 1), 60],
        [Date.UTC(1960, 1, 1), 170],
        [Date.UTC(1961, 1, 1), 87],
        [Date.UTC(1962, 1, 1), 193],
        [Date.UTC(1963, 1, 1), 200],
        [Date.UTC(1964, 1, 1), 391],
        [Date.UTC(1965, 1, 1), 180],
        [Date.UTC(1966, 1, 1), 348],
        [Date.UTC(1967, 1, 1), 550],
        [Date.UTC(1968, 1, 1), 228],
        [Date.UTC(1969, 1, 1), 281],
        [Date.UTC(1970, 1, 1), 194],
        [Date.UTC(1970, 1, 1), 1],
        

      ]
    },
    {
      name: 'Pastel',
      data: [
        
        [Date.UTC(1958, 1, 1), 2],
        [Date.UTC(1959, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1961, 1, 1), 2],
        [Date.UTC(1962, 1, 1), 9],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 10],
        [Date.UTC(1965, 1, 1), 5],
        [Date.UTC(1966, 1, 1), 8],
        [Date.UTC(1967, 1, 1), 15],
        [Date.UTC(1968, 1, 1), 3],
        [Date.UTC(1969, 1, 1), 5],
        [Date.UTC(1970, 1, 1), 4],
        

      ]
    },
    {
      name: 'Stahl',
      data: [
       
        [Date.UTC(1958, 1, 1), 15],
        [Date.UTC(1959, 1, 1), 6],
        [Date.UTC(1960, 1, 1), 36],
        [Date.UTC(1961, 1, 1), 14],
        [Date.UTC(1962, 1, 1), 13],
        [Date.UTC(1963, 1, 1), 12],
        [Date.UTC(1964, 1, 1), 21],
        [Date.UTC(1965, 1, 1), 21],
        [Date.UTC(1966, 1, 1), 20],
        [Date.UTC(1967, 1, 1), 7],
        [Date.UTC(1968, 1, 1), 21],
        [Date.UTC(1969, 1, 1), 16],
        [Date.UTC(1970, 1, 1), 11],
        

      ]
    },
    {
      name: 'Stift',
      color:'violet',

      data: [
        
        [Date.UTC(1958, 1, 1), 53],
        [Date.UTC(1959, 1, 1), 20],
        [Date.UTC(1960, 1, 1), 90],
        [Date.UTC(1961, 1, 1), 30],
        [Date.UTC(1962, 1, 1), 70],
        [Date.UTC(1963, 1, 1), 27],
        [Date.UTC(1964, 1, 1), 175],
        [Date.UTC(1965, 1, 1), 63],
        [Date.UTC(1966, 1, 1), 207],
        [Date.UTC(1967, 1, 1), 201],
        [Date.UTC(1968, 1, 1), 99],
        [Date.UTC(1969, 1, 1), 104],
        [Date.UTC(1970, 1, 1), 165],
        

      ]
    },
    {
      name: 'Tinte',
      data: [
        
        [Date.UTC(1958, 1, 1), 71],
        [Date.UTC(1959, 1, 1), 40],
        [Date.UTC(1960, 1, 1), 115],
        [Date.UTC(1961, 1, 1), 59],
        [Date.UTC(1962, 1, 1), 79],
        [Date.UTC(1963, 1, 1), 158],
        [Date.UTC(1964, 1, 1), 95],
        [Date.UTC(1965, 1, 1), 59],
        [Date.UTC(1966, 1, 1), 133],
        [Date.UTC(1967, 1, 1), 226],
        [Date.UTC(1968, 1, 1), 154],
        [Date.UTC(1969, 1, 1), 131],
        [Date.UTC(1970, 1, 1), 116],
        
      ]
    },
    {
      name: 'Visitenkarte',
      data: [
        
        [Date.UTC(1959, 1, 1), 8],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 15],
        [Date.UTC(1965, 1, 1), 19],
        [Date.UTC(1966, 1, 1), 12],
        [Date.UTC(1967, 1, 1), 93],
        [Date.UTC(1968, 1, 1), 14],
        [Date.UTC(1969, 1, 1), 6],
        [Date.UTC(1970, 1, 1), 2],
        

      ]
    },
    {
      name: 'Wasserfarben',
      data: [
        
        [Date.UTC(1958, 1, 1), 43],
        [Date.UTC(1959, 1, 1), 9],
        [Date.UTC(1960, 1, 1), 34],
        [Date.UTC(1961, 1, 1), 32],
        [Date.UTC(1962, 1, 1), 18],
        [Date.UTC(1963, 1, 1), 24],
        [Date.UTC(1964, 1, 1), 102],
        [Date.UTC(1965, 1, 1), 57],
        [Date.UTC(1966, 1, 1), 100],
        [Date.UTC(1967, 1, 1), 77],
        [Date.UTC(1968, 1, 1), 56],
        [Date.UTC(1969, 1, 1), 41],
        [Date.UTC(1970, 1, 1), 33],
        
      ]
    },
    {
      name: 'Abs',
      data: [
        
        [Date.UTC(1958, 1, 1), 2],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1962, 1, 1), 2],
        [Date.UTC(1963, 1, 1), 1],
        [Date.UTC(1966, 1, 1), 5],
        [Date.UTC(1967, 1, 1), 3],
        [Date.UTC(1968, 1, 1), 4],
        [Date.UTC(1969, 1, 1), 1],
        [Date.UTC(1970, 1, 1), 1],
        

      ]
    },
    {
      name: 'Acryl',
      data: [
        
        [Date.UTC(1958, 1, 1), 14],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 10],
        [Date.UTC(1964, 1, 1), 6],
        [Date.UTC(1965, 1, 1), 3],
        [Date.UTC(1966, 1, 1), 10],
        [Date.UTC(1967, 1, 1), 7],
        [Date.UTC(1968, 1, 1), 12],
        [Date.UTC(1969, 1, 1), 8],
        [Date.UTC(1970, 1, 1), 7],
        
      ]
    },
    {
      name: 'Airbush',
      data: [
        
        [Date.UTC(1965, 1, 1), 1],
        [Date.UTC(1966, 1, 1), 1],
        [Date.UTC(1968, 1, 1), 4],
        [Date.UTC(1969, 1, 1), 1],
        [Date.UTC(1970, 1, 1), 1],
        
      ]
    },
    {
      name: 'Aquatint',
      color:'orange',
      data: [
       
        [Date.UTC(1958, 1, 1), 92],
        [Date.UTC(1959, 1, 1), 16],
        [Date.UTC(1960, 1, 1), 341],
        [Date.UTC(1961, 1, 1), 99],
        [Date.UTC(1962, 1, 1), 87],
        [Date.UTC(1963, 1, 1), 118],
        [Date.UTC(1964, 1, 1), 210],
        [Date.UTC(1965, 1, 1), 103],
        [Date.UTC(1966, 1, 1), 196],
        [Date.UTC(1967, 1, 1), 519],
        [Date.UTC(1968, 1, 1), 134],
        [Date.UTC(1969, 1, 1), 101],
        [Date.UTC(1970, 1, 1), 113],
        
      ]
    },
    {
      name: 'Bronze',
      color: 'black',
      data: [
        
        [Date.UTC(1958, 1, 1), 4],
        [Date.UTC(1959, 1, 1), 3],
        [Date.UTC(1960, 1, 1), 5],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 2],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 1],
        [Date.UTC(1965, 1, 1), 3],
        [Date.UTC(1966, 1, 1), 1],
        [Date.UTC(1967, 1, 1), 2],
        [Date.UTC(1968, 1, 1), 2],
        [Date.UTC(1969, 1, 1), 4],
        [Date.UTC(1970, 1, 1), 4],
        
      ]
    },
    {
      name: 'Carbon',
      data: [
        
        [Date.UTC(1960, 1, 1), 6],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 3],
        [Date.UTC(1963, 1, 1), 4],
        [Date.UTC(1964, 1, 1), 2],
        [Date.UTC(1965, 1, 1), 7],
        [Date.UTC(1966, 1, 1), 1],
        [Date.UTC(1967, 1, 1), 1],
        [Date.UTC(1968, 1, 1), 2],
        [Date.UTC(1970, 1, 1), 4],
        

      ]
    },
    {
      name: 'Glas',
      data: [
        
        [Date.UTC(1958, 1, 1), 8],
        [Date.UTC(1959, 1, 1), 7],
        [Date.UTC(1960, 1, 1), 9],
        [Date.UTC(1961, 1, 1), 13],
        [Date.UTC(1962, 1, 1), 16],
        [Date.UTC(1963, 1, 1), 13],
        [Date.UTC(1964, 1, 1), 10],
        [Date.UTC(1965, 1, 1), 29],
        [Date.UTC(1966, 1, 1), 34],
        [Date.UTC(1967, 1, 1), 21],
        [Date.UTC(1968, 1, 1), 20],
        [Date.UTC(1969, 1, 1), 25],
        [Date.UTC(1970, 1, 1), 10],
        

      ]
    },
    {
      name: 'Mylar',
      data: [
        
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1965, 1, 1), 4],
        [Date.UTC(1966, 1, 1), 3],
        [Date.UTC(1968, 1, 1), 3],
        [Date.UTC(1969, 1, 1), 1],
        [Date.UTC(1970, 1, 1), 1],
        

      ]
    },
    {
      name: 'Photomontage',
      color:'lightblue',
      data: [
        
        [Date.UTC(1959, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1966, 1, 1), 1],
        [Date.UTC(1967, 1, 1), 21],
        [Date.UTC(1968, 1, 1), 1],
        

      ]
    },
    {
      name: 'Polyster',
      data: [
        
        [Date.UTC(1958, 1, 1), 1],
        [Date.UTC(1959, 1, 1), 4],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1962, 1, 1), 1],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 1],
        [Date.UTC(1965, 1, 1), 3],
        [Date.UTC(1966, 1, 1), 2],
        [Date.UTC(1967, 1, 1), 4],
        [Date.UTC(1968, 1, 1), 3],
        [Date.UTC(1969, 1, 1), 3],
        [Date.UTC(1970, 1, 1), 3],
        
      ]
    },
    {
      name: 'Video',
      color: 'darkgreen',
      data: [
        
        [Date.UTC(1958, 1, 1), 55],
        [Date.UTC(1959, 1, 1), 17],
        [Date.UTC(1960, 1, 1), 37],
        [Date.UTC(1961, 1, 1), 14],
        [Date.UTC(1962, 1, 1), 55],
        [Date.UTC(1963, 1, 1), 23],
        [Date.UTC(1964, 1, 1), 15],
        [Date.UTC(1965, 1, 1), 18],
        [Date.UTC(1966, 1, 1), 54],
        [Date.UTC(1967, 1, 1), 34],
        [Date.UTC(1968, 1, 1), 90],
        [Date.UTC(1969, 1, 1), 44],
        [Date.UTC(1970, 1, 1), 66],
        [Date.UTC(1960, 1, 1), 26],
        [Date.UTC(1961, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 7],
        [Date.UTC(1965, 1, 1), 11],
        [Date.UTC(1966, 1, 1), 41],
        [Date.UTC(1967, 1, 1), 20],
        [Date.UTC(1968, 1, 1), 26],
        [Date.UTC(1969, 1, 1), 30],
        [Date.UTC(1970, 1, 1), 46],
        
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
   Realismus () {
     
    document.getElementById("text").innerHTML = ` Gustave Courbet: Die Steineklopfer (1849) Realismus (von lateinisch realis ‚die Sache betreffend‘; res: „Sache,
      Ding“) bezeichnet in der Kunstgeschichte eine Mitte des 19. Jahrhunderts in Europa einsetzende neue
      Kunstauffassung, die sich gegen Darstellungen des Klassizismus und der Romantik wandte. Die Aneignung der
      Wirklichkeit durch den Künstler und ihre darauffolgende Transformation in ein Kunstwerk sowie ihre politische
      Konnotation sind charakteristisch für den Realismus. Sie propagiert Alltäglichkeit und Sachlichkeit. Ihr
      bekanntester Vertreter war der französische Maler Gustave Courbet (1819–1877), welcher sich den damals noch
      sehr unscharf und ungenau definierten Begriff der realistischen Kunst aneignete und ihn wegen seiner
      provokanten Wirkung für seine Kunst verwandte. Die Inhalte seiner Werke wirkten prägend auf den Begriff
      „Realismus“. Hauptanliegen Courbets war es, aus der Kenntnis der (künstlerischen) Tradition und seiner eigenen
      Individualität schöpfend, lebendige Kunst zu schaffen. Der Begriff Realismus wird streng kontextbezogen
      verwendet und ist daher sinnvariabel. Schwierigkeiten bei der Verwendung der Begriffe „realistisch“ und
      „Realismus“ ergeben sich aus ihrer Doppeldeutigkeit. Zum einen bezeichnet dieser kunstgeschichtliche
      Terminus eine Kunstströmung des 19. Jahrhunderts, welche sich dem Alltag sowie der Gesellschaft widmete und
      dabei politisch motiviert war, weshalb gesellschaftliche Verhältnisse sowie deren Widersprüche und Konflikte
      häufig Themen realistischer Bilder sind. Zum anderen kann der allgemeinen Wortbedeutung folgend als
      „realistisch“ bezeichnet werden, was dem dargestellten Gegenstand, Thema oder der Idee äußerst nahekommt.
      Es kann dem Schein nach für wahr gehalten werden. „Realistische“ Tendenzen können demnach schon in
      früheren Kunstwerken beobachtet werden. So wurde z. B. Albrecht Dürers Aquarell Junger Feldhase (1502) in
      seiner Darstellung als so „wahrscheinlich“, so lebensecht empfunden, dass man ihn für real und lebendig halten
      konnte. Dieses Beispiel soll verdeutlichen, dass eine lebensgetreue Darstellung kein Garant für ein realistisches
      Bild im Sinne der kunsthistorischen Definition ist. Hinzu kommt, dass in jeder künstlerischen Form des
      Ausdrucks Bezug auf die Realität genommen wird. Diese Bezugnahme geschieht unterschiedlich und grenzt so
      u. a. die einzelnen Strömungen des Realismus wie Neuer Realismus, Phantastischer Realismus oder
      Fotorealismus voneinander ab. Allein die Darstellung der Realität, so wie der Künstler sie sieht bzw. zeigen will,
      ist demnach nicht maßgebend, um Kunst dem „Realismus“ zuzuordnen.
    `
   Highcharts.chart('secondChart', {
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
      text: 'Benutzte Materialien im Realismus'
    },
    subtitle: {
      text: document.ontouchstart === undefined ?
        'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
      enabled: true
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
          enabled: true
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
          enabled: true

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


        data: [
          

        ]
      },
      {
        name: 'Gelatinendruck',

        legendIndex:26,

        data: [
          //    [Date.UTC(1927, 1, 1), 3],
          

        ]
      }, {
        name: 'Graphite',


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


        data: [
          

        ]
      },
      {
        name: 'Öl',


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


        data: [
          [Date.UTC(1875, 1, 1), 1],
          [Date.UTC(1878, 1, 1), 14],
          

        ]
      },
      {
        name: 'Stahl',


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


        data: [
          
          [Date.UTC(1866, 1, 1), 1],
          [Date.UTC(1870, 1, 1), 2],
          [Date.UTC(1878, 1, 1), 5],
          [Date.UTC(1879, 1, 1), 1],
          
        ]
      },
      {
        name: 'Visitenkarte',


        data: [
          

        ]
      },
      {
        name: 'Wasserfarben',


        data: [
          
          [Date.UTC(1868, 1, 1), 1],
          [Date.UTC(1872, 1, 1), 6],
          [Date.UTC(1875, 1, 1), 1],
          [Date.UTC(1878, 1, 1), 12],
          
        ]
      },
      {
        name: 'Abs',


        data: [
          

        ]
      },
      {
        name: 'Acryl',


        data: [
          [Date.UTC(1880, 1, 1), 1],
          
        ]
      },
      {
        name: 'Airbush',


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

        data: [
          [Date.UTC(1878, 1, 1), 14],
          
        ]
      },
      {
        name: 'Carbon',


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

 PopArt () {
  document.getElementById("text").innerHTML = ` Pop Art ist eine Kunstrichtung, vor allem in der Malerei und Skulptur, die Mitte der 1950er Jahre unabhängig
  voneinander in England und den USA entstand, und in den 1960er Jahren zu einer vorherrschenden
  künstlerischen Ausdrucksform Nordamerikas und Europas wurde. Die Motive sind häufig der Alltagskultur, der
  Welt des Konsums, den Massenmedien und der Werbung entnommen, wobei die Darstellung in fotorealistischer
  und meist überdimensionierter Abbildung erfolgt.
  `
  Highcharts.chart('secondChart', {
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
     text: 'Benutzte Materialien im Popart'
   },
   subtitle: {
     text: document.ontouchstart === undefined ?
       'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
     enabled: true
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
         enabled: true
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
         enabled: true

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
        
        [Date.UTC(1958, 1, 1), 433],
        [Date.UTC(1959, 1, 1), 184],
        [Date.UTC(1960, 1, 1), 1284],
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1961, 1, 1), 619],
        [Date.UTC(1962, 1, 1), 645],
        [Date.UTC(1963, 1, 1), 821],
        [Date.UTC(1964, 1, 1), 1106],
        [Date.UTC(1965, 1, 1), 792],
        [Date.UTC(1966, 1, 1), 1239],
        [Date.UTC(1967, 1, 1), 1243],
        [Date.UTC(1968, 1, 1), 974],
        [Date.UTC(1969, 1, 1), 1203],
        [Date.UTC(1970, 1, 1), 623],
        [Date.UTC(1970, 1, 1), 2],
        

      ]
    }, {
      name: 'Filztift',
      data: [
        
        [Date.UTC(1958, 1, 1), 1],
        [Date.UTC(1959, 1, 1), 2],
        [Date.UTC(1967, 1, 1), 2],
        [Date.UTC(1968, 1, 1), 2],
        

      ]
    },
    {
      name: 'Gelatinendruck',
      legendIndex:26,
      data: [
        //    [Date.UTC(1927, 1, 1), 3],
        [Date.UTC(1968, 1, 1), 1],
        [Date.UTC(1969, 1, 1), 2],
        [Date.UTC(1970, 1, 1), 2],
        

      ]
    }, {
      name: 'Graphite',
      data: [
        
        [Date.UTC(1958, 1, 1), 1],
        [Date.UTC(1959, 1, 1), 12],
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 18],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 12],
        [Date.UTC(1965, 1, 1), 20],
        [Date.UTC(1966, 1, 1), 6],
        [Date.UTC(1967, 1, 1), 23],
        [Date.UTC(1968, 1, 1), 28],
        [Date.UTC(1969, 1, 1), 13],
        [Date.UTC(1970, 1, 1), 6],
        

      ]
    }, {
      name: 'Holz',
      color:'brown',
      data: [
        
        [Date.UTC(1958, 1, 1), 67],
        [Date.UTC(1959, 1, 1), 27],
        [Date.UTC(1960, 1, 1), 158],
        [Date.UTC(1961, 1, 1), 233],
        [Date.UTC(1962, 1, 1), 53],
        [Date.UTC(1963, 1, 1), 46],
        [Date.UTC(1964, 1, 1), 69],
        [Date.UTC(1965, 1, 1), 80],
        [Date.UTC(1966, 1, 1), 228],
        [Date.UTC(1967, 1, 1), 103],
        [Date.UTC(1968, 1, 1), 115],
        [Date.UTC(1969, 1, 1), 50],
        [Date.UTC(1970, 1, 1), 66],
        
      ]
    }, {
      name: 'Kugelschreiber',
      data: [
        
        [Date.UTC(1958, 1, 1), 9],
        [Date.UTC(1959, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 10],
        [Date.UTC(1961, 1, 1), 5],
        [Date.UTC(1962, 1, 1), 7],
        [Date.UTC(1963, 1, 1), 13],
        [Date.UTC(1964, 1, 1), 24],
        [Date.UTC(1965, 1, 1), 10],
        [Date.UTC(1966, 1, 1), 11],
        [Date.UTC(1967, 1, 1), 16],
        [Date.UTC(1968, 1, 1), 8],
        [Date.UTC(1969, 1, 1), 13],
        [Date.UTC(1970, 1, 1), 13],
        

      ]
    },
    {
      name: 'Öl',
      data: [
        
        [Date.UTC(1958, 1, 1), 27],
        [Date.UTC(1959, 1, 1), 23],
        [Date.UTC(1960, 1, 1), 29],
        [Date.UTC(1961, 1, 1), 27],
        [Date.UTC(1962, 1, 1), 30],
        [Date.UTC(1963, 1, 1), 23],
        [Date.UTC(1964, 1, 1), 35],
        [Date.UTC(1965, 1, 1), 22],
        [Date.UTC(1966, 1, 1), 37],
        [Date.UTC(1967, 1, 1), 34],
        [Date.UTC(1968, 1, 1), 12],
        [Date.UTC(1969, 1, 1), 47],
        [Date.UTC(1970, 1, 1), 9],
        
      ]
    },
    {
      name: 'Papier',
      color:'yellow',
      data: [
        
        [Date.UTC(1958, 1, 1), 90],
        [Date.UTC(1959, 1, 1), 60],
        [Date.UTC(1960, 1, 1), 170],
        [Date.UTC(1961, 1, 1), 87],
        [Date.UTC(1962, 1, 1), 193],
        [Date.UTC(1963, 1, 1), 200],
        [Date.UTC(1964, 1, 1), 391],
        [Date.UTC(1965, 1, 1), 180],
        [Date.UTC(1966, 1, 1), 348],
        [Date.UTC(1967, 1, 1), 550],
        [Date.UTC(1968, 1, 1), 228],
        [Date.UTC(1969, 1, 1), 281],
        [Date.UTC(1970, 1, 1), 194],
        [Date.UTC(1970, 1, 1), 1],
        

      ]
    },
    {
      name: 'Pastel',
      data: [
        
        [Date.UTC(1958, 1, 1), 2],
        [Date.UTC(1959, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1961, 1, 1), 2],
        [Date.UTC(1962, 1, 1), 9],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 10],
        [Date.UTC(1965, 1, 1), 5],
        [Date.UTC(1966, 1, 1), 8],
        [Date.UTC(1967, 1, 1), 15],
        [Date.UTC(1968, 1, 1), 3],
        [Date.UTC(1969, 1, 1), 5],
        [Date.UTC(1970, 1, 1), 4],
        

      ]
    },
    {
      name: 'Stahl',
      data: [
       
        [Date.UTC(1958, 1, 1), 15],
        [Date.UTC(1959, 1, 1), 6],
        [Date.UTC(1960, 1, 1), 36],
        [Date.UTC(1961, 1, 1), 14],
        [Date.UTC(1962, 1, 1), 13],
        [Date.UTC(1963, 1, 1), 12],
        [Date.UTC(1964, 1, 1), 21],
        [Date.UTC(1965, 1, 1), 21],
        [Date.UTC(1966, 1, 1), 20],
        [Date.UTC(1967, 1, 1), 7],
        [Date.UTC(1968, 1, 1), 21],
        [Date.UTC(1969, 1, 1), 16],
        [Date.UTC(1970, 1, 1), 11],
        

      ]
    },
    {
      name: 'Stift',
      color:'violet',

      data: [
        
        [Date.UTC(1958, 1, 1), 53],
        [Date.UTC(1959, 1, 1), 20],
        [Date.UTC(1960, 1, 1), 90],
        [Date.UTC(1961, 1, 1), 30],
        [Date.UTC(1962, 1, 1), 70],
        [Date.UTC(1963, 1, 1), 27],
        [Date.UTC(1964, 1, 1), 175],
        [Date.UTC(1965, 1, 1), 63],
        [Date.UTC(1966, 1, 1), 207],
        [Date.UTC(1967, 1, 1), 201],
        [Date.UTC(1968, 1, 1), 99],
        [Date.UTC(1969, 1, 1), 104],
        [Date.UTC(1970, 1, 1), 165],
        

      ]
    },
    {
      name: 'Tinte',
      data: [
        
        [Date.UTC(1958, 1, 1), 71],
        [Date.UTC(1959, 1, 1), 40],
        [Date.UTC(1960, 1, 1), 115],
        [Date.UTC(1961, 1, 1), 59],
        [Date.UTC(1962, 1, 1), 79],
        [Date.UTC(1963, 1, 1), 158],
        [Date.UTC(1964, 1, 1), 95],
        [Date.UTC(1965, 1, 1), 59],
        [Date.UTC(1966, 1, 1), 133],
        [Date.UTC(1967, 1, 1), 226],
        [Date.UTC(1968, 1, 1), 154],
        [Date.UTC(1969, 1, 1), 131],
        [Date.UTC(1970, 1, 1), 116],
        
      ]
    },
    {
      name: 'Visitenkarte',
      data: [
        
        [Date.UTC(1959, 1, 1), 8],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 15],
        [Date.UTC(1965, 1, 1), 19],
        [Date.UTC(1966, 1, 1), 12],
        [Date.UTC(1967, 1, 1), 93],
        [Date.UTC(1968, 1, 1), 14],
        [Date.UTC(1969, 1, 1), 6],
        [Date.UTC(1970, 1, 1), 2],
        

      ]
    },
    {
      name: 'Wasserfarben',
      data: [
        
        [Date.UTC(1958, 1, 1), 43],
        [Date.UTC(1959, 1, 1), 9],
        [Date.UTC(1960, 1, 1), 34],
        [Date.UTC(1961, 1, 1), 32],
        [Date.UTC(1962, 1, 1), 18],
        [Date.UTC(1963, 1, 1), 24],
        [Date.UTC(1964, 1, 1), 102],
        [Date.UTC(1965, 1, 1), 57],
        [Date.UTC(1966, 1, 1), 100],
        [Date.UTC(1967, 1, 1), 77],
        [Date.UTC(1968, 1, 1), 56],
        [Date.UTC(1969, 1, 1), 41],
        [Date.UTC(1970, 1, 1), 33],
        
      ]
    },
    {
      name: 'Abs',
      data: [
        
        [Date.UTC(1958, 1, 1), 2],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1962, 1, 1), 2],
        [Date.UTC(1963, 1, 1), 1],
        [Date.UTC(1966, 1, 1), 5],
        [Date.UTC(1967, 1, 1), 3],
        [Date.UTC(1968, 1, 1), 4],
        [Date.UTC(1969, 1, 1), 1],
        [Date.UTC(1970, 1, 1), 1],
        

      ]
    },
    {
      name: 'Acryl',
      data: [
        
        [Date.UTC(1958, 1, 1), 14],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 10],
        [Date.UTC(1964, 1, 1), 6],
        [Date.UTC(1965, 1, 1), 3],
        [Date.UTC(1966, 1, 1), 10],
        [Date.UTC(1967, 1, 1), 7],
        [Date.UTC(1968, 1, 1), 12],
        [Date.UTC(1969, 1, 1), 8],
        [Date.UTC(1970, 1, 1), 7],
        
      ]
    },
    {
      name: 'Airbush',
      data: [
        
        [Date.UTC(1965, 1, 1), 1],
        [Date.UTC(1966, 1, 1), 1],
        [Date.UTC(1968, 1, 1), 4],
        [Date.UTC(1969, 1, 1), 1],
        [Date.UTC(1970, 1, 1), 1],
        
      ]
    },
    {
      name: 'Aquatint',
      color:'orange',
      data: [
       
        [Date.UTC(1958, 1, 1), 92],
        [Date.UTC(1959, 1, 1), 16],
        [Date.UTC(1960, 1, 1), 341],
        [Date.UTC(1961, 1, 1), 99],
        [Date.UTC(1962, 1, 1), 87],
        [Date.UTC(1963, 1, 1), 118],
        [Date.UTC(1964, 1, 1), 210],
        [Date.UTC(1965, 1, 1), 103],
        [Date.UTC(1966, 1, 1), 196],
        [Date.UTC(1967, 1, 1), 519],
        [Date.UTC(1968, 1, 1), 134],
        [Date.UTC(1969, 1, 1), 101],
        [Date.UTC(1970, 1, 1), 113],
        
      ]
    },
    {
      name: 'Bronze',
      color: 'black',
      data: [
        
        [Date.UTC(1958, 1, 1), 4],
        [Date.UTC(1959, 1, 1), 3],
        [Date.UTC(1960, 1, 1), 5],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 2],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 1],
        [Date.UTC(1965, 1, 1), 3],
        [Date.UTC(1966, 1, 1), 1],
        [Date.UTC(1967, 1, 1), 2],
        [Date.UTC(1968, 1, 1), 2],
        [Date.UTC(1969, 1, 1), 4],
        [Date.UTC(1970, 1, 1), 4],
        
      ]
    },
    {
      name: 'Carbon',
      data: [
        
        [Date.UTC(1960, 1, 1), 6],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 3],
        [Date.UTC(1963, 1, 1), 4],
        [Date.UTC(1964, 1, 1), 2],
        [Date.UTC(1965, 1, 1), 7],
        [Date.UTC(1966, 1, 1), 1],
        [Date.UTC(1967, 1, 1), 1],
        [Date.UTC(1968, 1, 1), 2],
        [Date.UTC(1970, 1, 1), 4],
        

      ]
    },
    {
      name: 'Glas',
      data: [
        
        [Date.UTC(1958, 1, 1), 8],
        [Date.UTC(1959, 1, 1), 7],
        [Date.UTC(1960, 1, 1), 9],
        [Date.UTC(1961, 1, 1), 13],
        [Date.UTC(1962, 1, 1), 16],
        [Date.UTC(1963, 1, 1), 13],
        [Date.UTC(1964, 1, 1), 10],
        [Date.UTC(1965, 1, 1), 29],
        [Date.UTC(1966, 1, 1), 34],
        [Date.UTC(1967, 1, 1), 21],
        [Date.UTC(1968, 1, 1), 20],
        [Date.UTC(1969, 1, 1), 25],
        [Date.UTC(1970, 1, 1), 10],
        

      ]
    },
    {
      name: 'Mylar',
      data: [
        
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1965, 1, 1), 4],
        [Date.UTC(1966, 1, 1), 3],
        [Date.UTC(1968, 1, 1), 3],
        [Date.UTC(1969, 1, 1), 1],
        [Date.UTC(1970, 1, 1), 1],
        

      ]
    },
    {
      name: 'Photomontage',
      color:'lightblue',
      data: [
        
        [Date.UTC(1959, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1966, 1, 1), 1],
        [Date.UTC(1967, 1, 1), 21],
        [Date.UTC(1968, 1, 1), 1],
        

      ]
    },
    {
      name: 'Polyster',
      data: [
        
        [Date.UTC(1958, 1, 1), 1],
        [Date.UTC(1959, 1, 1), 4],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1962, 1, 1), 1],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 1],
        [Date.UTC(1965, 1, 1), 3],
        [Date.UTC(1966, 1, 1), 2],
        [Date.UTC(1967, 1, 1), 4],
        [Date.UTC(1968, 1, 1), 3],
        [Date.UTC(1969, 1, 1), 3],
        [Date.UTC(1970, 1, 1), 3],
        
      ]
    },
    {
      name: 'Video',
      color: 'darkgreen',
      data: [
        
        [Date.UTC(1958, 1, 1), 55],
        [Date.UTC(1959, 1, 1), 17],
        [Date.UTC(1960, 1, 1), 37],
        [Date.UTC(1961, 1, 1), 14],
        [Date.UTC(1962, 1, 1), 55],
        [Date.UTC(1963, 1, 1), 23],
        [Date.UTC(1964, 1, 1), 15],
        [Date.UTC(1965, 1, 1), 18],
        [Date.UTC(1966, 1, 1), 54],
        [Date.UTC(1967, 1, 1), 34],
        [Date.UTC(1968, 1, 1), 90],
        [Date.UTC(1969, 1, 1), 44],
        [Date.UTC(1970, 1, 1), 66],
        [Date.UTC(1960, 1, 1), 26],
        [Date.UTC(1961, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 7],
        [Date.UTC(1965, 1, 1), 11],
        [Date.UTC(1966, 1, 1), 41],
        [Date.UTC(1967, 1, 1), 20],
        [Date.UTC(1968, 1, 1), 26],
        [Date.UTC(1969, 1, 1), 30],
        [Date.UTC(1970, 1, 1), 46],
        
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

Bauhaus () {
  document.getElementById("text").innerHTML = ` Das Staatliche Bauhaus wurde 1919 von Walter Gropius in Weimar als Kunstschule gegründet. Nach Art und
  Konzeption war es damals etwas völlig Neues, da das Bauhaus eine Zusammenführung von Kunst und
  Handwerk darstellte. Das historische Bauhaus stellt heute die einflussreichste Bildungsstätte im Bereich der
  Architektur, der Kunst und des Designs im 20. Jahrhundert dar. Das Bauhaus bestand von 1919 bis 1925 und gilt
  heute weltweit als Heimstätte der Avantgarde der Klassischen Moderne auf allen Gebieten der freien und
  angewandten Kunst und Architektur. Die Resonanz des Bauhauses hält bis heute an und prägt wesentlich das
  Bild modernistischer Strömungen.
  `
  Highcharts.chart('secondChart', {
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
     text: 'Benutzte Materialien im Bauhaus'
   },
   subtitle: {
     text: document.ontouchstart === undefined ?
       'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
     enabled: true
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
         enabled: true
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
         enabled: true

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
        
        [Date.UTC(1920, 1, 1), 890],
        [Date.UTC(1920, 1, 1), 1],
        [Date.UTC(1921, 1, 1), 389],
        [Date.UTC(1922, 1, 1), 660],
        [Date.UTC(1923, 1, 1), 168],
        [Date.UTC(1924, 1, 1), 250],
        [Date.UTC(1925, 1, 1), 200],
        

      ]
    }, {
      name: 'Filztift',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Gelatinendruck',
      legendIndex:26,
      visible:true,
      data: [
        //    [Date.UTC(1927, 1, 1), 3],
        

      ]
    }, {
      name: 'Graphite',
      visible:true,
      data: [
        
        [Date.UTC(1920, 1, 1), 16],
        [Date.UTC(1921, 1, 1), 2],
        [Date.UTC(1923, 1, 1), 1],
        [Date.UTC(1925, 1, 1), 2],
        

      ]
    }, {
      name: 'Holz',
      color:'brown',
      data: [
        
        [Date.UTC(1920, 1, 1), 23],
        [Date.UTC(1921, 1, 1), 118],
        [Date.UTC(1922, 1, 1), 17],
        [Date.UTC(1923, 1, 1), 75],
        [Date.UTC(1924, 1, 1), 8],
        [Date.UTC(1925, 1, 1), 43],
        
      ]
    }, {
      name: 'Kugelschreiber',
      visible:true,
      data: [
        [Date.UTC(1921, 1, 1), 21],
        [Date.UTC(1926, 1, 1), 1],
        

      ]
    },
    {
      name: 'Öl',
      visible:true,
      data: [
        
        [Date.UTC(1920, 1, 1), 6],
        [Date.UTC(1921, 1, 1), 30],
        [Date.UTC(1922, 1, 1), 24],
        [Date.UTC(1923, 1, 1), 13],
        [Date.UTC(1924, 1, 1), 15],
        [Date.UTC(1925, 1, 1), 22],
        
      ]
    },
    {
      name: 'Papier',
      color:'yellow',
      data: [
        
        [Date.UTC(1920, 1, 1), 52],
        [Date.UTC(1921, 1, 1), 262],
        [Date.UTC(1922, 1, 1), 52],
        [Date.UTC(1923, 1, 1), 95],
        [Date.UTC(1924, 1, 1), 19],
        [Date.UTC(1925, 1, 1), 72],
        

      ]
    },
    {
      name: 'Pastel',
      visible:true,
      data: [
        
        [Date.UTC(1920, 1, 1), 1],
        [Date.UTC(1921, 1, 1), 4],
        [Date.UTC(1922, 1, 1), 1],
        [Date.UTC(1924, 1, 1), 1],
        [Date.UTC(1925, 1, 1), 1],
        

      ]
    },
    {
      name: 'Stahl',
      visible:true,
      data: [
        
        [Date.UTC(1920, 1, 1), 8],
        [Date.UTC(1921, 1, 1), 1],
        [Date.UTC(1922, 1, 1), 1],
        [Date.UTC(1923, 1, 1), 1],
        [Date.UTC(1924, 1, 1), 1],
        

      ]
    },
    {
      name: 'Stift',
      color:'violet',

      data: [
        
        [Date.UTC(1920, 1, 1), 18],
        [Date.UTC(1921, 1, 1), 125],
        [Date.UTC(1922, 1, 1), 29],
        [Date.UTC(1923, 1, 1), 16],
        [Date.UTC(1924, 1, 1), 11],
        [Date.UTC(1925, 1, 1), 33],
        

      ]
    },
    {
      name: 'Tinte',
      visible:true,
      data: [
        
        [Date.UTC(1920, 1, 1), 17],
        [Date.UTC(1921, 1, 1), 55],
        [Date.UTC(1922, 1, 1), 8],
        [Date.UTC(1923, 1, 1), 72],
        [Date.UTC(1925, 1, 1), 31],
        
      ]
    },
    {
      name: 'Visitenkarte',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Wasserfarben',
      visible:true,
      data: [
        
        [Date.UTC(1920, 1, 1), 13],
        [Date.UTC(1921, 1, 1), 188],
        [Date.UTC(1922, 1, 1), 37],
        [Date.UTC(1923, 1, 1), 70],
        [Date.UTC(1924, 1, 1), 11],
        [Date.UTC(1925, 1, 1), 12],
        
      ]
    },
    {
      name: 'Abs',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Acryl',
      visible:true,
      data: [
       
      ]
    },
    {
      name: 'Airbush',
      visible:true,
      data: [
        [Date.UTC(1920, 1, 1), 1],
        [Date.UTC(1922, 1, 1), 2],
        [Date.UTC(1923, 1, 1), 1],
        
      ]
    },
    {
      name: 'Aquatint',
      color:'orange',
      data: [
        
        [Date.UTC(1920, 1, 1), 10],
        [Date.UTC(1921, 1, 1), 16],
        [Date.UTC(1922, 1, 1), 57],
        [Date.UTC(1923, 1, 1), 45],
        [Date.UTC(1924, 1, 1), 12],
        [Date.UTC(1925, 1, 1), 24],
        
      ]
    },
    {
      name: 'Bronze',
      color: 'black',
      visible:true,
      data: [
        
        [Date.UTC(1924, 1, 1), 2],
        [Date.UTC(1925, 1, 1), 4],
        
      ]
    },
    {
      name: 'Carbon',
      visible:true,
      data: [
        
        [Date.UTC(1921, 1, 1), 5],
        [Date.UTC(1923, 1, 1), 1],
       

      ]
    },
    {
      name: 'Glas',
      visible:true,
      data: [
        
        [Date.UTC(1920, 1, 1), 7],
        [Date.UTC(1921, 1, 1), 5],
        [Date.UTC(1923, 1, 1), 1],
        [Date.UTC(1925, 1, 1), 2],
        

      ]
    },
    {
      name: 'Mylar',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Photomontage',
      color:'lightblue',
      data: [
        
        [Date.UTC(1920, 1, 1), 7],
        [Date.UTC(1923, 1, 1), 18],
        [Date.UTC(1924, 1, 1), 2],
        [Date.UTC(1925, 1, 1), 1],
        

      ]
    },
    {
      name: 'Polyster',
      visible:true,
      data: [
        
      ]
    },
    {
      name: 'Video',
      color: 'darkgreen',
      data: [
        
        [Date.UTC(1920, 1, 1), 4],
        [Date.UTC(1921, 1, 1), 1],
        [Date.UTC(1923, 1, 1), 5],
        [Date.UTC(1924, 1, 1), 5],
        [Date.UTC(1925, 1, 1), 3],
        
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

NeoExpressionismus () {
  document.getElementById("text").innerHTML = ` Neoexpressionismus (gr. neo=neu, lat. expressio=Ausdruck) ist eine Stilrichtung in der Bildenden Kunst, die
  sich durch eine figürliche Malerei von expressiver Farbigkeit auszeichnet. Der Neoexpressionismus entstand
  Anfang der 1960er Jahre in Abkehr zum vorherrschenden Informel. Maßgeblich an der Entstehung beteiligt
  waren in Deutschland Meisterschüler der Kunstschulen in Ost- und West-Berlin wie Georg Baselitz und Eugen
  Schönebeck.
  `
  Highcharts.chart('secondChart', {
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
     text: 'Benutzte Materialien im NeoExpressionismus'
   },
   subtitle: {
     text: document.ontouchstart === undefined ?
       'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
     enabled: true
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
         enabled: true
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
         enabled: true

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
       
        [Date.UTC(1978, 1, 1), 447],
        [Date.UTC(1979, 1, 1), 774],
        [Date.UTC(1980, 1, 1), 551],
        [Date.UTC(1981, 1, 1), 445],
        [Date.UTC(1982, 1, 1), 390],
        [Date.UTC(1983, 1, 1), 326],
        [Date.UTC(1984, 1, 1), 324],
        [Date.UTC(1985, 1, 1), 400],
        [Date.UTC(1986, 1, 1), 306],
        [Date.UTC(1987, 1, 1), 242],
        [Date.UTC(1988, 1, 1), 372],
        [Date.UTC(1989, 1, 1), 324],
        [Date.UTC(1990, 1, 1), 303],
        [Date.UTC(1991, 1, 1), 387],
        [Date.UTC(1992, 1, 1), 251],
        [Date.UTC(1993, 1, 1), 206],
        [Date.UTC(1994, 1, 1), 334],
        [Date.UTC(1995, 1, 1), 271],
        [Date.UTC(1996, 1, 1), 257],
        [Date.UTC(1997, 1, 1), 243],
        [Date.UTC(1998, 1, 1), 254],
        [Date.UTC(1999, 1, 1), 216],
        [Date.UTC(2000, 1, 1), 263],
        [Date.UTC(2001, 1, 1), 304],
        [Date.UTC(2002, 1, 1), 221],
        [Date.UTC(2003, 1, 1), 306],
        [Date.UTC(2004, 1, 1), 336],
        [Date.UTC(2005, 1, 1), 207],
        [Date.UTC(2006, 1, 1), 253],
        [Date.UTC(2007, 1, 1), 236],
        [Date.UTC(2008, 1, 1), 203],
        [Date.UTC(2009, 1, 1), 223],
        [Date.UTC(2010, 1, 1), 227],
        [Date.UTC(2011, 1, 1), 248],
        [Date.UTC(2012, 1, 1), 238],
        [Date.UTC(2013, 1, 1), 246],
        [Date.UTC(2014, 1, 1), 75],
        [Date.UTC(2015, 1, 1), 87],
        [Date.UTC(2016, 1, 1), 36],
        [Date.UTC(2017, 1, 1), 79]

      ]
    }, {
      name: 'Filztift',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 2],
        [Date.UTC(1980, 1, 1), 1],
        [Date.UTC(1981, 1, 1), 1],
        [Date.UTC(1982, 1, 1), 1],
        [Date.UTC(1983, 1, 1), 1],
        [Date.UTC(1987, 1, 1), 1],
        [Date.UTC(1992, 1, 1), 2],
        [Date.UTC(1994, 1, 1), 1],
        [Date.UTC(2002, 1, 1), 1],
        [Date.UTC(2005, 1, 1), 3],
        [Date.UTC(2010, 1, 1), 5],
        [Date.UTC(2011, 1, 1), 1],
        [Date.UTC(2012, 1, 1), 1],
        [Date.UTC(2015, 1, 1), 9]

      ]
    },
    {
      name: 'Gelatinendruck',
      legendIndex:26,
      visible:true,
      data: [
        //    [Date.UTC(1927, 1, 1), 3],
        
        [Date.UTC(1979, 1, 1), 1],
        [Date.UTC(1980, 1, 1), 13],
        [Date.UTC(1986, 1, 1), 1],

      ]
    }, {
      name: 'Graphite',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 3],
        [Date.UTC(1979, 1, 1), 13],
        [Date.UTC(1980, 1, 1), 5],
        [Date.UTC(1981, 1, 1), 10],
        [Date.UTC(1982, 1, 1), 10],
        [Date.UTC(1983, 1, 1), 5],
        [Date.UTC(1984, 1, 1), 6],
        [Date.UTC(1985, 1, 1), 14],
        [Date.UTC(1986, 1, 1), 7],
        [Date.UTC(1987, 1, 1), 4],
        [Date.UTC(1988, 1, 1), 3],
        [Date.UTC(1989, 1, 1), 10],
        [Date.UTC(1991, 1, 1), 6],
        [Date.UTC(1992, 1, 1), 7],
        [Date.UTC(1993, 1, 1), 5],
        [Date.UTC(1994, 1, 1), 2],
        [Date.UTC(1996, 1, 1), 4],
        [Date.UTC(1997, 1, 1), 4],
        [Date.UTC(1998, 1, 1), 37],
        [Date.UTC(1999, 1, 1), 50],
        [Date.UTC(2000, 1, 1), 11],
        [Date.UTC(2001, 1, 1), 22],
        [Date.UTC(2002, 1, 1), 17],
        [Date.UTC(2003, 1, 1), 8],
        [Date.UTC(2004, 1, 1), 6],
        [Date.UTC(2006, 1, 1), 1],
        [Date.UTC(2007, 1, 1), 5],
        [Date.UTC(2009, 1, 1), 3],
        [Date.UTC(2010, 1, 1), 29],
        [Date.UTC(2013, 1, 1), 2],
        [Date.UTC(2014, 1, 1), 1],
        [Date.UTC(2016, 1, 1), 4],

      ]
    }, {
      name: 'Holz',
      color:'brown',
      data: [
        
        [Date.UTC(1978, 1, 1), 12],
        [Date.UTC(1979, 1, 1), 14],
        [Date.UTC(1980, 1, 1), 20],
        [Date.UTC(1981, 1, 1), 20],
        [Date.UTC(1982, 1, 1), 28],
        [Date.UTC(1983, 1, 1), 32],
        [Date.UTC(1984, 1, 1), 73],
        [Date.UTC(1985, 1, 1), 27],
        [Date.UTC(1986, 1, 1), 30],
        [Date.UTC(1987, 1, 1), 30],
        [Date.UTC(1988, 1, 1), 27],
        [Date.UTC(1989, 1, 1), 22],
        [Date.UTC(1990, 1, 1), 61],
        [Date.UTC(1991, 1, 1), 29],
        [Date.UTC(1992, 1, 1), 22],
        [Date.UTC(1993, 1, 1), 28],
        [Date.UTC(1994, 1, 1), 35],
        [Date.UTC(1995, 1, 1), 13],
        [Date.UTC(1996, 1, 1), 12],
        [Date.UTC(1997, 1, 1), 17],
        [Date.UTC(1998, 1, 1), 19],
        [Date.UTC(1999, 1, 1), 50],
        [Date.UTC(2000, 1, 1), 58],
        [Date.UTC(2001, 1, 1), 16],
        [Date.UTC(2002, 1, 1), 26],
        [Date.UTC(2003, 1, 1), 36],
        [Date.UTC(2004, 1, 1), 13],
        [Date.UTC(2005, 1, 1), 51],
        [Date.UTC(2006, 1, 1), 23],
        [Date.UTC(2007, 1, 1), 57],
        [Date.UTC(2008, 1, 1), 45],
        [Date.UTC(2009, 1, 1), 11],
        [Date.UTC(2010, 1, 1), 7],
        [Date.UTC(2011, 1, 1), 23],
        [Date.UTC(2012, 1, 1), 31],
        [Date.UTC(2013, 1, 1), 16],
        [Date.UTC(2014, 1, 1), 9],
        [Date.UTC(2015, 1, 1), 36],
        [Date.UTC(2016, 1, 1), 3],
        [Date.UTC(2017, 1, 1), 2],
      ]
    }, {
      name: 'Kugelschreiber',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 3],
        [Date.UTC(1979, 1, 1), 9],
        [Date.UTC(1980, 1, 1), 5],
        [Date.UTC(1981, 1, 1), 5],
        [Date.UTC(1982, 1, 1), 3],
        [Date.UTC(1984, 1, 1), 2],
        [Date.UTC(1985, 1, 1), 3],
        [Date.UTC(1986, 1, 1), 3],
        [Date.UTC(1987, 1, 1), 11],
        [Date.UTC(1988, 1, 1), 2],
        [Date.UTC(1991, 1, 1), 1],
        [Date.UTC(1992, 1, 1), 34],
        [Date.UTC(1993, 1, 1), 3],
        [Date.UTC(1994, 1, 1), 2],
        [Date.UTC(1995, 1, 1), 2],
        [Date.UTC(1996, 1, 1), 3],
        [Date.UTC(1997, 1, 1), 5],
        [Date.UTC(1998, 1, 1), 13],
        [Date.UTC(1999, 1, 1), 5],
        [Date.UTC(2000, 1, 1), 3],
        [Date.UTC(2001, 1, 1), 16],
        [Date.UTC(2002, 1, 1), 33],
        [Date.UTC(2003, 1, 1), 68],
        [Date.UTC(2004, 1, 1), 27],
        [Date.UTC(2005, 1, 1), 1],
        [Date.UTC(2006, 1, 1), 5],
        [Date.UTC(2007, 1, 1), 4],
        [Date.UTC(2008, 1, 1), 2],
        [Date.UTC(2010, 1, 1), 1],
        [Date.UTC(2013, 1, 1), 1],

      ]
    },
    {
      name: 'Öl',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 5],
        [Date.UTC(1979, 1, 1), 9],
        [Date.UTC(1980, 1, 1), 8],
        [Date.UTC(1981, 1, 1), 17],
        [Date.UTC(1982, 1, 1), 8],
        [Date.UTC(1983, 1, 1), 7],
        [Date.UTC(1984, 1, 1), 13],
        [Date.UTC(1985, 1, 1), 19],
        [Date.UTC(1986, 1, 1), 8],
        [Date.UTC(1987, 1, 1), 13],
        [Date.UTC(1988, 1, 1), 11],
        [Date.UTC(1989, 1, 1), 10],
        [Date.UTC(1990, 1, 1), 7],
        [Date.UTC(1991, 1, 1), 12],
        [Date.UTC(1992, 1, 1), 11],
        [Date.UTC(1993, 1, 1), 10],
        [Date.UTC(1994, 1, 1), 9],
        [Date.UTC(1995, 1, 1), 12],
        [Date.UTC(1996, 1, 1), 10],
        [Date.UTC(1997, 1, 1), 11],
        [Date.UTC(1998, 1, 1), 5],
        [Date.UTC(1999, 1, 1), 10],
        [Date.UTC(2000, 1, 1), 9],
        [Date.UTC(2001, 1, 1), 16],
        [Date.UTC(2002, 1, 1), 18],
        [Date.UTC(2003, 1, 1), 56],
        [Date.UTC(2004, 1, 1), 40],
        [Date.UTC(2005, 1, 1), 15],
        [Date.UTC(2006, 1, 1), 6],
        [Date.UTC(2007, 1, 1), 8],
        [Date.UTC(2008, 1, 1), 6],
        [Date.UTC(2009, 1, 1), 7],
        [Date.UTC(2010, 1, 1), 11],
        [Date.UTC(2011, 1, 1), 6],
        [Date.UTC(2012, 1, 1), 4],
        [Date.UTC(2013, 1, 1), 10],
        [Date.UTC(2014, 1, 1), 5],
        [Date.UTC(2015, 1, 1), 7],
        [Date.UTC(2017, 1, 1), 1],
      ]
    },
    {
      name: 'Papier',
      color:'yellow',
      data: [
        
        [Date.UTC(1978, 1, 1), 150],
        [Date.UTC(1979, 1, 1), 96],
        [Date.UTC(1980, 1, 1), 116],
        [Date.UTC(1981, 1, 1), 74],
        [Date.UTC(1982, 1, 1), 153],
        [Date.UTC(1983, 1, 1), 129],
        [Date.UTC(1984, 1, 1), 129],
        [Date.UTC(1985, 1, 1), 85],
        [Date.UTC(1986, 1, 1), 98],
        [Date.UTC(1987, 1, 1), 134],
        [Date.UTC(1988, 1, 1), 68],
        [Date.UTC(1989, 1, 1), 80],
        [Date.UTC(1990, 1, 1), 75],
        [Date.UTC(1991, 1, 1), 87],
        [Date.UTC(1992, 1, 1), 191],
        [Date.UTC(1993, 1, 1), 77],
        [Date.UTC(1994, 1, 1), 104],
        [Date.UTC(1995, 1, 1), 127],
        [Date.UTC(1996, 1, 1), 104],
        [Date.UTC(1997, 1, 1), 97],
        [Date.UTC(1998, 1, 1), 162],
        [Date.UTC(1999, 1, 1), 171],
        [Date.UTC(2000, 1, 1), 151],
        [Date.UTC(2001, 1, 1), 325],
        [Date.UTC(2002, 1, 1), 304],
        [Date.UTC(2003, 1, 1), 738],
        [Date.UTC(2004, 1, 1), 315],
        [Date.UTC(2005, 1, 1), 91],
        [Date.UTC(2006, 1, 1), 41],
        [Date.UTC(2007, 1, 1), 54],
        [Date.UTC(2008, 1, 1), 102],
        [Date.UTC(2009, 1, 1), 45],
        [Date.UTC(2010, 1, 1), 48],
        [Date.UTC(2011, 1, 1), 54],
        [Date.UTC(2012, 1, 1), 56],
        [Date.UTC(2013, 1, 1), 34],
        [Date.UTC(2014, 1, 1), 35],
        [Date.UTC(2015, 1, 1), 57],
        [Date.UTC(2016, 1, 1), 125],
        [Date.UTC(2017, 1, 1), 10],

      ]
    },
    {
      name: 'Pastel',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 7],
        [Date.UTC(1979, 1, 1), 2],
        [Date.UTC(1980, 1, 1), 9],
        [Date.UTC(1981, 1, 1), 9],
        [Date.UTC(1982, 1, 1), 2],
        [Date.UTC(1983, 1, 1), 3],
        [Date.UTC(1984, 1, 1), 5],
        [Date.UTC(1985, 1, 1), 4],
        [Date.UTC(1986, 1, 1), 4],
        [Date.UTC(1987, 1, 1), 9],
        [Date.UTC(1988, 1, 1), 3],
        [Date.UTC(1989, 1, 1), 1],
        [Date.UTC(1990, 1, 1), 2],
        [Date.UTC(1991, 1, 1), 4],
        [Date.UTC(1993, 1, 1), 1],
        [Date.UTC(1996, 1, 1), 5],
        [Date.UTC(1998, 1, 1), 4],
        [Date.UTC(1999, 1, 1), 2],
        [Date.UTC(2000, 1, 1), 5],
        [Date.UTC(2001, 1, 1), 5],
        [Date.UTC(2002, 1, 1), 7],
        [Date.UTC(2003, 1, 1), 10],
        [Date.UTC(2004, 1, 1), 7],
        [Date.UTC(2005, 1, 1), 3],
        [Date.UTC(2008, 1, 1), 1],
        [Date.UTC(2009, 1, 1), 1],
        [Date.UTC(2011, 1, 1), 1],
        [Date.UTC(2013, 1, 1), 1],
        [Date.UTC(2014, 1, 1), 2],
        [Date.UTC(2015, 1, 1), 1],
        [Date.UTC(2016, 1, 1), 110],

      ]
    },
    {
      name: 'Stahl',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 14],
        [Date.UTC(1979, 1, 1), 6],
        [Date.UTC(1980, 1, 1), 16],
        [Date.UTC(1981, 1, 1), 8],
        [Date.UTC(1982, 1, 1), 4],
        [Date.UTC(1983, 1, 1), 7],
        [Date.UTC(1984, 1, 1), 6],
        [Date.UTC(1985, 1, 1), 3],
        [Date.UTC(1986, 1, 1), 8],
        [Date.UTC(1987, 1, 1), 9],
        [Date.UTC(1988, 1, 1), 10],
        [Date.UTC(1989, 1, 1), 7],
        [Date.UTC(1990, 1, 1), 2],
        [Date.UTC(1991, 1, 1), 11],
        [Date.UTC(1992, 1, 1), 10],
        [Date.UTC(1993, 1, 1), 12],
        [Date.UTC(1994, 1, 1), 12],
        [Date.UTC(1995, 1, 1), 2],
        [Date.UTC(1996, 1, 1), 9],
        [Date.UTC(1997, 1, 1), 8],
        [Date.UTC(1998, 1, 1), 5],
        [Date.UTC(1999, 1, 1), 5],
        [Date.UTC(2000, 1, 1), 7],
        [Date.UTC(2001, 1, 1), 9],
        [Date.UTC(2002, 1, 1), 9],
        [Date.UTC(2003, 1, 1), 7],
        [Date.UTC(2004, 1, 1), 5],
        [Date.UTC(2005, 1, 1), 3],
        [Date.UTC(2006, 1, 1), 8],
        [Date.UTC(2007, 1, 1), 15],
        [Date.UTC(2008, 1, 1), 4],
        [Date.UTC(2009, 1, 1), 4],
        [Date.UTC(2010, 1, 1), 3],
        [Date.UTC(2011, 1, 1), 2],
        [Date.UTC(2012, 1, 1), 14],
        [Date.UTC(2013, 1, 1), 5],
        [Date.UTC(2015, 1, 1), 3],
        [Date.UTC(2016, 1, 1), 1],
        [Date.UTC(2017, 1, 1), 1],

      ]
    },
    {
      name: 'Stift',
      color:'violet',

      data: [
        
        [Date.UTC(1978, 1, 1), 36],
        [Date.UTC(1979, 1, 1), 34],
        [Date.UTC(1980, 1, 1), 56],
        [Date.UTC(1981, 1, 1), 45],
        [Date.UTC(1982, 1, 1), 34],
        [Date.UTC(1983, 1, 1), 29],
        [Date.UTC(1984, 1, 1), 76],
        [Date.UTC(1985, 1, 1), 54],
        [Date.UTC(1986, 1, 1), 13],
        [Date.UTC(1987, 1, 1), 44],
        [Date.UTC(1988, 1, 1), 24],
        [Date.UTC(1989, 1, 1), 25],
        [Date.UTC(1990, 1, 1), 32],
        [Date.UTC(1991, 1, 1), 34],
        [Date.UTC(1992, 1, 1), 106],
        [Date.UTC(1993, 1, 1), 21],
        [Date.UTC(1994, 1, 1), 48],
        [Date.UTC(1995, 1, 1), 20],
        [Date.UTC(1996, 1, 1), 29],
        [Date.UTC(1997, 1, 1), 43],
        [Date.UTC(1998, 1, 1), 68],
        [Date.UTC(1999, 1, 1), 61],
        [Date.UTC(2000, 1, 1), 76],
        [Date.UTC(2001, 1, 1), 173],
        [Date.UTC(2002, 1, 1), 162],
        [Date.UTC(2003, 1, 1), 350],
        [Date.UTC(2004, 1, 1), 146],
        [Date.UTC(2005, 1, 1), 73],
        [Date.UTC(2006, 1, 1), 19],
        [Date.UTC(2007, 1, 1), 20],
        [Date.UTC(2008, 1, 1), 36],
        [Date.UTC(2009, 1, 1), 21],
        [Date.UTC(2010, 1, 1), 42],
        [Date.UTC(2011, 1, 1), 30],
        [Date.UTC(2012, 1, 1), 13],
        [Date.UTC(2013, 1, 1), 9],
        [Date.UTC(2014, 1, 1), 19],
        [Date.UTC(2015, 1, 1), 47],
        [Date.UTC(2016, 1, 1), 112],
        [Date.UTC(2017, 1, 1), 3],

      ]
    },
    {
      name: 'Tinte',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 60],
        [Date.UTC(1979, 1, 1), 29],
        [Date.UTC(1980, 1, 1), 73],
        [Date.UTC(1981, 1, 1), 84],
        [Date.UTC(1982, 1, 1), 46],
        [Date.UTC(1983, 1, 1), 55],
        [Date.UTC(1984, 1, 1), 38],
        [Date.UTC(1985, 1, 1), 64],
        [Date.UTC(1986, 1, 1), 41],
        [Date.UTC(1987, 1, 1), 43],
        [Date.UTC(1988, 1, 1), 22],
        [Date.UTC(1989, 1, 1), 27],
        [Date.UTC(1990, 1, 1), 29],
        [Date.UTC(1991, 1, 1), 40],
        [Date.UTC(1992, 1, 1), 50],
        [Date.UTC(1993, 1, 1), 22],
        [Date.UTC(1994, 1, 1), 55],
        [Date.UTC(1995, 1, 1), 83],
        [Date.UTC(1996, 1, 1), 36],
        [Date.UTC(1997, 1, 1), 45],
        [Date.UTC(1998, 1, 1), 67],
        [Date.UTC(1999, 1, 1), 66],
        [Date.UTC(2000, 1, 1), 69],
        [Date.UTC(2001, 1, 1), 117],
        [Date.UTC(2002, 1, 1), 107],
        [Date.UTC(2003, 1, 1), 238],
        [Date.UTC(2004, 1, 1), 114],
        [Date.UTC(2005, 1, 1), 109],
        [Date.UTC(2006, 1, 1), 36],
        [Date.UTC(2007, 1, 1), 129],
        [Date.UTC(2008, 1, 1), 62],
        [Date.UTC(2009, 1, 1), 27],
        [Date.UTC(2010, 1, 1), 64],
        [Date.UTC(2011, 1, 1), 58],
        [Date.UTC(2012, 1, 1), 68],
        [Date.UTC(2013, 1, 1), 168],
        [Date.UTC(2014, 1, 1), 28],
        [Date.UTC(2015, 1, 1), 44],
        [Date.UTC(2016, 1, 1), 9],
        [Date.UTC(2017, 1, 1), 3],
      ]
    },
    {
      name: 'Visitenkarte',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 3],
        [Date.UTC(1979, 1, 1), 4],
        [Date.UTC(1980, 1, 1), 1],
        [Date.UTC(1982, 1, 1), 2],
        [Date.UTC(1985, 1, 1), 1],
        [Date.UTC(1987, 1, 1), 1],
        [Date.UTC(1988, 1, 1), 1],
        [Date.UTC(1995, 1, 1), 1],
        [Date.UTC(1997, 1, 1), 1],
        [Date.UTC(2004, 1, 1), 1],
        [Date.UTC(2007, 1, 1), 1],
        [Date.UTC(2015, 1, 1), 1],

      ]
    },
    {
      name: 'Wasserfarben',
      visible:true,
      data: [
        
        [Date.UTC(1977, 1, 1), 78],
        [Date.UTC(1978, 1, 1), 54],
        [Date.UTC(1979, 1, 1), 27],
        [Date.UTC(1980, 1, 1), 19],
        [Date.UTC(1981, 1, 1), 29],
        [Date.UTC(1982, 1, 1), 80],
        [Date.UTC(1983, 1, 1), 26],
        [Date.UTC(1984, 1, 1), 65],
        [Date.UTC(1985, 1, 1), 22],
        [Date.UTC(1986, 1, 1), 24],
        [Date.UTC(1987, 1, 1), 41],
        [Date.UTC(1988, 1, 1), 16],
        [Date.UTC(1989, 1, 1), 11],
        [Date.UTC(1990, 1, 1), 12],
        [Date.UTC(1991, 1, 1), 9],
        [Date.UTC(1992, 1, 1), 15],
        [Date.UTC(1993, 1, 1), 10],
        [Date.UTC(1994, 1, 1), 18],
        [Date.UTC(1995, 1, 1), 15],
        [Date.UTC(1996, 1, 1), 27],
        [Date.UTC(1997, 1, 1), 35],
        [Date.UTC(1998, 1, 1), 31],
        [Date.UTC(1999, 1, 1), 23],
        [Date.UTC(2000, 1, 1), 27],
        [Date.UTC(2001, 1, 1), 70],
        [Date.UTC(2002, 1, 1), 84],
        [Date.UTC(2003, 1, 1), 231],
        [Date.UTC(2004, 1, 1), 90],
        [Date.UTC(2005, 1, 1), 8],
        [Date.UTC(2006, 1, 1), 4],
        [Date.UTC(2007, 1, 1), 8],
        [Date.UTC(2008, 1, 1), 9],
        [Date.UTC(2009, 1, 1), 4],
        [Date.UTC(2010, 1, 1), 4],
        [Date.UTC(2011, 1, 1), 12],
        [Date.UTC(2012, 1, 1), 4],
        [Date.UTC(2013, 1, 1), 5],
        [Date.UTC(2014, 1, 1), 4],
        [Date.UTC(2015, 1, 1), 1],
        [Date.UTC(2016, 1, 1), 1],
        [Date.UTC(2017, 1, 1), 1],
      ]
    },
    {
      name: 'Abs',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 5],
        [Date.UTC(1979, 1, 1), 1],
        [Date.UTC(1980, 1, 1), 2],
        [Date.UTC(1981, 1, 1), 2],
        [Date.UTC(1982, 1, 1), 1],
        [Date.UTC(1983, 1, 1), 3],
        [Date.UTC(1984, 1, 1), 2],
        [Date.UTC(1985, 1, 1), 2],
        [Date.UTC(1986, 1, 1), 3],
        [Date.UTC(1988, 1, 1), 2],
        [Date.UTC(1989, 1, 1), 8],
        [Date.UTC(1991, 1, 1), 2],
        [Date.UTC(1992, 1, 1), 6],
        [Date.UTC(1993, 1, 1), 4],
        [Date.UTC(1994, 1, 1), 5],
        [Date.UTC(1995, 1, 1), 1],
        [Date.UTC(1996, 1, 1), 9],
        [Date.UTC(1997, 1, 1), 5],
        [Date.UTC(1998, 1, 1), 5],
        [Date.UTC(1999, 1, 1), 2],
        [Date.UTC(2000, 1, 1), 1],
        [Date.UTC(2001, 1, 1), 1],
        [Date.UTC(2002, 1, 1), 1],
        [Date.UTC(2003, 1, 1), 4],
        [Date.UTC(2004, 1, 1), 4],
        [Date.UTC(2005, 1, 1), 7],
        [Date.UTC(2006, 1, 1), 1],
        [Date.UTC(2007, 1, 1), 3],
        [Date.UTC(2009, 1, 1), 1],
        [Date.UTC(2010, 1, 1), 2],
        [Date.UTC(2013, 1, 1), 1],
        [Date.UTC(2015, 1, 1), 1],

      ]
    },
    {
      name: 'Acryl',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 3],
        [Date.UTC(1979, 1, 1), 7],
        [Date.UTC(1980, 1, 1), 3],
        [Date.UTC(1981, 1, 1), 3],
        [Date.UTC(1982, 1, 1), 5],
        [Date.UTC(1983, 1, 1), 9],
        [Date.UTC(1984, 1, 1), 6],
        [Date.UTC(1985, 1, 1), 1],
        [Date.UTC(1986, 1, 1), 4],
        [Date.UTC(1987, 1, 1), 3],
        [Date.UTC(1989, 1, 1), 3],
        [Date.UTC(1990, 1, 1), 7],
        [Date.UTC(1991, 1, 1), 4],
        [Date.UTC(1992, 1, 1), 6],
        [Date.UTC(1993, 1, 1), 10],
        [Date.UTC(1994, 1, 1), 3],
        [Date.UTC(1995, 1, 1), 3],
        [Date.UTC(1996, 1, 1), 5],
        [Date.UTC(1997, 1, 1), 4],
        [Date.UTC(1998, 1, 1), 3],
        [Date.UTC(1999, 1, 1), 2],
        [Date.UTC(2000, 1, 1), 7],
        [Date.UTC(2001, 1, 1), 15],
        [Date.UTC(2002, 1, 1), 12],
        [Date.UTC(2003, 1, 1), 5],
        [Date.UTC(2004, 1, 1), 4],
        [Date.UTC(2005, 1, 1), 9],
        [Date.UTC(2006, 1, 1), 3],
        [Date.UTC(2007, 1, 1), 21],
        [Date.UTC(2008, 1, 1), 5],
        [Date.UTC(2009, 1, 1), 6],
        [Date.UTC(2010, 1, 1), 17],
        [Date.UTC(2011, 1, 1), 3],
        [Date.UTC(2012, 1, 1), 4],
        [Date.UTC(2013, 1, 1), 3],
        [Date.UTC(2014, 1, 1), 5],
        [Date.UTC(2015, 1, 1), 4],
        [Date.UTC(2016, 1, 1), 4],
        [Date.UTC(2017, 1, 1), 5],
      ]
    },
    {
      name: 'Airbush',
      visible:true,
      data: [
        
        [Date.UTC(1979, 1, 1), 4],
        [Date.UTC(1980, 1, 1), 1],
        [Date.UTC(1981, 1, 1), 3],
        [Date.UTC(1982, 1, 1), 1],
        [Date.UTC(1984, 1, 1), 1],
        [Date.UTC(1985, 1, 1), 2],
        [Date.UTC(1992, 1, 1), 4],
        [Date.UTC(1997, 1, 1), 1],
        [Date.UTC(1999, 1, 1), 1],
        [Date.UTC(2002, 1, 1), 2],
        [Date.UTC(2004, 1, 1), 9],
        [Date.UTC(2005, 1, 1), 1],
        [Date.UTC(2008, 1, 1), 1],
      ]
    },
    {
      name: 'Aquatint',
      color:'orange',
      data: [
        
        [Date.UTC(1978, 1, 1), 85],
        [Date.UTC(1979, 1, 1), 63],
        [Date.UTC(1980, 1, 1), 83],
        [Date.UTC(1981, 1, 1), 61],
        [Date.UTC(1982, 1, 1), 44],
        [Date.UTC(1983, 1, 1), 46],
        [Date.UTC(1984, 1, 1), 60],
        [Date.UTC(1985, 1, 1), 72],
        [Date.UTC(1986, 1, 1), 106],
        [Date.UTC(1987, 1, 1), 32],
        [Date.UTC(1988, 1, 1), 82],
        [Date.UTC(1989, 1, 1), 166],
        [Date.UTC(1990, 1, 1), 154],
        [Date.UTC(1991, 1, 1), 121],
        [Date.UTC(1992, 1, 1), 83],
        [Date.UTC(1993, 1, 1), 35],
        [Date.UTC(1994, 1, 1), 88],
        [Date.UTC(1995, 1, 1), 23],
        [Date.UTC(1996, 1, 1), 94],
        [Date.UTC(1997, 1, 1), 56],
        [Date.UTC(1998, 1, 1), 111],
        [Date.UTC(1999, 1, 1), 37],
        [Date.UTC(2000, 1, 1), 115],
        [Date.UTC(2001, 1, 1), 101],
        [Date.UTC(2002, 1, 1), 80],
        [Date.UTC(2003, 1, 1), 58],
        [Date.UTC(2004, 1, 1), 61],
        [Date.UTC(2005, 1, 1), 101],
        [Date.UTC(2006, 1, 1), 67],
        [Date.UTC(2007, 1, 1), 49],
        [Date.UTC(2008, 1, 1), 133],
        [Date.UTC(2009, 1, 1), 55],
        [Date.UTC(2010, 1, 1), 77],
        [Date.UTC(2011, 1, 1), 138],
        [Date.UTC(2012, 1, 1), 58],
        [Date.UTC(2013, 1, 1), 68],
        [Date.UTC(2014, 1, 1), 28],
        [Date.UTC(2015, 1, 1), 46],
        [Date.UTC(2016, 1, 1), 7],
        [Date.UTC(2017, 1, 1), 36],
      ]
    },
    {
      name: 'Bronze',
      color: 'black',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 1],
        [Date.UTC(1979, 1, 1), 1],
        [Date.UTC(1980, 1, 1), 5],
        [Date.UTC(1981, 1, 1), 1],
        [Date.UTC(1982, 1, 1), 6],
        [Date.UTC(1983, 1, 1), 1],
        [Date.UTC(1984, 1, 1), 2],
        [Date.UTC(1985, 1, 1), 1],
        [Date.UTC(1986, 1, 1), 1],
        [Date.UTC(1987, 1, 1), 4],
        [Date.UTC(1988, 1, 1), 2],
        [Date.UTC(1989, 1, 1), 1],
        [Date.UTC(1990, 1, 1), 1],
        [Date.UTC(1991, 1, 1), 1],
        [Date.UTC(1992, 1, 1), 1],
        [Date.UTC(1994, 1, 1), 1],
        [Date.UTC(1995, 1, 1), 1],
        [Date.UTC(1997, 1, 1), 1],
        [Date.UTC(1998, 1, 1), 2],
        [Date.UTC(2003, 1, 1), 1],
        [Date.UTC(2004, 1, 1), 2],
        [Date.UTC(2006, 1, 1), 1],
        [Date.UTC(2007, 1, 1), 2],
        [Date.UTC(2011, 1, 1), 2],
        [Date.UTC(2012, 1, 1), 1],
        [Date.UTC(2013, 1, 1), 1],
        [Date.UTC(2014, 1, 1), 2],
        [Date.UTC(2015, 1, 1), 1],
        [Date.UTC(2017, 1, 1), 1],
      ]
    },
    {
      name: 'Carbon',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 3],
        [Date.UTC(1982, 1, 1), 1],
        [Date.UTC(1983, 1, 1), 2],
        [Date.UTC(1984, 1, 1), 1],
        [Date.UTC(1985, 1, 1), 2],
        [Date.UTC(1987, 1, 1), 1],
        [Date.UTC(1988, 1, 1), 4],
        [Date.UTC(1989, 1, 1), 3],
        [Date.UTC(1990, 1, 1), 2],
        [Date.UTC(1991, 1, 1), 3],
        [Date.UTC(1992, 1, 1), 4],
        [Date.UTC(1993, 1, 1), 4],
        [Date.UTC(1994, 1, 1), 3],
        [Date.UTC(1995, 1, 1), 2],
        [Date.UTC(1996, 1, 1), 3],
        [Date.UTC(1997, 1, 1), 3],
        [Date.UTC(1998, 1, 1), 8],
        [Date.UTC(1999, 1, 1), 4],
        [Date.UTC(2000, 1, 1), 9],
        [Date.UTC(2001, 1, 1), 3],
        [Date.UTC(2002, 1, 1), 5],
        [Date.UTC(2003, 1, 1), 25],
        [Date.UTC(2004, 1, 1), 8],
        [Date.UTC(2007, 1, 1), 2],
        [Date.UTC(2010, 1, 1), 1],
        [Date.UTC(2011, 1, 1), 1],
        [Date.UTC(2014, 1, 1), 1],

      ]
    },
    {
      name: 'Glas',
      visible:true,
      data: [
        
        [Date.UTC(1978, 1, 1), 5],
        [Date.UTC(1979, 1, 1), 8],
        [Date.UTC(1980, 1, 1), 9],
        [Date.UTC(1981, 1, 1), 5],
        [Date.UTC(1982, 1, 1), 1],
        [Date.UTC(1983, 1, 1), 6],
        [Date.UTC(1984, 1, 1), 6],
        [Date.UTC(1985, 1, 1), 8],
        [Date.UTC(1986, 1, 1), 3],
        [Date.UTC(1987, 1, 1), 10],
        [Date.UTC(1988, 1, 1), 9],
        [Date.UTC(1989, 1, 1), 6],
        [Date.UTC(1990, 1, 1), 3],
        [Date.UTC(1991, 1, 1), 6],
        [Date.UTC(1992, 1, 1), 4],
        [Date.UTC(1993, 1, 1), 8],
        [Date.UTC(1994, 1, 1), 10],
        [Date.UTC(1995, 1, 1), 23],
        [Date.UTC(1996, 1, 1), 9],
        [Date.UTC(1997, 1, 1), 8],
        [Date.UTC(1998, 1, 1), 5],
        [Date.UTC(1999, 1, 1), 3],
        [Date.UTC(2000, 1, 1), 4],
        [Date.UTC(2001, 1, 1), 8],
        [Date.UTC(2002, 1, 1), 5],
        [Date.UTC(2003, 1, 1), 23],
        [Date.UTC(2004, 1, 1), 13],
        [Date.UTC(2005, 1, 1), 5],
        [Date.UTC(2006, 1, 1), 7],
        [Date.UTC(2007, 1, 1), 12],
        [Date.UTC(2008, 1, 1), 5],
        [Date.UTC(2009, 1, 1), 10],
        [Date.UTC(2010, 1, 1), 2],
        [Date.UTC(2011, 1, 1), 3],
        [Date.UTC(2012, 1, 1), 4],
        [Date.UTC(2013, 1, 1), 4],
        [Date.UTC(2014, 1, 1), 8],
        [Date.UTC(2015, 1, 1), 4],
        [Date.UTC(2016, 1, 1), 1],
        [Date.UTC(2017, 1, 1), 4],

      ]
    },
    {
      name: 'Mylar',
      visible:true,
      data: [
        
        [Date.UTC(1980, 1, 1), 10],
        [Date.UTC(1981, 1, 1), 9],
        [Date.UTC(1985, 1, 1), 1],
        [Date.UTC(1991, 1, 1), 1],
        [Date.UTC(1992, 1, 1), 5],
        [Date.UTC(1996, 1, 1), 2],
        [Date.UTC(1999, 1, 1), 2],
        [Date.UTC(2000, 1, 1), 8],
        [Date.UTC(2003, 1, 1), 5],
        [Date.UTC(2004, 1, 1), 1],
        [Date.UTC(2005, 1, 1), 6],
        [Date.UTC(2010, 1, 1), 11],

      ]
    },
    {
      name: 'Photomontage',
      color:'lightblue',
      data: [
        
        [Date.UTC(1992, 1, 1), 1],

      ]
    },
    {
      name: 'Polyster',
      visible:true,
      data: [
        
        [Date.UTC(1979, 1, 1), 6],
        [Date.UTC(1983, 1, 1), 1],
        [Date.UTC(1985, 1, 1), 3],
        [Date.UTC(1986, 1, 1), 3],
        [Date.UTC(1992, 1, 1), 1],
        [Date.UTC(1993, 1, 1), 5],
        [Date.UTC(1994, 1, 1), 11],
        [Date.UTC(1995, 1, 1), 7],
        [Date.UTC(1996, 1, 1), 3],
        [Date.UTC(1997, 1, 1), 5],
        [Date.UTC(1998, 1, 1), 1],
        [Date.UTC(1999, 1, 1), 4],
        [Date.UTC(2001, 1, 1), 6],
        [Date.UTC(2002, 1, 1), 2],
        [Date.UTC(2003, 1, 1), 3],
        [Date.UTC(2004, 1, 1), 2],
        [Date.UTC(2005, 1, 1), 2],
        [Date.UTC(2007, 1, 1), 4],
        [Date.UTC(2008, 1, 1), 1],
        [Date.UTC(2014, 1, 1), 3],
      ]
    },
    {
      name: 'Video',
      color: 'darkgreen',
      data: [
        
        [Date.UTC(1978, 1, 1), 34],
        [Date.UTC(1979, 1, 1), 49],
        [Date.UTC(1980, 1, 1), 62],
        [Date.UTC(1981, 1, 1), 37],
        [Date.UTC(1982, 1, 1), 65],
        [Date.UTC(1983, 1, 1), 46],
        [Date.UTC(1984, 1, 1), 31],
        [Date.UTC(1985, 1, 1), 32],
        [Date.UTC(1986, 1, 1), 25],
        [Date.UTC(1987, 1, 1), 39],
        [Date.UTC(1988, 1, 1), 34],
        [Date.UTC(1989, 1, 1), 27],
        [Date.UTC(1990, 1, 1), 19],
        [Date.UTC(1991, 1, 1), 25],
        [Date.UTC(1992, 1, 1), 14],
        [Date.UTC(1993, 1, 1), 14],
        [Date.UTC(1994, 1, 1), 25],
        [Date.UTC(1995, 1, 1), 15],
        [Date.UTC(1996, 1, 1), 34],
        [Date.UTC(1997, 1, 1), 25],
        [Date.UTC(1998, 1, 1), 21],
        [Date.UTC(1999, 1, 1), 19],
        [Date.UTC(2000, 1, 1), 30],
        [Date.UTC(2001, 1, 1), 33],
        [Date.UTC(2002, 1, 1), 50],
        [Date.UTC(2003, 1, 1), 39],
        [Date.UTC(2004, 1, 1), 61],
        [Date.UTC(2005, 1, 1), 53],
        [Date.UTC(2006, 1, 1), 46],
        [Date.UTC(2007, 1, 1), 63],
        [Date.UTC(2008, 1, 1), 49],
        [Date.UTC(2009, 1, 1), 52],
        [Date.UTC(2010, 1, 1), 36],
        [Date.UTC(2011, 1, 1), 32],
        [Date.UTC(2012, 1, 1), 16],
        [Date.UTC(2013, 1, 1), 14],
        [Date.UTC(2014, 1, 1), 4],
        [Date.UTC(2015, 1, 1), 5],
        [Date.UTC(2016, 1, 1), 3],
        [Date.UTC(1978, 1, 1), 56],
        [Date.UTC(1979, 1, 1), 91],
        [Date.UTC(1980, 1, 1), 77],
        [Date.UTC(1981, 1, 1), 55],
        [Date.UTC(1982, 1, 1), 78],
        [Date.UTC(1983, 1, 1), 117],
        [Date.UTC(1984, 1, 1), 67],
        [Date.UTC(1985, 1, 1), 75],
        [Date.UTC(1986, 1, 1), 38],
        [Date.UTC(1987, 1, 1), 45],
        [Date.UTC(1988, 1, 1), 55],
        [Date.UTC(1989, 1, 1), 42],
        [Date.UTC(1990, 1, 1), 27],
        [Date.UTC(1991, 1, 1), 40],
        [Date.UTC(1992, 1, 1), 37],
        [Date.UTC(1993, 1, 1), 39],
        [Date.UTC(1994, 1, 1), 161],
        [Date.UTC(1995, 1, 1), 53],
        [Date.UTC(1996, 1, 1), 39],
        [Date.UTC(1997, 1, 1), 32],
        [Date.UTC(1998, 1, 1), 50],
        [Date.UTC(1999, 1, 1), 37],
        [Date.UTC(2000, 1, 1), 35],
        [Date.UTC(2001, 1, 1), 33],
        [Date.UTC(2002, 1, 1), 36],
        [Date.UTC(2003, 1, 1), 41],
        [Date.UTC(2004, 1, 1), 37],
        [Date.UTC(2005, 1, 1), 34],
        [Date.UTC(2006, 1, 1), 35],
        [Date.UTC(2007, 1, 1), 57],
        [Date.UTC(2008, 1, 1), 42],
        [Date.UTC(2009, 1, 1), 36],
        [Date.UTC(2010, 1, 1), 31],
        [Date.UTC(2011, 1, 1), 29],
        [Date.UTC(2012, 1, 1), 38],
        [Date.UTC(2013, 1, 1), 29],
        [Date.UTC(2014, 1, 1), 18],
        [Date.UTC(2015, 1, 1), 7],
        [Date.UTC(2016, 1, 1), 11],
        [Date.UTC(2017, 1, 1), 2],
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

 Expresionismus () {
  document.getElementById("text").innerHTML = ` Der Expressionismus (lateinisch expressio ‚Ausdruck‘) ist eine Stilrichtung in der Kunst. Ihre Anfänge und
  Vorläufer finden sich im ausgehenden 19. Jahrhundert. Wie der Impressionismus, der Symbolismus und der
  Fauvismus ist der Expressionismus eine Bewegung gegen die Tendenzen des Naturalismus. Im Expressionismus
  überwiegt die expressive Ebene gegenüber der ästhetischen, appellativen und sachlichen Ebene. Der Künstler
  möchte sein Erlebnis für den Betrachter darstellen. Neben der Brücke und dem Blauen Reiter als den
  bekanntesten expressionistischen Künstlervereinigungen gab es auch einen Rheinischen Expressionismus. Der
  Begriff wurde 1911 von Herwarth Walden geprägt, er bezeichnet weniger eine Kunstrichtung, sondern eher das
  Lebensgefühl einer jungen Generation. Die Anfänge gehen auf Vincent van Gogh und Edvard Munch zurück.[1]
  Bekannt ist auch der architektonische Expressionismus.
  `
  Highcharts.chart('secondChart', {
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
     text: 'Benutzte Materialien im Expresionismus'
   },
   subtitle: {
     text: document.ontouchstart === undefined ?
       'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
     enabled: true
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
         enabled: true
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
         enabled: true

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
        
        [Date.UTC(1905, 1, 1), 221],
        [Date.UTC(1906, 1, 1), 213],
        [Date.UTC(1907, 1, 1), 763],
        [Date.UTC(1908, 1, 1), 191],
        [Date.UTC(1909, 1, 1), 123],
        [Date.UTC(1910, 1, 1), 137],
        [Date.UTC(1911, 1, 1), 474],
        [Date.UTC(1912, 1, 1), 95],
        [Date.UTC(1913, 1, 1), 228],
        [Date.UTC(1914, 1, 1), 689],
        [Date.UTC(1915, 1, 1), 422],
        [Date.UTC(1916, 1, 1), 453],
        [Date.UTC(1917, 1, 1), 421],
        [Date.UTC(1918, 1, 1), 352],
        [Date.UTC(1919, 1, 1), 413],
        [Date.UTC(1920, 1, 1), 890],
        [Date.UTC(1920, 1, 1), 1],
        [Date.UTC(1921, 1, 1), 389],
        [Date.UTC(1922, 1, 1), 660],
        [Date.UTC(1923, 1, 1), 168],
        [Date.UTC(1924, 1, 1), 250],
        [Date.UTC(1925, 1, 1), 200],
        

      ]
    }, {
      name: 'Filztift',
      data: [
        

      ]
    },
    {
      name: 'Gelatinendruck',
      legendIndex:26,
      data: [
        

      ]
    }, {
      name: 'Graphite',
      data: [
        
        [Date.UTC(1907, 1, 1), 1],
        [Date.UTC(1911, 1, 1), 1],
        [Date.UTC(1912, 1, 1), 19],
        [Date.UTC(1913, 1, 1), 14],
        [Date.UTC(1915, 1, 1), 2],
        [Date.UTC(1916, 1, 1), 3],
        [Date.UTC(1918, 1, 1), 1],
        [Date.UTC(1919, 1, 1), 2],
        [Date.UTC(1920, 1, 1), 16],
        [Date.UTC(1921, 1, 1), 2],
        [Date.UTC(1923, 1, 1), 1],
        [Date.UTC(1925, 1, 1), 2],
        

      ]
    }, {
      name: 'Holz',
      color:'brown',
      data: [
        
        [Date.UTC(1905, 1, 1), 121],
        [Date.UTC(1906, 1, 1), 28],
        [Date.UTC(1907, 1, 1), 174],
        [Date.UTC(1908, 1, 1), 13],
        [Date.UTC(1909, 1, 1), 167],
        [Date.UTC(1910, 1, 1), 19],
        [Date.UTC(1911, 1, 1), 35],
        [Date.UTC(1912, 1, 1), 10],
        [Date.UTC(1913, 1, 1), 127],
        [Date.UTC(1914, 1, 1), 307],
        [Date.UTC(1915, 1, 1), 58],
        [Date.UTC(1916, 1, 1), 19],
        [Date.UTC(1917, 1, 1), 176],
        [Date.UTC(1918, 1, 1), 60],
        [Date.UTC(1919, 1, 1), 128],
        [Date.UTC(1920, 1, 1), 23],
        [Date.UTC(1921, 1, 1), 118],
        [Date.UTC(1922, 1, 1), 17],
        [Date.UTC(1923, 1, 1), 75],
        [Date.UTC(1924, 1, 1), 8],
        [Date.UTC(1925, 1, 1), 43],
        
      ]
    }, {
      name: 'Kugelschreiber',
      data: [
        [Date.UTC(1921, 1, 1), 21],
       

      ]
    },
    {
      name: 'Öl',
      data: [
        
        [Date.UTC(1905, 1, 1), 12],
        [Date.UTC(1906, 1, 1), 25],
        [Date.UTC(1907, 1, 1), 32],
        [Date.UTC(1908, 1, 1), 17],
        [Date.UTC(1909, 1, 1), 36],
        [Date.UTC(1910, 1, 1), 7],
        [Date.UTC(1911, 1, 1), 43],
        [Date.UTC(1912, 1, 1), 5],
        [Date.UTC(1913, 1, 1), 13],
        [Date.UTC(1914, 1, 1), 14],
        [Date.UTC(1915, 1, 1), 15],
        [Date.UTC(1916, 1, 1), 16],
        [Date.UTC(1917, 1, 1), 25],
        [Date.UTC(1918, 1, 1), 19],
        [Date.UTC(1919, 1, 1), 20],
        [Date.UTC(1920, 1, 1), 6],
        [Date.UTC(1921, 1, 1), 30],
        [Date.UTC(1922, 1, 1), 24],
        [Date.UTC(1923, 1, 1), 13],
        [Date.UTC(1924, 1, 1), 15],
        [Date.UTC(1925, 1, 1), 22],
        
      ]
    },
    {
      name: 'Papier',
      color:'yellow',
      data: [
        
        [Date.UTC(1905, 1, 1), 39],
        [Date.UTC(1906, 1, 1), 28],
        [Date.UTC(1907, 1, 1), 332],
        [Date.UTC(1908, 1, 1), 36],
        [Date.UTC(1909, 1, 1), 102],
        [Date.UTC(1910, 1, 1), 23],
        [Date.UTC(1911, 1, 1), 125],
        [Date.UTC(1912, 1, 1), 45],
        [Date.UTC(1913, 1, 1), 512],
        [Date.UTC(1914, 1, 1), 82],
        [Date.UTC(1915, 1, 1), 32],
        [Date.UTC(1916, 1, 1), 725],
        [Date.UTC(1917, 1, 1), 62],
        [Date.UTC(1918, 1, 1), 47],
        [Date.UTC(1919, 1, 1), 36],
        [Date.UTC(1920, 1, 1), 52],
        [Date.UTC(1921, 1, 1), 262],
        [Date.UTC(1922, 1, 1), 52],
        [Date.UTC(1923, 1, 1), 95],
        [Date.UTC(1924, 1, 1), 19],
        [Date.UTC(1925, 1, 1), 72],
        

      ]
    },
    {
      name: 'Pastel',
      data: [
        
        [Date.UTC(1905, 1, 1), 1],
        [Date.UTC(1907, 1, 1), 1],
        [Date.UTC(1909, 1, 1), 4],
        [Date.UTC(1910, 1, 1), 1],
        [Date.UTC(1911, 1, 1), 1],
        [Date.UTC(1912, 1, 1), 1],
        [Date.UTC(1913, 1, 1), 2],
        [Date.UTC(1914, 1, 1), 7],
        [Date.UTC(1918, 1, 1), 1],
        [Date.UTC(1919, 1, 1), 1],
        [Date.UTC(1920, 1, 1), 1],
        [Date.UTC(1921, 1, 1), 4],
        [Date.UTC(1922, 1, 1), 1],
        [Date.UTC(1924, 1, 1), 1],
        [Date.UTC(1925, 1, 1), 1],
        

      ]
    },
    {
      name: 'Stahl',
      data: [
        
        [Date.UTC(1909, 1, 1), 1],
        [Date.UTC(1913, 1, 1), 4],
        [Date.UTC(1914, 1, 1), 1],
        [Date.UTC(1917, 1, 1), 1],
        [Date.UTC(1919, 1, 1), 1],
        [Date.UTC(1920, 1, 1), 8],
        [Date.UTC(1921, 1, 1), 1],
        [Date.UTC(1922, 1, 1), 1],
        [Date.UTC(1923, 1, 1), 1],
        [Date.UTC(1924, 1, 1), 1],
        

      ]
    },
    {
      name: 'Stift',
      color:'violet',

      data: [
       
        [Date.UTC(1905, 1, 1), 14],
        [Date.UTC(1906, 1, 1), 14],
        [Date.UTC(1907, 1, 1), 202],
        [Date.UTC(1908, 1, 1), 12],
        [Date.UTC(1909, 1, 1), 39],
        [Date.UTC(1910, 1, 1), 6],
        [Date.UTC(1911, 1, 1), 23],
        [Date.UTC(1912, 1, 1), 6],
        [Date.UTC(1913, 1, 1), 455],
        [Date.UTC(1914, 1, 1), 26],
        [Date.UTC(1915, 1, 1), 35],
        [Date.UTC(1916, 1, 1), 746],
        [Date.UTC(1917, 1, 1), 21],
        [Date.UTC(1918, 1, 1), 18],
        [Date.UTC(1919, 1, 1), 18],
        [Date.UTC(1920, 1, 1), 18],
        [Date.UTC(1921, 1, 1), 125],
        [Date.UTC(1922, 1, 1), 29],
        [Date.UTC(1923, 1, 1), 16],
        [Date.UTC(1924, 1, 1), 11],
        [Date.UTC(1925, 1, 1), 33],
        

      ]
    },
    {
      name: 'Tinte',
      data: [
        
        [Date.UTC(1905, 1, 1), 17],
        [Date.UTC(1906, 1, 1), 9],
        [Date.UTC(1907, 1, 1), 104],
        [Date.UTC(1908, 1, 1), 10],
        [Date.UTC(1909, 1, 1), 67],
        [Date.UTC(1910, 1, 1), 8],
        [Date.UTC(1911, 1, 1), 25],
        [Date.UTC(1912, 1, 1), 19],
        [Date.UTC(1913, 1, 1), 277],
        [Date.UTC(1914, 1, 1), 69],
        [Date.UTC(1915, 1, 1), 26],
        [Date.UTC(1916, 1, 1), 56],
        [Date.UTC(1917, 1, 1), 18],
        [Date.UTC(1918, 1, 1), 53],
        [Date.UTC(1919, 1, 1), 16],
        [Date.UTC(1920, 1, 1), 17],
        [Date.UTC(1921, 1, 1), 55],
        [Date.UTC(1922, 1, 1), 8],
        [Date.UTC(1923, 1, 1), 72],
        [Date.UTC(1925, 1, 1), 31],
        
      ]
    },
    {
      name: 'Visitenkarte',
      data: [
        

      ]
    },
    {
      name: 'Wasserfarben',
      data: [
        
        [Date.UTC(1905, 1, 1), 14],
        [Date.UTC(1906, 1, 1), 15],
        [Date.UTC(1907, 1, 1), 99],
        [Date.UTC(1908, 1, 1), 5],
        [Date.UTC(1909, 1, 1), 49],
        [Date.UTC(1910, 1, 1), 8],
        [Date.UTC(1911, 1, 1), 34],
        [Date.UTC(1912, 1, 1), 10],
        [Date.UTC(1913, 1, 1), 56],
        [Date.UTC(1914, 1, 1), 61],
        [Date.UTC(1915, 1, 1), 44],
        [Date.UTC(1916, 1, 1), 16],
        [Date.UTC(1917, 1, 1), 19],
        [Date.UTC(1918, 1, 1), 37],
        [Date.UTC(1919, 1, 1), 17],
        [Date.UTC(1920, 1, 1), 13],
        [Date.UTC(1921, 1, 1), 188],
        [Date.UTC(1922, 1, 1), 37],
        [Date.UTC(1923, 1, 1), 70],
        [Date.UTC(1924, 1, 1), 11],
        [Date.UTC(1925, 1, 1), 12],

      ]
    },
    {
      name: 'Abs',
      data: [
        

      ]
    },
    {
      name: 'Acryl',
      data: [
        
        [Date.UTC(1913, 1, 1), 3],
        
      ]
    },
    {
      name: 'Airbush',
      data: [
        [Date.UTC(1920, 1, 1), 1],
        [Date.UTC(1922, 1, 1), 2],
        [Date.UTC(1923, 1, 1), 1],
        
      ]
    },
    {
      name: 'Aquatint',
      color:'orange',
      data: [
        
        [Date.UTC(1905, 1, 1), 77],
        [Date.UTC(1906, 1, 1), 16],
        [Date.UTC(1907, 1, 1), 295],
        [Date.UTC(1908, 1, 1), 11],
        [Date.UTC(1909, 1, 1), 102],
        [Date.UTC(1910, 1, 1), 7],
        [Date.UTC(1911, 1, 1), 60],
        [Date.UTC(1912, 1, 1), 13],
        [Date.UTC(1913, 1, 1), 16],
        [Date.UTC(1914, 1, 1), 271],
        [Date.UTC(1915, 1, 1), 38],
        [Date.UTC(1916, 1, 1), 25],
        [Date.UTC(1917, 1, 1), 148],
        [Date.UTC(1918, 1, 1), 79],
        [Date.UTC(1919, 1, 1), 129],
        [Date.UTC(1920, 1, 1), 10],
        [Date.UTC(1921, 1, 1), 16],
        [Date.UTC(1922, 1, 1), 57],
        [Date.UTC(1923, 1, 1), 45],
        [Date.UTC(1924, 1, 1), 12],
        [Date.UTC(1925, 1, 1), 24],
        
      ]
    },
    {
      name: 'Bronze',
      color: 'black',
      data: [
        
        [Date.UTC(1907, 1, 1), 1],
        [Date.UTC(1908, 1, 1), 13],
        [Date.UTC(1909, 1, 1), 1],
        [Date.UTC(1910, 1, 1), 4],
        [Date.UTC(1911, 1, 1), 17],
        [Date.UTC(1912, 1, 1), 2],
        [Date.UTC(1914, 1, 1), 3],
        [Date.UTC(1915, 1, 1), 1],
        [Date.UTC(1916, 1, 1), 6],
        [Date.UTC(1917, 1, 1), 1],
        [Date.UTC(1919, 1, 1), 4],
        [Date.UTC(1924, 1, 1), 2],
        [Date.UTC(1925, 1, 1), 4],
        
      ]
    },
    {
      name: 'Carbon',
      data: [
        
        [Date.UTC(1905, 1, 1), 2],
        [Date.UTC(1907, 1, 1), 3],
        [Date.UTC(1910, 1, 1), 1],
        [Date.UTC(1918, 1, 1), 1],
        [Date.UTC(1921, 1, 1), 5],
        [Date.UTC(1923, 1, 1), 1],
        

      ]
    },
    {
      name: 'Glas',
      data: [
        
        [Date.UTC(1907, 1, 1), 2],
        [Date.UTC(1910, 1, 1), 17],
        [Date.UTC(1911, 1, 1), 1],
        [Date.UTC(1912, 1, 1), 6],
        [Date.UTC(1913, 1, 1), 23],
        [Date.UTC(1914, 1, 1), 5],
        [Date.UTC(1916, 1, 1), 1],
        [Date.UTC(1920, 1, 1), 7],
        [Date.UTC(1921, 1, 1), 5],
        [Date.UTC(1923, 1, 1), 1],
        [Date.UTC(1925, 1, 1), 2],
        

      ]
    },
    {
      name: 'Mylar',
      data: [
        

      ]
    },
    {
      name: 'Photomontage',
      color:'lightblue',
      data: [
        
        [Date.UTC(1915, 1, 1), 2],
        [Date.UTC(1916, 1, 1), 1],
        [Date.UTC(1920, 1, 1), 7],
        [Date.UTC(1923, 1, 1), 18],
        [Date.UTC(1924, 1, 1), 2],
        [Date.UTC(1925, 1, 1), 1],
        

      ]
    },
    {
      name: 'Polyster',
      data: [
        
      ]
    },
    {
      name: 'Video',
      color: 'darkgreen',
      data: [
        
        [Date.UTC(1905, 1, 1), 9],
        [Date.UTC(1906, 1, 1), 1],
        [Date.UTC(1907, 1, 1), 1],
        [Date.UTC(1908, 1, 1), 3],
        [Date.UTC(1910, 1, 1), 1],
        [Date.UTC(1911, 1, 1), 24],
        [Date.UTC(1913, 1, 1), 5],
        [Date.UTC(1914, 1, 1), 5],
        [Date.UTC(1915, 1, 1), 4],
        [Date.UTC(1916, 1, 1), 2],
        [Date.UTC(1917, 1, 1), 4],
        [Date.UTC(1918, 1, 1), 1],
        [Date.UTC(1919, 1, 1), 4],
        [Date.UTC(1920, 1, 1), 4],
        [Date.UTC(1921, 1, 1), 1],
        [Date.UTC(1923, 1, 1), 5],
        [Date.UTC(1924, 1, 1), 5],
        [Date.UTC(1925, 1, 1), 3],
        [Date.UTC(1914, 1, 1), 1],
       
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

 Jugendstill () {
  document.getElementById("text").innerHTML = ` Der Jugendstil oder Art nouveau[1] ist eine kunstgeschichtliche Epoche an der Wende vom 19. zum 20.
  Jahrhundert. Dem Jugendstil zuzuordnende Strömungen sind der Reformstil (nach der Reformbewegung), der
  Secessionsstil (nach der Wiener Secession), Modernisme (bezogen auf Katalonien), in Russland Modern,
  tschechisch Secese, slowakisch Secesia, polnisch Secesja, ungarisch Szecesszió. Neben dem im Französischen,
  Englischen und Italienischen dominierenden Ausdruck Art nouveau wird im Englischen auch Modern Style und
  im Italienischen Stile Floreale oder Liberty verwendet. Zeitlich gehört der Jugendstil zum Fin de siècle.
  `
  Highcharts.chart('secondChart', {
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
     text: 'Benutzte Materialien im Jugendstil'
   },
   subtitle: {
     text: document.ontouchstart === undefined ?
       'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
     enabled: true
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
         enabled: true
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
         enabled: true

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
          
          [Date.UTC(1895, 1, 1), 98],
          [Date.UTC(1896, 1, 1), 40],
          [Date.UTC(1897, 1, 1), 26],
          [Date.UTC(1898, 1, 1), 138],
          [Date.UTC(1899, 1, 1), 75],
          [Date.UTC(1900, 1, 1), 267],
          [Date.UTC(1901, 1, 1), 48],
          [Date.UTC(1902, 1, 1), 178],
          [Date.UTC(1903, 1, 1), 153],
          [Date.UTC(1904, 1, 1), 483],
          [Date.UTC(1905, 1, 1), 221],
          [Date.UTC(1906, 1, 1), 213],
          [Date.UTC(1907, 1, 1), 763],
          [Date.UTC(1908, 1, 1), 191],
          [Date.UTC(1909, 1, 1), 123],
          [Date.UTC(1910, 1, 1), 137],
          [Date.UTC(1911, 1, 1), 474],
          [Date.UTC(1912, 1, 1), 95],
          [Date.UTC(1913, 1, 1), 228],
          [Date.UTC(1914, 1, 1), 689],
          [Date.UTC(1915, 1, 1), 422],
          

        ]
      }, {
        name: 'Filztift',
        
        visible:true,
        data: [
          

        ]
      },
      {
        name: 'Gelatinendruck',
        
        legendIndex:26,
        visible:true,
        data: [
          //    [Date.UTC(1927, 1, 1), 3],
          

        ]
      }, {
        name: 'Graphite',
        
        visible:true,
        data: [
          [Date.UTC(1901, 1, 1), 1],
          [Date.UTC(1902, 1, 1), 3],
          [Date.UTC(1907, 1, 1), 1],
          [Date.UTC(1911, 1, 1), 1],
          [Date.UTC(1912, 1, 1), 19],
          [Date.UTC(1913, 1, 1), 14],
          [Date.UTC(1915, 1, 1), 2],
          
        ]
      }, {
        name: 'Holz',
        color:'brown',
        data: [
          
          [Date.UTC(1895, 1, 1), 50],
          [Date.UTC(1896, 1, 1), 2],
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 15],
          [Date.UTC(1900, 1, 1), 4],
          [Date.UTC(1902, 1, 1), 44],
          [Date.UTC(1903, 1, 1), 18],
          [Date.UTC(1904, 1, 1), 347],
          [Date.UTC(1905, 1, 1), 121],
          [Date.UTC(1906, 1, 1), 28],
          [Date.UTC(1907, 1, 1), 174],
          [Date.UTC(1908, 1, 1), 13],
          [Date.UTC(1909, 1, 1), 167],
          [Date.UTC(1910, 1, 1), 19],
          [Date.UTC(1911, 1, 1), 35],
          [Date.UTC(1912, 1, 1), 10],
          [Date.UTC(1913, 1, 1), 127],
          [Date.UTC(1914, 1, 1), 307],
          [Date.UTC(1915, 1, 1), 58],
          
        ]
      }, {
        name: 'Kugelschreiber',
        
        visible:true,
        data: [
          

        ]
      },
      {
        name: 'Öl',
        
        visible:true,
        data: [
          
          [Date.UTC(1895, 1, 1), 3],
          [Date.UTC(1897, 1, 1), 7],
          [Date.UTC(1898, 1, 1), 5],
          [Date.UTC(1899, 1, 1), 10],
          [Date.UTC(1900, 1, 1), 4],
          [Date.UTC(1901, 1, 1), 3],
          [Date.UTC(1902, 1, 1), 15],
          [Date.UTC(1903, 1, 1), 2],
          [Date.UTC(1904, 1, 1), 8],
          [Date.UTC(1905, 1, 1), 12],
          [Date.UTC(1906, 1, 1), 25],
          [Date.UTC(1907, 1, 1), 32],
          [Date.UTC(1908, 1, 1), 17],
          [Date.UTC(1909, 1, 1), 36],
          [Date.UTC(1910, 1, 1), 7],
          [Date.UTC(1911, 1, 1), 43],
          [Date.UTC(1912, 1, 1), 5],
          [Date.UTC(1913, 1, 1), 13],
          [Date.UTC(1914, 1, 1), 14],
          [Date.UTC(1915, 1, 1), 15],
          
        ]
      },
      {
        name: 'Papier',
        color:'yellow',
        data: [
          
          [Date.UTC(1895, 1, 1), 8],
          [Date.UTC(1896, 1, 1), 1],
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 4],
          [Date.UTC(1899, 1, 1), 24],
          [Date.UTC(1900, 1, 1), 34],
          [Date.UTC(1901, 1, 1), 7],
          [Date.UTC(1902, 1, 1), 63],
          [Date.UTC(1903, 1, 1), 54],
          [Date.UTC(1904, 1, 1), 22],
          [Date.UTC(1905, 1, 1), 39],
          [Date.UTC(1906, 1, 1), 28],
          [Date.UTC(1907, 1, 1), 332],
          [Date.UTC(1908, 1, 1), 36],
          [Date.UTC(1909, 1, 1), 102],
          [Date.UTC(1910, 1, 1), 23],
          [Date.UTC(1911, 1, 1), 125],
          [Date.UTC(1912, 1, 1), 45],
          [Date.UTC(1913, 1, 1), 512],
          [Date.UTC(1914, 1, 1), 82],
          [Date.UTC(1915, 1, 1), 32],
          

        ]
      },
      {
        name: 'Pastel',
        visible:true,
        
        data: [
          
          [Date.UTC(1896, 1, 1), 1],
          [Date.UTC(1899, 1, 1), 1],
          [Date.UTC(1900, 1, 1), 2],
          [Date.UTC(1902, 1, 1), 2],
          [Date.UTC(1903, 1, 1), 1],
          [Date.UTC(1905, 1, 1), 1],
          [Date.UTC(1907, 1, 1), 1],
          [Date.UTC(1909, 1, 1), 4],
          [Date.UTC(1910, 1, 1), 1],
          [Date.UTC(1911, 1, 1), 1],
          [Date.UTC(1912, 1, 1), 1],
          [Date.UTC(1913, 1, 1), 2],
          [Date.UTC(1914, 1, 1), 7],
          

        ]
      },
      {
        name: 'Stahl',
        
        visible:true,
        data: [
          
          [Date.UTC(1899, 1, 1), 1],
          [Date.UTC(1900, 1, 1), 2],
          [Date.UTC(1909, 1, 1), 1],
          [Date.UTC(1913, 1, 1), 4],
          [Date.UTC(1914, 1, 1), 1],
          

        ]
      },
      {
        name: 'Stift',
        color:'violet',

        data: [
          
          [Date.UTC(1895, 1, 1), 3],
          [Date.UTC(1896, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 4],
          [Date.UTC(1899, 1, 1), 9],
          [Date.UTC(1900, 1, 1), 6],
          [Date.UTC(1901, 1, 1), 9],
          [Date.UTC(1902, 1, 1), 52],
          [Date.UTC(1903, 1, 1), 2],
          [Date.UTC(1904, 1, 1), 21],
          [Date.UTC(1905, 1, 1), 14],
          [Date.UTC(1906, 1, 1), 14],
          [Date.UTC(1907, 1, 1), 202],
          [Date.UTC(1908, 1, 1), 12],
          [Date.UTC(1909, 1, 1), 39],
          [Date.UTC(1910, 1, 1), 6],
          [Date.UTC(1911, 1, 1), 23],
          [Date.UTC(1912, 1, 1), 6],
          [Date.UTC(1913, 1, 1), 455],
          [Date.UTC(1914, 1, 1), 26],
          [Date.UTC(1915, 1, 1), 35],
          

        ]
      },
      {
        name: 'Tinte',
        
        visible:true,
        data: [
         
          [Date.UTC(1895, 1, 1), 2],
          [Date.UTC(1899, 1, 1), 9],
          [Date.UTC(1900, 1, 1), 17],
          [Date.UTC(1901, 1, 1), 2],
          [Date.UTC(1902, 1, 1), 4],
          [Date.UTC(1903, 1, 1), 31],
          [Date.UTC(1904, 1, 1), 5],
          [Date.UTC(1905, 1, 1), 17],
          [Date.UTC(1906, 1, 1), 9],
          [Date.UTC(1907, 1, 1), 104],
          [Date.UTC(1908, 1, 1), 10],
          [Date.UTC(1909, 1, 1), 67],
          [Date.UTC(1910, 1, 1), 8],
          [Date.UTC(1911, 1, 1), 25],
          [Date.UTC(1912, 1, 1), 19],
          [Date.UTC(1913, 1, 1), 277],
          [Date.UTC(1914, 1, 1), 69],
          [Date.UTC(1915, 1, 1), 26],
          
        ]
      },
      {
        name: 'Visitenkarte',
        visible:true,
        
        data: [
          

        ]
      },
      {
        name: 'Wasserfarben',
        visible:true,
        
        data: [
         
          [Date.UTC(1895, 1, 1), 4],
          [Date.UTC(1897, 1, 1), 2],
          [Date.UTC(1898, 1, 1), 5],
          [Date.UTC(1899, 1, 1), 8],
          [Date.UTC(1900, 1, 1), 21],
          [Date.UTC(1901, 1, 1), 12],
          [Date.UTC(1902, 1, 1), 11],
          [Date.UTC(1903, 1, 1), 20],
          [Date.UTC(1904, 1, 1), 28],
          [Date.UTC(1905, 1, 1), 14],
          [Date.UTC(1906, 1, 1), 15],
          [Date.UTC(1907, 1, 1), 99],
          [Date.UTC(1908, 1, 1), 5],
          [Date.UTC(1909, 1, 1), 49],
          [Date.UTC(1910, 1, 1), 8],
          [Date.UTC(1911, 1, 1), 34],
          [Date.UTC(1912, 1, 1), 10],
          [Date.UTC(1913, 1, 1), 56],
          [Date.UTC(1914, 1, 1), 61],
          [Date.UTC(1915, 1, 1), 44],
          
        ]
      },
      {
        name: 'Abs',
        
        visible:true,
        data: [
          

        ]
      },
      {
        name: 'Acryl',
        
        visible:true,
        data: [
         
          [Date.UTC(1898, 1, 1), 1],
          [Date.UTC(1913, 1, 1), 3],
          
        ]
      },
      {
        name: 'Airbush',
        
        visible:true,
        data: [
         
        ]
      },
      {
        name: 'Aquatint',
        color:'orange',
        data: [
          
          [Date.UTC(1895, 1, 1), 30],
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 5],
          [Date.UTC(1899, 1, 1), 2],
          [Date.UTC(1900, 1, 1), 31],
          [Date.UTC(1901, 1, 1), 6],
          [Date.UTC(1902, 1, 1), 61],
          [Date.UTC(1903, 1, 1), 40],
          [Date.UTC(1904, 1, 1), 68],
          [Date.UTC(1905, 1, 1), 77],
          [Date.UTC(1906, 1, 1), 16],
          [Date.UTC(1907, 1, 1), 295],
          [Date.UTC(1908, 1, 1), 11],
          [Date.UTC(1909, 1, 1), 102],
          [Date.UTC(1910, 1, 1), 7],
          [Date.UTC(1911, 1, 1), 60],
          [Date.UTC(1912, 1, 1), 13],
          [Date.UTC(1913, 1, 1), 16],
          [Date.UTC(1914, 1, 1), 271],
          [Date.UTC(1915, 1, 1), 38],
         
        ]
      },
      {
        name: 'Bronze',
        
        visible:true,
        data: [
          
          [Date.UTC(1895, 1, 1), 2],
          [Date.UTC(1897, 1, 1), 2],
          [Date.UTC(1899, 1, 1), 2],
          [Date.UTC(1900, 1, 1), 2],
          [Date.UTC(1902, 1, 1), 4],
          [Date.UTC(1904, 1, 1), 12],
          [Date.UTC(1907, 1, 1), 1],
          [Date.UTC(1908, 1, 1), 13],
          [Date.UTC(1909, 1, 1), 1],
          [Date.UTC(1910, 1, 1), 4],
          [Date.UTC(1911, 1, 1), 17],
          [Date.UTC(1912, 1, 1), 2],
          [Date.UTC(1914, 1, 1), 3],
          [Date.UTC(1915, 1, 1), 1],
          
        ]
      },
      {
        name: 'Carbon',
        
        visible:true,
        data: [
          
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1902, 1, 1), 1],
          [Date.UTC(1903, 1, 1), 1],
          [Date.UTC(1905, 1, 1), 2],
          [Date.UTC(1907, 1, 1), 3],
          [Date.UTC(1910, 1, 1), 1],
          

        ]
      },
      {
        name: 'Glas',
        
        visible:true,
        data: [
         
          [Date.UTC(1895, 1, 1), 1],
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1900, 1, 1), 18],
          [Date.UTC(1901, 1, 1), 5],
          [Date.UTC(1904, 1, 1), 4],
          [Date.UTC(1907, 1, 1), 2],
          [Date.UTC(1910, 1, 1), 17],
          [Date.UTC(1911, 1, 1), 1],
          [Date.UTC(1912, 1, 1), 6],
          [Date.UTC(1913, 1, 1), 23],
          [Date.UTC(1914, 1, 1), 5],
         

        ]
      },
      {
        name: 'Mylar',
        
        visible:true,
        data: [
          

        ]
      },
      {
        name: 'Photomontage',
        color:'lightblue',
        data: [
          
          [Date.UTC(1915, 1, 1), 2],
          

        ]
      },
      {
        name: 'Polyster',
        
        visible:true,
        data: [
         
        ]
      },
      {
        name: 'Video',
        color: 'darkgreen',
        data: [
          
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1899, 1, 1), 2],
          [Date.UTC(1901, 1, 1), 1],
          [Date.UTC(1903, 1, 1), 2],
          [Date.UTC(1904, 1, 1), 2],
          [Date.UTC(1905, 1, 1), 9],
          [Date.UTC(1906, 1, 1), 1],
          [Date.UTC(1907, 1, 1), 1],
          [Date.UTC(1908, 1, 1), 3],
          [Date.UTC(1910, 1, 1), 1],
          [Date.UTC(1911, 1, 1), 24],
          [Date.UTC(1913, 1, 1), 5],
          [Date.UTC(1914, 1, 1), 5],
          [Date.UTC(1915, 1, 1), 4],
          
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

 Kubismus () {
  document.getElementById("text").innerHTML = ` Kubismus ist eine Stilrichtung in der Kunstgeschichte. Er entstand aus einer Bewegung der Avantgarde in der
  Malerei ab 1907 in Frankreich. Seine maßgebenden Begründer sind Pablo Picasso und Georges Braque. Weitere
  Vertreter sind Juan Gris und die Puteaux-Gruppe, im Besonderen Fernand Léger, Marcel Duchamp und Robert
  Delaunay, auf den der Orphismus zurückgeht. Vom sogenannten Frühkubismus ausgehend entstanden der
  analytische und der synthetische Kubismus. Der Kubismus löste in Frankreich den Fauvismus ab. Eine eigene
  Theorie oder ein Manifest besaß der Kubismus nicht. Der Kubismus leitete mit dem Fauvismus die Klassische
  Moderne ein. Zu Beginn des Ersten Weltkriegs im Jahr 1914 begann sich die Bewegung aufzulösen. Aus
  heutiger Sicht stellt der Kubismus die revolutionärste Neuerung in der Kunst des 20. Jahrhunderts dar. Der
  Kubismus schuf eine neue Denkordnung in der Malerei. Die Bibliographie zum Kubismus ist umfangreicher als
  zu jeder anderen Stilrichtung in der modernen Kunst. Der Einfluss kubistischer Werke auf die nachfolgenden
  Stilrichtungen war sehr groß. Der Kubismus griff auch auf die Bildhauerei über, so entstand die kubistische
  Plastik. Weitere Betätigungsfelder fanden die Künstler in der Architektur und der Musik sowie im Film.
  `
  Highcharts.chart('secondChart', {
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
     text: 'Benutzte Materialien im Kubismus'
   },
   subtitle: {
     text: document.ontouchstart === undefined ?
       'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
     enabled: true
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
         enabled: true
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
         enabled: true

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
        
        [Date.UTC(1907, 1, 1), 763],
        [Date.UTC(1908, 1, 1), 191],
        [Date.UTC(1909, 1, 1), 123],
        [Date.UTC(1910, 1, 1), 137],
        [Date.UTC(1911, 1, 1), 474],
        [Date.UTC(1912, 1, 1), 95],
        [Date.UTC(1913, 1, 1), 228],
        [Date.UTC(1914, 1, 1), 689],
        

      ]
    }, {
      name: 'Filztift',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Gelatinendruck',
      legendIndex:26,
      visible:true,
      data: [
        //    [Date.UTC(1927, 1, 1), 3],
        

      ]
    }, {
      name: 'Graphite',
      visible:true,
      data: [
        
        [Date.UTC(1907, 1, 1), 1],
        [Date.UTC(1911, 1, 1), 1],
        [Date.UTC(1912, 1, 1), 19],
        [Date.UTC(1913, 1, 1), 14],
        

      ]
    }, {
      name: 'Holz',
      color:'brown',
      data: [
        
        [Date.UTC(1907, 1, 1), 174],
        [Date.UTC(1908, 1, 1), 13],
        [Date.UTC(1909, 1, 1), 167],
        [Date.UTC(1910, 1, 1), 19],
        [Date.UTC(1911, 1, 1), 35],
        [Date.UTC(1912, 1, 1), 10],
        [Date.UTC(1913, 1, 1), 127],
        [Date.UTC(1914, 1, 1), 307],
        
      ]
    }, {
      name: 'Kugelschreiber',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Öl',
      visible:true,
      data: [
        
        [Date.UTC(1907, 1, 1), 32],
        [Date.UTC(1908, 1, 1), 17],
        [Date.UTC(1909, 1, 1), 36],
        [Date.UTC(1910, 1, 1), 7],
        [Date.UTC(1911, 1, 1), 43],
        [Date.UTC(1912, 1, 1), 5],
        [Date.UTC(1913, 1, 1), 13],
        [Date.UTC(1914, 1, 1), 14],
        
      ]
    },
    {
      name: 'Papier',
      color:'yellow',
      data: [
        
        [Date.UTC(1907, 1, 1), 332],
        [Date.UTC(1908, 1, 1), 36],
        [Date.UTC(1909, 1, 1), 102],
        [Date.UTC(1910, 1, 1), 23],
        [Date.UTC(1911, 1, 1), 125],
        [Date.UTC(1912, 1, 1), 45],
        [Date.UTC(1913, 1, 1), 512],
        [Date.UTC(1914, 1, 1), 82],
        

      ]
    },
    {
      name: 'Pastel',
      visible:true,
      data: [
        
        [Date.UTC(1907, 1, 1), 1],
        [Date.UTC(1909, 1, 1), 4],
        [Date.UTC(1910, 1, 1), 1],
        [Date.UTC(1911, 1, 1), 1],
        [Date.UTC(1912, 1, 1), 1],
        [Date.UTC(1913, 1, 1), 2],
        [Date.UTC(1914, 1, 1), 7],
        

      ]
    },
    {
      name: 'Stahl',
      visible:true,
      data: [
        
        [Date.UTC(1909, 1, 1), 1],
        [Date.UTC(1913, 1, 1), 4],
        [Date.UTC(1914, 1, 1), 1],
        

      ]
    },
    {
      name: 'Stift',
      color:'violet',

      data: [
        
        [Date.UTC(1907, 1, 1), 202],
        [Date.UTC(1908, 1, 1), 12],
        [Date.UTC(1909, 1, 1), 39],
        [Date.UTC(1910, 1, 1), 6],
        [Date.UTC(1911, 1, 1), 23],
        [Date.UTC(1912, 1, 1), 6],
        [Date.UTC(1913, 1, 1), 455],
        [Date.UTC(1914, 1, 1), 26],
        

      ]
    },
    {
      name: 'Tinte',
      visible:true,
      data: [
        
        [Date.UTC(1907, 1, 1), 104],
        [Date.UTC(1908, 1, 1), 10],
        [Date.UTC(1909, 1, 1), 67],
        [Date.UTC(1910, 1, 1), 8],
        [Date.UTC(1911, 1, 1), 25],
        [Date.UTC(1912, 1, 1), 19],
        [Date.UTC(1913, 1, 1), 277],
        [Date.UTC(1914, 1, 1), 69],
        
      ]
    },
    {
      name: 'Visitenkarte',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Wasserfarben',
      visible:true,
      data: [
        
        [Date.UTC(1907, 1, 1), 99],
        [Date.UTC(1908, 1, 1), 5],
        [Date.UTC(1909, 1, 1), 49],
        [Date.UTC(1910, 1, 1), 8],
        [Date.UTC(1911, 1, 1), 34],
        [Date.UTC(1912, 1, 1), 10],
        [Date.UTC(1913, 1, 1), 56],
        [Date.UTC(1914, 1, 1), 61],
        
      ]
    },
    {
      name: 'Abs',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Acryl',
      visible:true,
      data: [
        
        [Date.UTC(1913, 1, 1), 3],
        
      ]
    },
    {
      name: 'Airbush',
      visible:true,
      data: [
        
      ]
    },
    {
      name: 'Aquatint',
      color:'orange',
      data: [
        
        [Date.UTC(1907, 1, 1), 295],
        [Date.UTC(1908, 1, 1), 11],
        [Date.UTC(1909, 1, 1), 102],
        [Date.UTC(1910, 1, 1), 7],
        [Date.UTC(1911, 1, 1), 60],
        [Date.UTC(1912, 1, 1), 13],
        [Date.UTC(1913, 1, 1), 16],
        [Date.UTC(1914, 1, 1), 271],
        
      ]
    },
    {
      name: 'Bronze',
      color: 'black',
      visible:true,
      data: [
        
        [Date.UTC(1907, 1, 1), 1],
        [Date.UTC(1908, 1, 1), 13],
        [Date.UTC(1909, 1, 1), 1],
        [Date.UTC(1910, 1, 1), 4],
        [Date.UTC(1911, 1, 1), 17],
        [Date.UTC(1912, 1, 1), 2],
        [Date.UTC(1914, 1, 1), 3],
        
      ]
    },
    {
      name: 'Carbon',
      visible:true,
      data: [
        
        [Date.UTC(1907, 1, 1), 3],
        [Date.UTC(1910, 1, 1), 1],
        

      ]
    },
    {
      name: 'Glas',
      visible:true,
      data: [
        
        [Date.UTC(1907, 1, 1), 2],
        [Date.UTC(1910, 1, 1), 17],
        [Date.UTC(1911, 1, 1), 1],
        [Date.UTC(1912, 1, 1), 6],
        [Date.UTC(1913, 1, 1), 23],
        [Date.UTC(1914, 1, 1), 5],
        

      ]
    },
    {
      name: 'Mylar',
      visible:true,
      data: [
        

      ]
    },
    {
      name: 'Photomontage',
      color:'lightblue',
      data: [
        

      ]
    },
    {
      name: 'Polyster',
      visible:true,
      data: [
        
      ]
    },
    {
      name: 'Video',
      color: 'darkgreen',
      data: [
        
        [Date.UTC(1907, 1, 1), 1],
        [Date.UTC(1908, 1, 1), 3],
        [Date.UTC(1910, 1, 1), 1],
        [Date.UTC(1911, 1, 1), 24],
        [Date.UTC(1913, 1, 1), 5],
        [Date.UTC(1914, 1, 1), 5],
        [Date.UTC(1914, 1, 1), 1],
        
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

Futurismus () {
  document.getElementById("text").innerHTML = ` Der Futurismus war eine aus Italien stammende avantgardistische Kunstbewegung, die aufgrund des breit
  gefächerten Spektrums den Anspruch erhob, eine neue Kultur zu begründen. Der Einfluss des Futurismus geht
  wesentlich auf seinen Gründer Filippo Tommaso Marinetti und dessen erstes futuristisches Manifest von 1909
  zurück.
  `
  Highcharts.chart('secondChart', {
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
     text: 'Benutzte Materialien im Futurismus'
   },
   subtitle: {
     text: document.ontouchstart === undefined ?
       'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
     enabled: true
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
         enabled: true
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
         enabled: true

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
          
          [Date.UTC(1895, 1, 1), 98],
          [Date.UTC(1896, 1, 1), 40],
          [Date.UTC(1897, 1, 1), 26],
          [Date.UTC(1898, 1, 1), 138],
          [Date.UTC(1899, 1, 1), 75],
          [Date.UTC(1900, 1, 1), 267],
          [Date.UTC(1901, 1, 1), 48],
          [Date.UTC(1902, 1, 1), 178],
          [Date.UTC(1903, 1, 1), 153],
          [Date.UTC(1904, 1, 1), 483],
          [Date.UTC(1905, 1, 1), 221],
          [Date.UTC(1906, 1, 1), 213],
          [Date.UTC(1907, 1, 1), 763],
          [Date.UTC(1908, 1, 1), 191],
          [Date.UTC(1909, 1, 1), 123],
          [Date.UTC(1910, 1, 1), 137],
          [Date.UTC(1911, 1, 1), 474],
          [Date.UTC(1912, 1, 1), 95],
          [Date.UTC(1913, 1, 1), 228],
          [Date.UTC(1914, 1, 1), 689],
          [Date.UTC(1915, 1, 1), 422],
          

        ]
      }, {
        name: 'Filztift',
        
        visible:true,
        data: [
          

        ]
      },
      {
        name: 'Gelatinendruck',
        
        legendIndex:26,
        visible:true,
        data: [
          //    [Date.UTC(1927, 1, 1), 3],
          

        ]
      }, {
        name: 'Graphite',
        
        visible:true,
        data: [
          [Date.UTC(1901, 1, 1), 1],
          [Date.UTC(1902, 1, 1), 3],
          [Date.UTC(1907, 1, 1), 1],
          [Date.UTC(1911, 1, 1), 1],
          [Date.UTC(1912, 1, 1), 19],
          [Date.UTC(1913, 1, 1), 14],
          [Date.UTC(1915, 1, 1), 2],
          
        ]
      }, {
        name: 'Holz',
        color:'brown',
        data: [
          
          [Date.UTC(1895, 1, 1), 50],
          [Date.UTC(1896, 1, 1), 2],
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 15],
          [Date.UTC(1900, 1, 1), 4],
          [Date.UTC(1902, 1, 1), 44],
          [Date.UTC(1903, 1, 1), 18],
          [Date.UTC(1904, 1, 1), 347],
          [Date.UTC(1905, 1, 1), 121],
          [Date.UTC(1906, 1, 1), 28],
          [Date.UTC(1907, 1, 1), 174],
          [Date.UTC(1908, 1, 1), 13],
          [Date.UTC(1909, 1, 1), 167],
          [Date.UTC(1910, 1, 1), 19],
          [Date.UTC(1911, 1, 1), 35],
          [Date.UTC(1912, 1, 1), 10],
          [Date.UTC(1913, 1, 1), 127],
          [Date.UTC(1914, 1, 1), 307],
          [Date.UTC(1915, 1, 1), 58],
          
        ]
      }, {
        name: 'Kugelschreiber',
        
        visible:true,
        data: [
          

        ]
      },
      {
        name: 'Öl',
        
        visible:true,
        data: [
          
          [Date.UTC(1895, 1, 1), 3],
          [Date.UTC(1897, 1, 1), 7],
          [Date.UTC(1898, 1, 1), 5],
          [Date.UTC(1899, 1, 1), 10],
          [Date.UTC(1900, 1, 1), 4],
          [Date.UTC(1901, 1, 1), 3],
          [Date.UTC(1902, 1, 1), 15],
          [Date.UTC(1903, 1, 1), 2],
          [Date.UTC(1904, 1, 1), 8],
          [Date.UTC(1905, 1, 1), 12],
          [Date.UTC(1906, 1, 1), 25],
          [Date.UTC(1907, 1, 1), 32],
          [Date.UTC(1908, 1, 1), 17],
          [Date.UTC(1909, 1, 1), 36],
          [Date.UTC(1910, 1, 1), 7],
          [Date.UTC(1911, 1, 1), 43],
          [Date.UTC(1912, 1, 1), 5],
          [Date.UTC(1913, 1, 1), 13],
          [Date.UTC(1914, 1, 1), 14],
          [Date.UTC(1915, 1, 1), 15],
          
        ]
      },
      {
        name: 'Papier',
        color:'yellow',
        data: [
          
          [Date.UTC(1895, 1, 1), 8],
          [Date.UTC(1896, 1, 1), 1],
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 4],
          [Date.UTC(1899, 1, 1), 24],
          [Date.UTC(1900, 1, 1), 34],
          [Date.UTC(1901, 1, 1), 7],
          [Date.UTC(1902, 1, 1), 63],
          [Date.UTC(1903, 1, 1), 54],
          [Date.UTC(1904, 1, 1), 22],
          [Date.UTC(1905, 1, 1), 39],
          [Date.UTC(1906, 1, 1), 28],
          [Date.UTC(1907, 1, 1), 332],
          [Date.UTC(1908, 1, 1), 36],
          [Date.UTC(1909, 1, 1), 102],
          [Date.UTC(1910, 1, 1), 23],
          [Date.UTC(1911, 1, 1), 125],
          [Date.UTC(1912, 1, 1), 45],
          [Date.UTC(1913, 1, 1), 512],
          [Date.UTC(1914, 1, 1), 82],
          [Date.UTC(1915, 1, 1), 32],
          

        ]
      },
      {
        name: 'Pastel',
        visible:true,
        
        data: [
          
          [Date.UTC(1896, 1, 1), 1],
          [Date.UTC(1899, 1, 1), 1],
          [Date.UTC(1900, 1, 1), 2],
          [Date.UTC(1902, 1, 1), 2],
          [Date.UTC(1903, 1, 1), 1],
          [Date.UTC(1905, 1, 1), 1],
          [Date.UTC(1907, 1, 1), 1],
          [Date.UTC(1909, 1, 1), 4],
          [Date.UTC(1910, 1, 1), 1],
          [Date.UTC(1911, 1, 1), 1],
          [Date.UTC(1912, 1, 1), 1],
          [Date.UTC(1913, 1, 1), 2],
          [Date.UTC(1914, 1, 1), 7],
          

        ]
      },
      {
        name: 'Stahl',
        
        visible:true,
        data: [
          
          [Date.UTC(1899, 1, 1), 1],
          [Date.UTC(1900, 1, 1), 2],
          [Date.UTC(1909, 1, 1), 1],
          [Date.UTC(1913, 1, 1), 4],
          [Date.UTC(1914, 1, 1), 1],
          

        ]
      },
      {
        name: 'Stift',
        color:'violet',

        data: [
          
          [Date.UTC(1895, 1, 1), 3],
          [Date.UTC(1896, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 4],
          [Date.UTC(1899, 1, 1), 9],
          [Date.UTC(1900, 1, 1), 6],
          [Date.UTC(1901, 1, 1), 9],
          [Date.UTC(1902, 1, 1), 52],
          [Date.UTC(1903, 1, 1), 2],
          [Date.UTC(1904, 1, 1), 21],
          [Date.UTC(1905, 1, 1), 14],
          [Date.UTC(1906, 1, 1), 14],
          [Date.UTC(1907, 1, 1), 202],
          [Date.UTC(1908, 1, 1), 12],
          [Date.UTC(1909, 1, 1), 39],
          [Date.UTC(1910, 1, 1), 6],
          [Date.UTC(1911, 1, 1), 23],
          [Date.UTC(1912, 1, 1), 6],
          [Date.UTC(1913, 1, 1), 455],
          [Date.UTC(1914, 1, 1), 26],
          [Date.UTC(1915, 1, 1), 35],
          

        ]
      },
      {
        name: 'Tinte',
        
        visible:true,
        data: [
         
          [Date.UTC(1895, 1, 1), 2],
          [Date.UTC(1899, 1, 1), 9],
          [Date.UTC(1900, 1, 1), 17],
          [Date.UTC(1901, 1, 1), 2],
          [Date.UTC(1902, 1, 1), 4],
          [Date.UTC(1903, 1, 1), 31],
          [Date.UTC(1904, 1, 1), 5],
          [Date.UTC(1905, 1, 1), 17],
          [Date.UTC(1906, 1, 1), 9],
          [Date.UTC(1907, 1, 1), 104],
          [Date.UTC(1908, 1, 1), 10],
          [Date.UTC(1909, 1, 1), 67],
          [Date.UTC(1910, 1, 1), 8],
          [Date.UTC(1911, 1, 1), 25],
          [Date.UTC(1912, 1, 1), 19],
          [Date.UTC(1913, 1, 1), 277],
          [Date.UTC(1914, 1, 1), 69],
          [Date.UTC(1915, 1, 1), 26],
          
        ]
      },
      {
        name: 'Visitenkarte',
        visible:true,
        
        data: [
          

        ]
      },
      {
        name: 'Wasserfarben',
        visible:true,
        
        data: [
         
          [Date.UTC(1895, 1, 1), 4],
          [Date.UTC(1897, 1, 1), 2],
          [Date.UTC(1898, 1, 1), 5],
          [Date.UTC(1899, 1, 1), 8],
          [Date.UTC(1900, 1, 1), 21],
          [Date.UTC(1901, 1, 1), 12],
          [Date.UTC(1902, 1, 1), 11],
          [Date.UTC(1903, 1, 1), 20],
          [Date.UTC(1904, 1, 1), 28],
          [Date.UTC(1905, 1, 1), 14],
          [Date.UTC(1906, 1, 1), 15],
          [Date.UTC(1907, 1, 1), 99],
          [Date.UTC(1908, 1, 1), 5],
          [Date.UTC(1909, 1, 1), 49],
          [Date.UTC(1910, 1, 1), 8],
          [Date.UTC(1911, 1, 1), 34],
          [Date.UTC(1912, 1, 1), 10],
          [Date.UTC(1913, 1, 1), 56],
          [Date.UTC(1914, 1, 1), 61],
          [Date.UTC(1915, 1, 1), 44],
          
        ]
      },
      {
        name: 'Abs',
        
        visible:true,
        data: [
          

        ]
      },
      {
        name: 'Acryl',
        
        visible:true,
        data: [
         
          [Date.UTC(1898, 1, 1), 1],
          [Date.UTC(1913, 1, 1), 3],
          
        ]
      },
      {
        name: 'Airbush',
        
        visible:true,
        data: [
         
        ]
      },
      {
        name: 'Aquatint',
        color:'orange',
        data: [
          
          [Date.UTC(1895, 1, 1), 30],
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1898, 1, 1), 5],
          [Date.UTC(1899, 1, 1), 2],
          [Date.UTC(1900, 1, 1), 31],
          [Date.UTC(1901, 1, 1), 6],
          [Date.UTC(1902, 1, 1), 61],
          [Date.UTC(1903, 1, 1), 40],
          [Date.UTC(1904, 1, 1), 68],
          [Date.UTC(1905, 1, 1), 77],
          [Date.UTC(1906, 1, 1), 16],
          [Date.UTC(1907, 1, 1), 295],
          [Date.UTC(1908, 1, 1), 11],
          [Date.UTC(1909, 1, 1), 102],
          [Date.UTC(1910, 1, 1), 7],
          [Date.UTC(1911, 1, 1), 60],
          [Date.UTC(1912, 1, 1), 13],
          [Date.UTC(1913, 1, 1), 16],
          [Date.UTC(1914, 1, 1), 271],
          [Date.UTC(1915, 1, 1), 38],
         
        ]
      },
      {
        name: 'Bronze',
        
        visible:true,
        data: [
          
          [Date.UTC(1895, 1, 1), 2],
          [Date.UTC(1897, 1, 1), 2],
          [Date.UTC(1899, 1, 1), 2],
          [Date.UTC(1900, 1, 1), 2],
          [Date.UTC(1902, 1, 1), 4],
          [Date.UTC(1904, 1, 1), 12],
          [Date.UTC(1907, 1, 1), 1],
          [Date.UTC(1908, 1, 1), 13],
          [Date.UTC(1909, 1, 1), 1],
          [Date.UTC(1910, 1, 1), 4],
          [Date.UTC(1911, 1, 1), 17],
          [Date.UTC(1912, 1, 1), 2],
          [Date.UTC(1914, 1, 1), 3],
          [Date.UTC(1915, 1, 1), 1],
          
        ]
      },
      {
        name: 'Carbon',
        
        visible:true,
        data: [
          
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1902, 1, 1), 1],
          [Date.UTC(1903, 1, 1), 1],
          [Date.UTC(1905, 1, 1), 2],
          [Date.UTC(1907, 1, 1), 3],
          [Date.UTC(1910, 1, 1), 1],
          

        ]
      },
      {
        name: 'Glas',
        
        visible:true,
        data: [
         
          [Date.UTC(1895, 1, 1), 1],
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1900, 1, 1), 18],
          [Date.UTC(1901, 1, 1), 5],
          [Date.UTC(1904, 1, 1), 4],
          [Date.UTC(1907, 1, 1), 2],
          [Date.UTC(1910, 1, 1), 17],
          [Date.UTC(1911, 1, 1), 1],
          [Date.UTC(1912, 1, 1), 6],
          [Date.UTC(1913, 1, 1), 23],
          [Date.UTC(1914, 1, 1), 5],
         

        ]
      },
      {
        name: 'Mylar',
        
        visible:true,
        data: [
          

        ]
      },
      {
        name: 'Photomontage',
        color:'lightblue',
        data: [
          
          [Date.UTC(1915, 1, 1), 2],
          

        ]
      },
      {
        name: 'Polyster',
        
        visible:true,
        data: [
         
        ]
      },
      {
        name: 'Video',
        color: 'darkgreen',
        data: [
          
          [Date.UTC(1897, 1, 1), 1],
          [Date.UTC(1899, 1, 1), 2],
          [Date.UTC(1901, 1, 1), 1],
          [Date.UTC(1903, 1, 1), 2],
          [Date.UTC(1904, 1, 1), 2],
          [Date.UTC(1905, 1, 1), 9],
          [Date.UTC(1906, 1, 1), 1],
          [Date.UTC(1907, 1, 1), 1],
          [Date.UTC(1908, 1, 1), 3],
          [Date.UTC(1910, 1, 1), 1],
          [Date.UTC(1911, 1, 1), 24],
          [Date.UTC(1913, 1, 1), 5],
          [Date.UTC(1914, 1, 1), 5],
          [Date.UTC(1915, 1, 1), 4],
          
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

PostModerne () {
  document.getElementById("text").innerHTML = ` Die Postmoderne (von lateinisch post ‚hinter‘, ‚nach‘) ist im allgemeinen Sinn der Zustand der abendländischen
  Gesellschaft, Kultur und Kunst „nach“ der Moderne. Im besonderen Sinn ist sie eine politisch-wissenschaftlich-
  künstlerische Richtung, die sich gegen bestimmte Institutionen, Methoden, Begriffe und Grundannahmen der
  Moderne wendet und diese aufzulösen und zu überwinden versucht. Die Vertreter der Postmoderne kritisieren
  das Innovations­streben der Moderne als lediglich habituell und automatisiert. Sie bescheinigen der Moderne ein
  illegitimes Vorherrschen eines totalitären Prinzips, das auf gesellschaftlicher Ebene Züge von Despotismus in
  sich trage und das bekämpft werden müsse. Maßgebliche Ansätze der Moderne seien eindimensional und
  gescheitert. Dem wird die Möglichkeit einer Vielfalt gleichberechtigt nebeneinander bestehender Perspektiven
  gegenübergestellt (Relativismus). Mit der Forderung nach einer prinzipiellen Offenheit von Kunst wird auch
  kritisch auf die Ästhetik der Moderne Bezug genommen. Die Diskussion über die zeitliche und inhaltliche
  Bestimmung dessen, was genau postmodern sei, wird etwa seit Anfang der 1980er Jahre geführt. Postmodernes
  Denken will nicht als bloße Zeitdiagnose verstanden werden, sondern als kritische Denkbewegung, die sich
  gegen Grundannahmen der Moderne wendet und Alternativen aufzeigt.
  `
  Highcharts.chart('secondChart', {
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
     text: 'Benutzte Materialien im Postmoderne'
   },
   subtitle: {
     text: document.ontouchstart === undefined ?
       'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
     enabled: true
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
         enabled: true
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
         enabled: true

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
        
        [Date.UTC(1957, 1, 1), 469],
        [Date.UTC(1958, 1, 1), 433],
        [Date.UTC(1959, 1, 1), 184],
        [Date.UTC(1960, 1, 1), 1284],
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1961, 1, 1), 619],
        [Date.UTC(1962, 1, 1), 645],
        [Date.UTC(1963, 1, 1), 821],
        [Date.UTC(1964, 1, 1), 1106],
        [Date.UTC(1965, 1, 1), 792],
        [Date.UTC(1966, 1, 1), 1239],
        [Date.UTC(1967, 1, 1), 1243],
        [Date.UTC(1968, 1, 1), 974],
        [Date.UTC(1969, 1, 1), 1203],
        [Date.UTC(1970, 1, 1), 623],
        [Date.UTC(1970, 1, 1), 2],
        [Date.UTC(1971, 1, 1), 887],
        [Date.UTC(1972, 1, 1), 749],
        [Date.UTC(1973, 1, 1), 1623],
        [Date.UTC(1974, 1, 1), 570],
        [Date.UTC(1975, 1, 1), 1063],
        [Date.UTC(1976, 1, 1), 557],
        [Date.UTC(1977, 1, 1), 627],
        [Date.UTC(1978, 1, 1), 447],
        [Date.UTC(1979, 1, 1), 774],
        [Date.UTC(1980, 1, 1), 551],
        

      ]
    }, {
      name: 'Filztift',
      visible:true,
      data: [
        
        [Date.UTC(1958, 1, 1), 1],
        [Date.UTC(1959, 1, 1), 2],
        [Date.UTC(1967, 1, 1), 2],
        [Date.UTC(1968, 1, 1), 2],
        [Date.UTC(1971, 1, 1), 1],
        [Date.UTC(1972, 1, 1), 3],
        [Date.UTC(1973, 1, 1), 3],
        [Date.UTC(1974, 1, 1), 1],
        [Date.UTC(1975, 1, 1), 2],
        [Date.UTC(1976, 1, 1), 8],
        [Date.UTC(1978, 1, 1), 2],
        [Date.UTC(1980, 1, 1), 1],
        

      ]
    },
    {
      name: 'Gelatinendruck',
      legendIndex:26,
      visible:true,
      data: [
        //    [Date.UTC(1927, 1, 1), 3],
        [Date.UTC(1968, 1, 1), 1],
        [Date.UTC(1969, 1, 1), 2],
        [Date.UTC(1970, 1, 1), 2],
        [Date.UTC(1971, 1, 1), 1],
        [Date.UTC(1972, 1, 1), 6],
        [Date.UTC(1974, 1, 1), 4],
        [Date.UTC(1976, 1, 1), 25],
        [Date.UTC(1979, 1, 1), 1],
        [Date.UTC(1980, 1, 1), 13],
        

      ]
    }, {
      name: 'Graphite',
      visible:true,
      data: [
        
        [Date.UTC(1957, 1, 1), 8],
        [Date.UTC(1958, 1, 1), 1],
        [Date.UTC(1959, 1, 1), 12],
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 18],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 12],
        [Date.UTC(1965, 1, 1), 20],
        [Date.UTC(1966, 1, 1), 6],
        [Date.UTC(1967, 1, 1), 23],
        [Date.UTC(1968, 1, 1), 28],
        [Date.UTC(1969, 1, 1), 13],
        [Date.UTC(1970, 1, 1), 6],
        [Date.UTC(1971, 1, 1), 22],
        [Date.UTC(1972, 1, 1), 19],
        [Date.UTC(1973, 1, 1), 27],
        [Date.UTC(1974, 1, 1), 23],
        [Date.UTC(1975, 1, 1), 8],
        [Date.UTC(1976, 1, 1), 18],
        [Date.UTC(1977, 1, 1), 6],
        [Date.UTC(1978, 1, 1), 3],
        [Date.UTC(1979, 1, 1), 13],
        [Date.UTC(1980, 1, 1), 5],
        

      ]
    }, {
      name: 'Holz',
      color:'brown',
      data: [
        
        [Date.UTC(1957, 1, 1), 24],
        [Date.UTC(1958, 1, 1), 67],
        [Date.UTC(1959, 1, 1), 27],
        [Date.UTC(1960, 1, 1), 158],
        [Date.UTC(1961, 1, 1), 233],
        [Date.UTC(1962, 1, 1), 53],
        [Date.UTC(1963, 1, 1), 46],
        [Date.UTC(1964, 1, 1), 69],
        [Date.UTC(1965, 1, 1), 80],
        [Date.UTC(1966, 1, 1), 228],
        [Date.UTC(1967, 1, 1), 103],
        [Date.UTC(1968, 1, 1), 115],
        [Date.UTC(1969, 1, 1), 50],
        [Date.UTC(1970, 1, 1), 66],
        [Date.UTC(1971, 1, 1), 12],
        [Date.UTC(1972, 1, 1), 10],
        [Date.UTC(1973, 1, 1), 44],
        [Date.UTC(1974, 1, 1), 44],
        [Date.UTC(1975, 1, 1), 29],
        [Date.UTC(1976, 1, 1), 20],
        [Date.UTC(1977, 1, 1), 18],
        [Date.UTC(1978, 1, 1), 12],
        [Date.UTC(1979, 1, 1), 14],
        [Date.UTC(1980, 1, 1), 20],
        
      ]
    }, {
      name: 'Kugelschreiber',
      visible:true,
      data: [
        
        [Date.UTC(1957, 1, 1), 2],
        [Date.UTC(1958, 1, 1), 9],
        [Date.UTC(1959, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 10],
        [Date.UTC(1961, 1, 1), 5],
        [Date.UTC(1962, 1, 1), 7],
        [Date.UTC(1963, 1, 1), 13],
        [Date.UTC(1964, 1, 1), 24],
        [Date.UTC(1965, 1, 1), 10],
        [Date.UTC(1966, 1, 1), 11],
        [Date.UTC(1967, 1, 1), 16],
        [Date.UTC(1968, 1, 1), 8],
        [Date.UTC(1969, 1, 1), 13],
        [Date.UTC(1970, 1, 1), 13],
        [Date.UTC(1971, 1, 1), 4],
        [Date.UTC(1972, 1, 1), 1],
        [Date.UTC(1973, 1, 1), 4],
        [Date.UTC(1974, 1, 1), 4],
        [Date.UTC(1975, 1, 1), 29],
        [Date.UTC(1976, 1, 1), 6],
        [Date.UTC(1977, 1, 1), 1],
        [Date.UTC(1978, 1, 1), 3],
        [Date.UTC(1979, 1, 1), 9],
        [Date.UTC(1980, 1, 1), 5],
        

      ]
    },
    {
      name: 'Öl',
      visible:true,
      data: [
        
        [Date.UTC(1957, 1, 1), 21],
        [Date.UTC(1958, 1, 1), 27],
        [Date.UTC(1959, 1, 1), 23],
        [Date.UTC(1960, 1, 1), 29],
        [Date.UTC(1961, 1, 1), 27],
        [Date.UTC(1962, 1, 1), 30],
        [Date.UTC(1963, 1, 1), 23],
        [Date.UTC(1964, 1, 1), 35],
        [Date.UTC(1965, 1, 1), 22],
        [Date.UTC(1966, 1, 1), 37],
        [Date.UTC(1967, 1, 1), 34],
        [Date.UTC(1968, 1, 1), 12],
        [Date.UTC(1969, 1, 1), 47],
        [Date.UTC(1970, 1, 1), 9],
        [Date.UTC(1971, 1, 1), 14],
        [Date.UTC(1972, 1, 1), 11],
        [Date.UTC(1973, 1, 1), 19],
        [Date.UTC(1974, 1, 1), 20],
        [Date.UTC(1975, 1, 1), 18],
        [Date.UTC(1976, 1, 1), 15],
        [Date.UTC(1977, 1, 1), 12],
        [Date.UTC(1978, 1, 1), 5],
        [Date.UTC(1979, 1, 1), 9],
        [Date.UTC(1980, 1, 1), 8],
        
      ]
    },
    {
      name: 'Papier',
      color:'yellow',
      data: [
        
        [Date.UTC(1957, 1, 1), 74],
        [Date.UTC(1958, 1, 1), 90],
        [Date.UTC(1959, 1, 1), 60],
        [Date.UTC(1960, 1, 1), 170],
        [Date.UTC(1961, 1, 1), 87],
        [Date.UTC(1962, 1, 1), 193],
        [Date.UTC(1963, 1, 1), 200],
        [Date.UTC(1964, 1, 1), 391],
        [Date.UTC(1965, 1, 1), 180],
        [Date.UTC(1966, 1, 1), 348],
        [Date.UTC(1967, 1, 1), 550],
        [Date.UTC(1968, 1, 1), 228],
        [Date.UTC(1969, 1, 1), 281],
        [Date.UTC(1970, 1, 1), 194],
        [Date.UTC(1970, 1, 1), 1],
        [Date.UTC(1971, 1, 1), 165],
        [Date.UTC(1972, 1, 1), 134],
        [Date.UTC(1973, 1, 1), 300],
        [Date.UTC(1974, 1, 1), 188],
        [Date.UTC(1975, 1, 1), 208],
        [Date.UTC(1976, 1, 1), 230],
        [Date.UTC(1977, 1, 1), 188],
        [Date.UTC(1978, 1, 1), 150],
        [Date.UTC(1979, 1, 1), 96],
        [Date.UTC(1980, 1, 1), 116],
        

      ]
    },
    {
      name: 'Pastel',
      visible:true,
      data: [
        
        [Date.UTC(1957, 1, 1), 1],
        [Date.UTC(1958, 1, 1), 2],
        [Date.UTC(1959, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1961, 1, 1), 2],
        [Date.UTC(1962, 1, 1), 9],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 10],
        [Date.UTC(1965, 1, 1), 5],
        [Date.UTC(1966, 1, 1), 8],
        [Date.UTC(1967, 1, 1), 15],
        [Date.UTC(1968, 1, 1), 3],
        [Date.UTC(1969, 1, 1), 5],
        [Date.UTC(1970, 1, 1), 4],
        [Date.UTC(1971, 1, 1), 5],
        [Date.UTC(1972, 1, 1), 3],
        [Date.UTC(1973, 1, 1), 40],
        [Date.UTC(1974, 1, 1), 7],
        [Date.UTC(1975, 1, 1), 6],
        [Date.UTC(1976, 1, 1), 7],
        [Date.UTC(1977, 1, 1), 2],
        [Date.UTC(1978, 1, 1), 7],
        [Date.UTC(1979, 1, 1), 2],
        [Date.UTC(1980, 1, 1), 9],
        

      ]
    },
    {
      name: 'Stahl',
      visible:true,
      data: [
        
        [Date.UTC(1957, 1, 1), 9],
        [Date.UTC(1958, 1, 1), 15],
        [Date.UTC(1959, 1, 1), 6],
        [Date.UTC(1960, 1, 1), 36],
        [Date.UTC(1961, 1, 1), 14],
        [Date.UTC(1962, 1, 1), 13],
        [Date.UTC(1963, 1, 1), 12],
        [Date.UTC(1964, 1, 1), 21],
        [Date.UTC(1965, 1, 1), 21],
        [Date.UTC(1966, 1, 1), 20],
        [Date.UTC(1967, 1, 1), 7],
        [Date.UTC(1968, 1, 1), 21],
        [Date.UTC(1969, 1, 1), 16],
        [Date.UTC(1970, 1, 1), 11],
        [Date.UTC(1971, 1, 1), 10],
        [Date.UTC(1972, 1, 1), 6],
        [Date.UTC(1973, 1, 1), 11],
        [Date.UTC(1974, 1, 1), 12],
        [Date.UTC(1975, 1, 1), 12],
        [Date.UTC(1976, 1, 1), 5],
        [Date.UTC(1977, 1, 1), 5],
        [Date.UTC(1978, 1, 1), 14],
        [Date.UTC(1979, 1, 1), 6],
        [Date.UTC(1980, 1, 1), 16],
        

      ]
    },
    {
      name: 'Stift',
      color:'violet',

      data: [
        
        [Date.UTC(1957, 1, 1), 62],
        [Date.UTC(1958, 1, 1), 53],
        [Date.UTC(1959, 1, 1), 20],
        [Date.UTC(1960, 1, 1), 90],
        [Date.UTC(1961, 1, 1), 30],
        [Date.UTC(1962, 1, 1), 70],
        [Date.UTC(1963, 1, 1), 27],
        [Date.UTC(1964, 1, 1), 175],
        [Date.UTC(1965, 1, 1), 63],
        [Date.UTC(1966, 1, 1), 207],
        [Date.UTC(1967, 1, 1), 201],
        [Date.UTC(1968, 1, 1), 99],
        [Date.UTC(1969, 1, 1), 104],
        [Date.UTC(1970, 1, 1), 165],
        [Date.UTC(1971, 1, 1), 69],
        [Date.UTC(1972, 1, 1), 35],
        [Date.UTC(1973, 1, 1), 228],
        [Date.UTC(1974, 1, 1), 85],
        [Date.UTC(1975, 1, 1), 112],
        [Date.UTC(1976, 1, 1), 95],
        [Date.UTC(1977, 1, 1), 79],
        [Date.UTC(1978, 1, 1), 36],
        [Date.UTC(1979, 1, 1), 34],
        [Date.UTC(1980, 1, 1), 56],
        

      ]
    },
    {
      name: 'Tinte',
      visible:true,
      data: [
        
        [Date.UTC(1957, 1, 1), 89],
        [Date.UTC(1958, 1, 1), 71],
        [Date.UTC(1959, 1, 1), 40],
        [Date.UTC(1960, 1, 1), 115],
        [Date.UTC(1961, 1, 1), 59],
        [Date.UTC(1962, 1, 1), 79],
        [Date.UTC(1963, 1, 1), 158],
        [Date.UTC(1964, 1, 1), 95],
        [Date.UTC(1965, 1, 1), 59],
        [Date.UTC(1966, 1, 1), 133],
        [Date.UTC(1967, 1, 1), 226],
        [Date.UTC(1968, 1, 1), 154],
        [Date.UTC(1969, 1, 1), 131],
        [Date.UTC(1970, 1, 1), 116],
        [Date.UTC(1971, 1, 1), 85],
        [Date.UTC(1972, 1, 1), 78],
        [Date.UTC(1973, 1, 1), 76],
        [Date.UTC(1974, 1, 1), 127],
        [Date.UTC(1975, 1, 1), 105],
        [Date.UTC(1976, 1, 1), 117],
        [Date.UTC(1977, 1, 1), 100],
        [Date.UTC(1978, 1, 1), 60],
        [Date.UTC(1979, 1, 1), 29],
        [Date.UTC(1980, 1, 1), 73],
        
      ]
    },
    {
      name: 'Visitenkarte',
      visible:true,
      data: [
        
        [Date.UTC(1959, 1, 1), 8],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 15],
        [Date.UTC(1965, 1, 1), 19],
        [Date.UTC(1966, 1, 1), 12],
        [Date.UTC(1967, 1, 1), 93],
        [Date.UTC(1968, 1, 1), 14],
        [Date.UTC(1969, 1, 1), 6],
        [Date.UTC(1970, 1, 1), 2],
        [Date.UTC(1971, 1, 1), 3],
        [Date.UTC(1972, 1, 1), 1],
        [Date.UTC(1973, 1, 1), 5],
        [Date.UTC(1975, 1, 1), 6],
        [Date.UTC(1978, 1, 1), 3],
        [Date.UTC(1979, 1, 1), 4],
        [Date.UTC(1980, 1, 1), 1],
        

      ]
    },
    {
      name: 'Wasserfarben',
      visible:true,
      data: [
        
        [Date.UTC(1957, 1, 1), 11],
        [Date.UTC(1958, 1, 1), 43],
        [Date.UTC(1959, 1, 1), 9],
        [Date.UTC(1960, 1, 1), 34],
        [Date.UTC(1961, 1, 1), 32],
        [Date.UTC(1962, 1, 1), 18],
        [Date.UTC(1963, 1, 1), 24],
        [Date.UTC(1964, 1, 1), 102],
        [Date.UTC(1965, 1, 1), 57],
        [Date.UTC(1966, 1, 1), 100],
        [Date.UTC(1967, 1, 1), 77],
        [Date.UTC(1968, 1, 1), 56],
        [Date.UTC(1969, 1, 1), 41],
        [Date.UTC(1970, 1, 1), 33],
        [Date.UTC(1971, 1, 1), 23],
        [Date.UTC(1972, 1, 1), 21],
        [Date.UTC(1973, 1, 1), 33],
        [Date.UTC(1974, 1, 1), 34],
        [Date.UTC(1975, 1, 1), 37],
        [Date.UTC(1976, 1, 1), 39],
        [Date.UTC(1977, 1, 1), 78],
        [Date.UTC(1978, 1, 1), 54],
        [Date.UTC(1979, 1, 1), 27],
        [Date.UTC(1980, 1, 1), 19],
        
      ]
    },
    {
      name: 'Abs',
      visible:true,
      data: [
        

        [Date.UTC(1957, 1, 1), 1],
        [Date.UTC(1958, 1, 1), 2],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1962, 1, 1), 2],
        [Date.UTC(1963, 1, 1), 1],
        [Date.UTC(1966, 1, 1), 5],
        [Date.UTC(1967, 1, 1), 3],
        [Date.UTC(1968, 1, 1), 4],
        [Date.UTC(1969, 1, 1), 1],
        [Date.UTC(1970, 1, 1), 1],
        [Date.UTC(1971, 1, 1), 4],
        [Date.UTC(1972, 1, 1), 7],
        [Date.UTC(1973, 1, 1), 13],
        [Date.UTC(1974, 1, 1), 5],
        [Date.UTC(1975, 1, 1), 4],
        [Date.UTC(1976, 1, 1), 2],
        [Date.UTC(1977, 1, 1), 5],
        [Date.UTC(1978, 1, 1), 5],
        [Date.UTC(1979, 1, 1), 1],
        [Date.UTC(1980, 1, 1), 2],
        

      ]
    },
    {
      name: 'Acryl',
      visible:true,
      data: [
        
        [Date.UTC(1957, 1, 1), 1],
        [Date.UTC(1958, 1, 1), 14],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 10],
        [Date.UTC(1964, 1, 1), 6],
        [Date.UTC(1965, 1, 1), 3],
        [Date.UTC(1966, 1, 1), 10],
        [Date.UTC(1967, 1, 1), 7],
        [Date.UTC(1968, 1, 1), 12],
        [Date.UTC(1969, 1, 1), 8],
        [Date.UTC(1970, 1, 1), 7],
        [Date.UTC(1971, 1, 1), 2],
        [Date.UTC(1972, 1, 1), 4],
        [Date.UTC(1973, 1, 1), 7],
        [Date.UTC(1974, 1, 1), 7],
        [Date.UTC(1975, 1, 1), 5],
        [Date.UTC(1976, 1, 1), 7],
        [Date.UTC(1977, 1, 1), 2],
        [Date.UTC(1978, 1, 1), 3],
        [Date.UTC(1979, 1, 1), 7],
        [Date.UTC(1980, 1, 1), 3],
        
      ]
    },
    {
      name: 'Airbush',
      visible:true,
      data: [
        
        [Date.UTC(1965, 1, 1), 1],
        [Date.UTC(1966, 1, 1), 1],
        [Date.UTC(1968, 1, 1), 4],
        [Date.UTC(1969, 1, 1), 1],
        [Date.UTC(1970, 1, 1), 1],
        [Date.UTC(1971, 1, 1), 1],
        [Date.UTC(1972, 1, 1), 1],
        [Date.UTC(1973, 1, 1), 1],
        [Date.UTC(1974, 1, 1), 4],
        [Date.UTC(1975, 1, 1), 3],
        [Date.UTC(1976, 1, 1), 1],
        [Date.UTC(1979, 1, 1), 4],
        [Date.UTC(1980, 1, 1), 1],
        
      ]
    },
    {
      name: 'Aquatint',
      color:'orange',
      data: [
        
        [Date.UTC(1957, 1, 1), 43],
        [Date.UTC(1958, 1, 1), 92],
        [Date.UTC(1959, 1, 1), 16],
        [Date.UTC(1960, 1, 1), 341],
        [Date.UTC(1961, 1, 1), 99],
        [Date.UTC(1962, 1, 1), 87],
        [Date.UTC(1963, 1, 1), 118],
        [Date.UTC(1964, 1, 1), 210],
        [Date.UTC(1965, 1, 1), 103],
        [Date.UTC(1966, 1, 1), 196],
        [Date.UTC(1967, 1, 1), 519],
        [Date.UTC(1968, 1, 1), 134],
        [Date.UTC(1969, 1, 1), 101],
        [Date.UTC(1970, 1, 1), 113],
        [Date.UTC(1971, 1, 1), 61],
        [Date.UTC(1972, 1, 1), 124],
        [Date.UTC(1973, 1, 1), 159],
        [Date.UTC(1974, 1, 1), 57],
        [Date.UTC(1975, 1, 1), 223],
        [Date.UTC(1976, 1, 1), 105],
        [Date.UTC(1977, 1, 1), 98],
        [Date.UTC(1978, 1, 1), 85],
        [Date.UTC(1979, 1, 1), 63],
        [Date.UTC(1980, 1, 1), 83],
        
      ]
    },
    {
      name: 'Bronze',
      color: 'black',
      visible:true,
      data: [
        
        [Date.UTC(1957, 1, 1), 1],
        [Date.UTC(1958, 1, 1), 4],
        [Date.UTC(1959, 1, 1), 3],
        [Date.UTC(1960, 1, 1), 5],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 2],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 1],
        [Date.UTC(1965, 1, 1), 3],
        [Date.UTC(1966, 1, 1), 1],
        [Date.UTC(1967, 1, 1), 2],
        [Date.UTC(1968, 1, 1), 2],
        [Date.UTC(1969, 1, 1), 4],
        [Date.UTC(1970, 1, 1), 4],
        [Date.UTC(1972, 1, 1), 1],
        [Date.UTC(1973, 1, 1), 1],
        [Date.UTC(1974, 1, 1), 2],
        [Date.UTC(1975, 1, 1), 1],
        [Date.UTC(1976, 1, 1), 1],
        [Date.UTC(1977, 1, 1), 1],
        [Date.UTC(1978, 1, 1), 1],
        [Date.UTC(1979, 1, 1), 1],
        [Date.UTC(1980, 1, 1), 5],
        
      ]
    },
    {
      name: 'Carbon',
      visible:true,
      data: [
        
        [Date.UTC(1960, 1, 1), 6],
        [Date.UTC(1961, 1, 1), 1],
        [Date.UTC(1962, 1, 1), 3],
        [Date.UTC(1963, 1, 1), 4],
        [Date.UTC(1964, 1, 1), 2],
        [Date.UTC(1965, 1, 1), 7],
        [Date.UTC(1966, 1, 1), 1],
        [Date.UTC(1967, 1, 1), 1],
        [Date.UTC(1968, 1, 1), 2],
        [Date.UTC(1970, 1, 1), 4],
        [Date.UTC(1971, 1, 1), 1],
        [Date.UTC(1972, 1, 1), 3],
        [Date.UTC(1973, 1, 1), 11],
        [Date.UTC(1974, 1, 1), 2],
        [Date.UTC(1975, 1, 1), 1],
        [Date.UTC(1977, 1, 1), 2],
        [Date.UTC(1978, 1, 1), 3],
        

      ]
    },
    {
      name: 'Glas',
      visible:true,
      data: [
        
        [Date.UTC(1957, 1, 1), 5],
        [Date.UTC(1958, 1, 1), 8],
        [Date.UTC(1959, 1, 1), 7],
        [Date.UTC(1960, 1, 1), 9],
        [Date.UTC(1961, 1, 1), 13],
        [Date.UTC(1962, 1, 1), 16],
        [Date.UTC(1963, 1, 1), 13],
        [Date.UTC(1964, 1, 1), 10],
        [Date.UTC(1965, 1, 1), 29],
        [Date.UTC(1966, 1, 1), 34],
        [Date.UTC(1967, 1, 1), 21],
        [Date.UTC(1968, 1, 1), 20],
        [Date.UTC(1969, 1, 1), 25],
        [Date.UTC(1970, 1, 1), 10],
        [Date.UTC(1971, 1, 1), 12],
        [Date.UTC(1972, 1, 1), 20],
        [Date.UTC(1973, 1, 1), 15],
        [Date.UTC(1974, 1, 1), 14],
        [Date.UTC(1975, 1, 1), 5],
        [Date.UTC(1976, 1, 1), 10],
        [Date.UTC(1977, 1, 1), 4],
        [Date.UTC(1978, 1, 1), 5],
        [Date.UTC(1979, 1, 1), 8],
        [Date.UTC(1980, 1, 1), 9],
        

      ]
    },
    {
      name: 'Mylar',
      visible:true,
      data: [
        
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1965, 1, 1), 4],
        [Date.UTC(1966, 1, 1), 3],
        [Date.UTC(1968, 1, 1), 3],
        [Date.UTC(1969, 1, 1), 1],
        [Date.UTC(1970, 1, 1), 1],
        [Date.UTC(1971, 1, 1), 1],
        [Date.UTC(1972, 1, 1), 22],
        [Date.UTC(1973, 1, 1), 1],
        [Date.UTC(1975, 1, 1), 1],
        [Date.UTC(1976, 1, 1), 4],
        [Date.UTC(1980, 1, 1), 10],
        

      ]
    },
    {
      name: 'Photomontage',
      color:'lightblue',
      data: [
        
        [Date.UTC(1959, 1, 1), 1],
        [Date.UTC(1960, 1, 1), 1],
        [Date.UTC(1966, 1, 1), 1],
        [Date.UTC(1967, 1, 1), 21],
        [Date.UTC(1968, 1, 1), 1],
        [Date.UTC(1971, 1, 1), 3],
        [Date.UTC(1973, 1, 1), 1],
        [Date.UTC(1974, 1, 1), 1],
        [Date.UTC(1976, 1, 1), 8],
        

      ]
    },
    {
      name: 'Polyster',
      visible:true,
      data: [
        
        [Date.UTC(1958, 1, 1), 1],
        [Date.UTC(1959, 1, 1), 4],
        [Date.UTC(1960, 1, 1), 2],
        [Date.UTC(1962, 1, 1), 1],
        [Date.UTC(1963, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 1],
        [Date.UTC(1965, 1, 1), 3],
        [Date.UTC(1966, 1, 1), 2],
        [Date.UTC(1967, 1, 1), 4],
        [Date.UTC(1968, 1, 1), 3],
        [Date.UTC(1969, 1, 1), 3],
        [Date.UTC(1970, 1, 1), 3],
        [Date.UTC(1971, 1, 1), 2],
        [Date.UTC(1972, 1, 1), 1],
        [Date.UTC(1974, 1, 1), 4],
        [Date.UTC(1975, 1, 1), 2],
        [Date.UTC(1976, 1, 1), 1],
        [Date.UTC(1979, 1, 1), 6],
       
      ]
    },
    {
      name: 'Video',
      color: 'darkgreen',
      data: [
        
        [Date.UTC(1957, 1, 1), 73],
        [Date.UTC(1958, 1, 1), 55],
        [Date.UTC(1959, 1, 1), 17],
        [Date.UTC(1960, 1, 1), 37],
        [Date.UTC(1961, 1, 1), 14],
        [Date.UTC(1962, 1, 1), 55],
        [Date.UTC(1963, 1, 1), 23],
        [Date.UTC(1964, 1, 1), 15],
        [Date.UTC(1965, 1, 1), 18],
        [Date.UTC(1966, 1, 1), 54],
        [Date.UTC(1967, 1, 1), 34],
        [Date.UTC(1968, 1, 1), 90],
        [Date.UTC(1969, 1, 1), 44],
        [Date.UTC(1970, 1, 1), 66],
        [Date.UTC(1971, 1, 1), 58],
        [Date.UTC(1972, 1, 1), 29],
        [Date.UTC(1973, 1, 1), 24],
        [Date.UTC(1974, 1, 1), 84],
        [Date.UTC(1975, 1, 1), 39],
        [Date.UTC(1976, 1, 1), 62],
        [Date.UTC(1977, 1, 1), 32],
        [Date.UTC(1978, 1, 1), 34],
        [Date.UTC(1979, 1, 1), 49],
        [Date.UTC(1980, 1, 1), 62],
        
        [Date.UTC(1957, 1, 1), 24],
        [Date.UTC(1960, 1, 1), 26],
        [Date.UTC(1961, 1, 1), 3],
        [Date.UTC(1964, 1, 1), 7],
        [Date.UTC(1965, 1, 1), 11],
        [Date.UTC(1966, 1, 1), 41],
        [Date.UTC(1967, 1, 1), 20],
        [Date.UTC(1968, 1, 1), 26],
        [Date.UTC(1969, 1, 1), 30],
        [Date.UTC(1970, 1, 1), 46],
        [Date.UTC(1971, 1, 1), 20],
        [Date.UTC(1972, 1, 1), 60],
        [Date.UTC(1973, 1, 1), 60],
        [Date.UTC(1974, 1, 1), 130],
        [Date.UTC(1975, 1, 1), 62],
        [Date.UTC(1976, 1, 1), 85],
        [Date.UTC(1977, 1, 1), 36],
        [Date.UTC(1978, 1, 1), 56],
        [Date.UTC(1979, 1, 1), 91],
        [Date.UTC(1980, 1, 1), 77],
        
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
 
 Bougleois (){
  document.getElementById("text").innerHTML = "";
  Highcharts.chart('secondChart', {
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
 
   Surrealismuss () {
    document.getElementById("text").innerHTML = ` Surrealismus bezeichnet eine geistige Bewegung, die sich seit den 1920er Jahren als Lebenshaltung und
    Lebenskunst gegen traditionelle Normen äußert. Sie findet bis in die Gegenwart sowohl philosophisch als auch
    in den Medien, Literatur, Kunst und Film ihren Ausdruck. Im Unterschied zum satirischen Ansatz des Dada
    werden gegen die herrschenden Auffassungen vor allem psychoanalytisch begründete Theorien verarbeitet.
    Traumhaftes, Unbewusstes, Absurdes und Phantastisches sind daher Merkmale der literarischen, bildnerischen
    und filmischen Ausdrucksmittel. Auf diese Weise sollen neue Erfahrungen gemacht und neue Erkenntnisse
    gewonnen werden.
    `
  Highcharts.chart('secondChart', {
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
      text: 'Benutzte Materialien und Werkzeuge im Surrealismus'
    },
    subtitle: {
      text: document.ontouchstart === undefined ?
        'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
      enabled: true
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
          enabled: true
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
          enabled: true

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
       
          [Date.UTC(1924, 1, 1), 250],
          [Date.UTC(1925, 1, 1), 200],
          [Date.UTC(1926, 1, 1), 731],
          [Date.UTC(1927, 1, 1), 728],
          [Date.UTC(1928, 1, 1), 158],
          [Date.UTC(1929, 1, 1), 432],
          [Date.UTC(1930, 1, 1), 760],
          [Date.UTC(1931, 1, 1), 206],
          [Date.UTC(1932, 1, 1), 500],
          [Date.UTC(1933, 1, 1), 777],
          [Date.UTC(1934, 1, 1), 173],
          [Date.UTC(1935, 1, 1), 345],
          [Date.UTC(1936, 1, 1), 899],
          [Date.UTC(1937, 1, 1), 371],
          [Date.UTC(1938, 1, 1), 577],
          [Date.UTC(1939, 1, 1), 706],
          [Date.UTC(1940, 1, 1), 314],
          [Date.UTC(1941, 1, 1), 557],
          [Date.UTC(1942, 1, 1), 490],
          [Date.UTC(1943, 1, 1), 1625],
          [Date.UTC(1944, 1, 1), 305],
          [Date.UTC(1945, 1, 1), 463],
        

        ]
      }, {
        name: 'Filztift',
        
        visible:true,
        data: [
       

        ]
      },
      {
        name: 'Gelatinendruck',
        
        legendIndex:26,
        visible:true,
        data: [
          //    [Date.UTC(1927, 1, 1), 3],
    

        ]
      }, {
        name: 'Graphite',
        
        visible:true,
        data: [
     
          [Date.UTC(1925, 1, 1), 2],
          [Date.UTC(1926, 1, 1), 2],
          [Date.UTC(1927, 1, 1), 44],
          [Date.UTC(1928, 1, 1), 1],
          [Date.UTC(1929, 1, 1), 1],
          [Date.UTC(1931, 1, 1), 3],
          [Date.UTC(1933, 1, 1), 3],
          [Date.UTC(1937, 1, 1), 45],
          [Date.UTC(1938, 1, 1), 7],
          [Date.UTC(1939, 1, 1), 8],
          [Date.UTC(1940, 1, 1), 2],
          [Date.UTC(1945, 1, 1), 13],
      

        ]
      }, {
        name: 'Holz',
        color:'brown',
        data: [
         
          [Date.UTC(1924, 1, 1), 8],
          [Date.UTC(1925, 1, 1), 43],
          [Date.UTC(1926, 1, 1), 222],
          [Date.UTC(1927, 1, 1), 80],
          [Date.UTC(1928, 1, 1), 81],
          [Date.UTC(1929, 1, 1), 24],
          [Date.UTC(1930, 1, 1), 92],
          [Date.UTC(1931, 1, 1), 40],
          [Date.UTC(1932, 1, 1), 26],
          [Date.UTC(1933, 1, 1), 61],
          [Date.UTC(1934, 1, 1), 31],
          [Date.UTC(1935, 1, 1), 168],
          [Date.UTC(1936, 1, 1), 56],
          [Date.UTC(1937, 1, 1), 67],
          [Date.UTC(1938, 1, 1), 122],
          [Date.UTC(1939, 1, 1), 25],
          [Date.UTC(1940, 1, 1), 18],
          [Date.UTC(1941, 1, 1), 59],
          [Date.UTC(1942, 1, 1), 41],
          [Date.UTC(1943, 1, 1), 41],
          [Date.UTC(1944, 1, 1), 16],
          [Date.UTC(1945, 1, 1), 49],
      
        ]
      }, {
        name: 'Kugelschreiber',
        
        visible:true,
        data: [
       
          [Date.UTC(1926, 1, 1), 1],
          [Date.UTC(1927, 1, 1), 3],
          [Date.UTC(1931, 1, 1), 5],
          [Date.UTC(1933, 1, 1), 1],
          [Date.UTC(1939, 1, 1), 1],
          [Date.UTC(1940, 1, 1), 2],
          [Date.UTC(1942, 1, 1), 1],
          [Date.UTC(1943, 1, 1), 1],
          

        ]
      },
      {
        name: 'Öl',
        
        visible:true,
        data: [
       
          [Date.UTC(1924, 1, 1), 15],
          [Date.UTC(1925, 1, 1), 22],
          [Date.UTC(1926, 1, 1), 32],
          [Date.UTC(1927, 1, 1), 91],
          [Date.UTC(1928, 1, 1), 11],
          [Date.UTC(1929, 1, 1), 7],
          [Date.UTC(1930, 1, 1), 18],
          [Date.UTC(1931, 1, 1), 19],
          [Date.UTC(1932, 1, 1), 26],
          [Date.UTC(1933, 1, 1), 45],
          [Date.UTC(1934, 1, 1), 27],
          [Date.UTC(1935, 1, 1), 21],
          [Date.UTC(1936, 1, 1), 34],
          [Date.UTC(1937, 1, 1), 22],
          [Date.UTC(1938, 1, 1), 42],
          [Date.UTC(1939, 1, 1), 11],
          [Date.UTC(1940, 1, 1), 25],
          [Date.UTC(1941, 1, 1), 20],
          [Date.UTC(1942, 1, 1), 19],
          [Date.UTC(1943, 1, 1), 25],
          [Date.UTC(1944, 1, 1), 14],
          [Date.UTC(1945, 1, 1), 17],
        ]
      },
      {
        name: 'Papier',
        color:'yellow',
        data: [
   
          [Date.UTC(1924, 1, 1), 19],
          [Date.UTC(1925, 1, 1), 72],
          [Date.UTC(1926, 1, 1), 70],
          [Date.UTC(1927, 1, 1), 2306],
          [Date.UTC(1928, 1, 1), 19],
          [Date.UTC(1929, 1, 1), 30],
          [Date.UTC(1930, 1, 1), 44],
          [Date.UTC(1931, 1, 1), 64],
          [Date.UTC(1932, 1, 1), 66],
          [Date.UTC(1933, 1, 1), 158],
          [Date.UTC(1934, 1, 1), 37],
          [Date.UTC(1935, 1, 1), 69],
          [Date.UTC(1936, 1, 1), 126],
          [Date.UTC(1937, 1, 1), 177],
          [Date.UTC(1938, 1, 1), 64],
          [Date.UTC(1939, 1, 1), 40],
          [Date.UTC(1940, 1, 1), 46],
          [Date.UTC(1941, 1, 1), 42],
          [Date.UTC(1942, 1, 1), 52],
          [Date.UTC(1943, 1, 1), 209],
          [Date.UTC(1944, 1, 1), 29],
          [Date.UTC(1945, 1, 1), 86],
         

        ]
      },
      {
        name: 'Pastel',
        visible:true,
        
        data: [
         
          [Date.UTC(1924, 1, 1), 1],
          [Date.UTC(1925, 1, 1), 1],
          [Date.UTC(1926, 1, 1), 2],
          [Date.UTC(1927, 1, 1), 8],
          [Date.UTC(1930, 1, 1), 1],
          [Date.UTC(1931, 1, 1), 2],
          [Date.UTC(1932, 1, 1), 1],
          [Date.UTC(1934, 1, 1), 1],
          [Date.UTC(1936, 1, 1), 8],
          [Date.UTC(1937, 1, 1), 1],
          [Date.UTC(1938, 1, 1), 3],
          [Date.UTC(1939, 1, 1), 1],
          [Date.UTC(1941, 1, 1), 5],
          [Date.UTC(1942, 1, 1), 1],
          [Date.UTC(1945, 1, 1), 1],
      

        ]
      },
      {
        name: 'Stahl',
        
        visible:true,
        data: [
        
          [Date.UTC(1924, 1, 1), 1],
          [Date.UTC(1926, 1, 1), 7],
          [Date.UTC(1927, 1, 1), 37],
          [Date.UTC(1929, 1, 1), 2],
          [Date.UTC(1930, 1, 1), 4],
          [Date.UTC(1931, 1, 1), 4],
          [Date.UTC(1932, 1, 1), 6],
          [Date.UTC(1933, 1, 1), 8],
          [Date.UTC(1934, 1, 1), 19],
          [Date.UTC(1935, 1, 1), 19],
          [Date.UTC(1936, 1, 1), 19],
          [Date.UTC(1937, 1, 1), 31],
          [Date.UTC(1938, 1, 1), 8],
          [Date.UTC(1939, 1, 1), 3],
          [Date.UTC(1940, 1, 1), 11],
          [Date.UTC(1941, 1, 1), 21],
          [Date.UTC(1942, 1, 1), 16],
          [Date.UTC(1943, 1, 1), 27],
          [Date.UTC(1944, 1, 1), 12],
          [Date.UTC(1945, 1, 1), 6],
         
        ]
      },
      {
        name: 'Stift',
        color:'violet',

        data: [
          [Date.UTC(1924, 1, 1), 11],
          [Date.UTC(1925, 1, 1), 33],
          [Date.UTC(1926, 1, 1), 31],
          [Date.UTC(1927, 1, 1), 2116],
          [Date.UTC(1928, 1, 1), 9],
          [Date.UTC(1929, 1, 1), 11],
          [Date.UTC(1930, 1, 1), 25],
          [Date.UTC(1931, 1, 1), 28],
          [Date.UTC(1932, 1, 1), 33],
          [Date.UTC(1933, 1, 1), 92],
          [Date.UTC(1934, 1, 1), 20],
          [Date.UTC(1935, 1, 1), 24],
          [Date.UTC(1936, 1, 1), 84],
          [Date.UTC(1937, 1, 1), 19],
          [Date.UTC(1938, 1, 1), 33],
          [Date.UTC(1939, 1, 1), 22],
          [Date.UTC(1940, 1, 1), 20],
          [Date.UTC(1941, 1, 1), 14],
          [Date.UTC(1942, 1, 1), 22],
          [Date.UTC(1943, 1, 1), 26],
          [Date.UTC(1944, 1, 1), 2],
          [Date.UTC(1945, 1, 1), 15],
        

        ]
      },
      {
        name: 'Tinte',
        
        visible:true,
        data: [
      
          [Date.UTC(1925, 1, 1), 31],
          [Date.UTC(1926, 1, 1), 32],
          [Date.UTC(1927, 1, 1), 514],
          [Date.UTC(1928, 1, 1), 10],
          [Date.UTC(1929, 1, 1), 17],
          [Date.UTC(1930, 1, 1), 15],
          [Date.UTC(1931, 1, 1), 28],
          [Date.UTC(1932, 1, 1), 33],
          [Date.UTC(1933, 1, 1), 91],
          [Date.UTC(1934, 1, 1), 18],
          [Date.UTC(1935, 1, 1), 34],
          [Date.UTC(1936, 1, 1), 79],
          [Date.UTC(1937, 1, 1), 53],
          [Date.UTC(1938, 1, 1), 27],
          [Date.UTC(1939, 1, 1), 25],
          [Date.UTC(1940, 1, 1), 14],
          [Date.UTC(1941, 1, 1), 28],
          [Date.UTC(1942, 1, 1), 39],
          [Date.UTC(1943, 1, 1), 175],
          [Date.UTC(1944, 1, 1), 9],
          [Date.UTC(1945, 1, 1), 86],
 
        ]
      },
      {
        name: 'Visitenkarte',
        visible:true,
        
        data: [
       

        ]
      },
      {
        name: 'Wasserfarben',
        visible:true,
        
        data: [
     
          [Date.UTC(1924, 1, 1), 11],
          [Date.UTC(1925, 1, 1), 12],
          [Date.UTC(1926, 1, 1), 50],
          [Date.UTC(1927, 1, 1), 204],
          [Date.UTC(1928, 1, 1), 6],
          [Date.UTC(1929, 1, 1), 6],
          [Date.UTC(1930, 1, 1), 19],
          [Date.UTC(1931, 1, 1), 29],
          [Date.UTC(1932, 1, 1), 43],
          [Date.UTC(1933, 1, 1), 79],
          [Date.UTC(1934, 1, 1), 16],
          [Date.UTC(1935, 1, 1), 48],
          [Date.UTC(1936, 1, 1), 184],
          [Date.UTC(1937, 1, 1), 20],
          [Date.UTC(1938, 1, 1), 28],
          [Date.UTC(1939, 1, 1), 12],
          [Date.UTC(1940, 1, 1), 24],
          [Date.UTC(1941, 1, 1), 10],
          [Date.UTC(1942, 1, 1), 30],
          [Date.UTC(1943, 1, 1), 25],
          [Date.UTC(1944, 1, 1), 1],
          [Date.UTC(1945, 1, 1), 20],
        ]
      },
      {
        name: 'Abs',
        
        visible:true,
        data: [
          [Date.UTC(1927, 1, 1), 1],
          [Date.UTC(1936, 1, 1), 1],
      

        ]
      },
      {
        name: 'Acryl',
        
        visible:true,
        data: [
        
          [Date.UTC(1927, 1, 1), 7],
          [Date.UTC(1931, 1, 1), 4],
          [Date.UTC(1934, 1, 1), 1],
          [Date.UTC(1937, 1, 1), 1],
          [Date.UTC(1938, 1, 1), 1],
          [Date.UTC(1941, 1, 1), 1],
          [Date.UTC(1944, 1, 1), 1],
        
        ]
      },
      {
        name: 'Airbush',
        
        visible:true,
        data: [
       
          [Date.UTC(1927, 1, 1), 5],
          [Date.UTC(1933, 1, 1), 1],
          [Date.UTC(1934, 1, 1), 1],
          [Date.UTC(1935, 1, 1), 3],
          [Date.UTC(1936, 1, 1), 1],
        
        ]
      },
      {
        name: 'Aquatint',
        color:'orange',
        data: [
          [Date.UTC(1924, 1, 1), 12],
          [Date.UTC(1925, 1, 1), 24],
          [Date.UTC(1926, 1, 1), 177],
          [Date.UTC(1927, 1, 1), 665],
          [Date.UTC(1928, 1, 1), 16],
          [Date.UTC(1929, 1, 1), 50],
          [Date.UTC(1930, 1, 1), 101],
          [Date.UTC(1931, 1, 1), 82],
          [Date.UTC(1932, 1, 1), 42],
          [Date.UTC(1933, 1, 1), 232],
          [Date.UTC(1934, 1, 1), 19],
          [Date.UTC(1935, 1, 1), 55],
          [Date.UTC(1936, 1, 1), 94],
          [Date.UTC(1937, 1, 1), 84],
          [Date.UTC(1938, 1, 1), 212],
          [Date.UTC(1939, 1, 1), 8],
          [Date.UTC(1940, 1, 1), 27],
          [Date.UTC(1941, 1, 1), 140],
          [Date.UTC(1942, 1, 1), 40],
          [Date.UTC(1943, 1, 1), 113],
          [Date.UTC(1944, 1, 1), 10],
          [Date.UTC(1945, 1, 1), 42],
        ]
      },
      {
        name: 'Bronze',
        
        visible:true,
        data: [
       
          [Date.UTC(1924, 1, 1), 2],
          [Date.UTC(1925, 1, 1), 4],
          [Date.UTC(1926, 1, 1), 7],
          [Date.UTC(1927, 1, 1), 7],
          [Date.UTC(1929, 1, 1), 1],
          [Date.UTC(1930, 1, 1), 1],
          [Date.UTC(1931, 1, 1), 2],
          [Date.UTC(1932, 1, 1), 7],
          [Date.UTC(1933, 1, 1), 23],
          [Date.UTC(1935, 1, 1), 8],
          [Date.UTC(1936, 1, 1), 1],
          [Date.UTC(1937, 1, 1), 1],
          [Date.UTC(1938, 1, 1), 3],
          [Date.UTC(1939, 1, 1), 1],
          [Date.UTC(1940, 1, 1), 5],
          [Date.UTC(1941, 1, 1), 2],
          [Date.UTC(1942, 1, 1), 13],
          [Date.UTC(1944, 1, 1), 2],
          [Date.UTC(1945, 1, 1), 1],
         
        ]
      },
      {
        name: 'Carbon',
        
        visible:true,
        data: [
         
          [Date.UTC(1926, 1, 1), 9],
          [Date.UTC(1927, 1, 1), 9],
          [Date.UTC(1930, 1, 1), 3],
          [Date.UTC(1932, 1, 1), 2],
          [Date.UTC(1934, 1, 1), 1],
          [Date.UTC(1938, 1, 1), 1],
       
        ]
      },
      {
        name: 'Glas',
        
        visible:true,
        data: [
     
          [Date.UTC(1925, 1, 1), 2],
          [Date.UTC(1926, 1, 1), 22],
          [Date.UTC(1927, 1, 1), 24],
          [Date.UTC(1928, 1, 1), 4],
          [Date.UTC(1929, 1, 1), 16],
          [Date.UTC(1930, 1, 1), 5],
          [Date.UTC(1931, 1, 1), 2],
          [Date.UTC(1932, 1, 1), 5],
          [Date.UTC(1933, 1, 1), 4],
          [Date.UTC(1934, 1, 1), 16],
          [Date.UTC(1935, 1, 1), 4],
          [Date.UTC(1936, 1, 1), 5],
          [Date.UTC(1937, 1, 1), 21],
          [Date.UTC(1938, 1, 1), 5],
          [Date.UTC(1939, 1, 1), 4],
          [Date.UTC(1940, 1, 1), 5],
          [Date.UTC(1941, 1, 1), 3],
          [Date.UTC(1942, 1, 1), 16],
          [Date.UTC(1943, 1, 1), 2],
          [Date.UTC(1944, 1, 1), 7],
          [Date.UTC(1945, 1, 1), 41],
       

        ]
      },
      {
        name: 'Mylar',
        
        visible:true,
        data: [
          [Date.UTC(1945, 1, 1), 1],
      

        ]
      },
      {
        name: 'Photomontage',
        color:'lightblue',
        data: [
  
          [Date.UTC(1924, 1, 1), 2],
          [Date.UTC(1925, 1, 1), 1],
          [Date.UTC(1926, 1, 1), 4],
          [Date.UTC(1927, 1, 1), 2],
          [Date.UTC(1931, 1, 1), 1],
          [Date.UTC(1934, 1, 1), 2],
          [Date.UTC(1935, 1, 1), 1],
          [Date.UTC(1940, 1, 1), 11],
    
        ]
      },
      {
        name: 'Polyster',
        
        visible:true,
        data: [
          [Date.UTC(1935, 1, 1), 1],
          [Date.UTC(1940, 1, 1), 1],
          [Date.UTC(1942, 1, 1), 8],
          [Date.UTC(1943, 1, 1), 4],
      
        ]
      },
      {
        name: 'Video',
        color: 'darkgreen',
        data: [
        
          [Date.UTC(1924, 1, 1), 5],
          [Date.UTC(1925, 1, 1), 3],
          [Date.UTC(1926, 1, 1), 23],
          [Date.UTC(1927, 1, 1), 7],
          [Date.UTC(1928, 1, 1), 3],
          [Date.UTC(1929, 1, 1), 7],
          [Date.UTC(1930, 1, 1), 3],
          [Date.UTC(1931, 1, 1), 7],
          [Date.UTC(1932, 1, 1), 6],
          [Date.UTC(1933, 1, 1), 18],
          [Date.UTC(1934, 1, 1), 1],
          [Date.UTC(1935, 1, 1), 9],
          [Date.UTC(1936, 1, 1), 29],
          [Date.UTC(1937, 1, 1), 15],
          [Date.UTC(1938, 1, 1), 8],
          [Date.UTC(1939, 1, 1), 10],
          [Date.UTC(1940, 1, 1), 3],
          [Date.UTC(1941, 1, 1), 7],
          [Date.UTC(1942, 1, 1), 3],
          [Date.UTC(1943, 1, 1), 52],
          [Date.UTC(1944, 1, 1), 12],
          [Date.UTC(1945, 1, 1), 28],
          [Date.UTC(1928, 1, 1), 2],
 
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
   Informell () {
    document.getElementById("text").innerHTML = ` Informel oder informelle Kunst (französisch art informel) ist ein Sammelbegriff für die Stilrichtungen der
    abstrakten (im Sinne von nicht-geometrischen, gegenstandslosen) Kunst in den europäischen Nachkriegsjahren,
    die ihre Ursprünge im Paris der 1940er und 1950er Jahre hat.
    `
  Highcharts.chart('secondChart', {
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
      text: 'Benutzte Materialien und Werkzeuge im Informel'
    },
    subtitle: {
      text: document.ontouchstart === undefined ?
        'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
      enabled: true
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
          enabled: true
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
          enabled: true

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
     
          [Date.UTC(1950, 1, 1), 351],
          [Date.UTC(1951, 1, 1), 258],
          [Date.UTC(1952, 1, 1), 738],
          [Date.UTC(1953, 1, 1), 417],
          [Date.UTC(1954, 1, 1), 267],
          [Date.UTC(1955, 1, 1), 830],
          [Date.UTC(1956, 1, 1), 1160],
          [Date.UTC(1957, 1, 1), 469],
          [Date.UTC(1958, 1, 1), 433],
          [Date.UTC(1959, 1, 1), 184],
          [Date.UTC(1960, 1, 1), 1284],
          [Date.UTC(1960, 1, 1), 1],
          [Date.UTC(1961, 1, 1), 619],
          [Date.UTC(1962, 1, 1), 645],
          [Date.UTC(1963, 1, 1), 821],
          [Date.UTC(1964, 1, 1), 1106],
          [Date.UTC(1965, 1, 1), 792],
     

        ]
      }, {
        name: 'Filztift',
        
        visible:true,
        data: [
       
          [Date.UTC(1958, 1, 1), 1],
          [Date.UTC(1959, 1, 1), 2],

        ]
      },
      {
        name: 'Gelatinendruck',
        
        legendIndex:26,
        visible:true,
        data: [
          //    [Date.UTC(1927, 1, 1), 3],
       

        ]
      }, {
        name: 'Graphite',
        
        visible:true,
        data: [
      
          [Date.UTC(1952, 1, 1), 1],
          [Date.UTC(1953, 1, 1), 5],
          [Date.UTC(1954, 1, 1), 7],
          [Date.UTC(1955, 1, 1), 1],
          [Date.UTC(1956, 1, 1), 1],
          [Date.UTC(1957, 1, 1), 8],
          [Date.UTC(1958, 1, 1), 1],
          [Date.UTC(1959, 1, 1), 12],
          [Date.UTC(1960, 1, 1), 1],
          [Date.UTC(1961, 1, 1), 1],
          [Date.UTC(1962, 1, 1), 18],
          [Date.UTC(1963, 1, 1), 3],
          [Date.UTC(1964, 1, 1), 12],
          [Date.UTC(1965, 1, 1), 20],
     

        ]
      }, {
        name: 'Holz',
        color:'brown',
        data: [
       
          [Date.UTC(1950, 1, 1), 80],
          [Date.UTC(1951, 1, 1), 32],
          [Date.UTC(1952, 1, 1), 30],
          [Date.UTC(1953, 1, 1), 56],
          [Date.UTC(1954, 1, 1), 33],
          [Date.UTC(1955, 1, 1), 98],
          [Date.UTC(1956, 1, 1), 51],
          [Date.UTC(1957, 1, 1), 24],
          [Date.UTC(1958, 1, 1), 67],
          [Date.UTC(1959, 1, 1), 27],
          [Date.UTC(1960, 1, 1), 158],
          [Date.UTC(1961, 1, 1), 233],
          [Date.UTC(1962, 1, 1), 53],
          [Date.UTC(1963, 1, 1), 46],
          [Date.UTC(1964, 1, 1), 69],
          [Date.UTC(1965, 1, 1), 80],
       
        ]
      }, {
        name: 'Kugelschreiber',
        
        visible:true,
        data: [
       
          [Date.UTC(1950, 1, 1), 1],
          [Date.UTC(1952, 1, 1), 5],
          [Date.UTC(1953, 1, 1), 2],
          [Date.UTC(1954, 1, 1), 19],
          [Date.UTC(1955, 1, 1), 7],
          [Date.UTC(1956, 1, 1), 6],
          [Date.UTC(1957, 1, 1), 2],
          [Date.UTC(1958, 1, 1), 9],
          [Date.UTC(1959, 1, 1), 1],
          [Date.UTC(1960, 1, 1), 10],
          [Date.UTC(1961, 1, 1), 5],
          [Date.UTC(1962, 1, 1), 7],
          [Date.UTC(1963, 1, 1), 13],
          [Date.UTC(1964, 1, 1), 24],
          [Date.UTC(1965, 1, 1), 10],
       

        ]
      },
      {
        name: 'Öl',
        
        visible:true,
        data: [
         
          [Date.UTC(1950, 1, 1), 26],
          [Date.UTC(1951, 1, 1), 15],
          [Date.UTC(1952, 1, 1), 15],
          [Date.UTC(1953, 1, 1), 83],
          [Date.UTC(1954, 1, 1), 16],
          [Date.UTC(1955, 1, 1), 10],
          [Date.UTC(1956, 1, 1), 17],
          [Date.UTC(1957, 1, 1), 21],
          [Date.UTC(1958, 1, 1), 27],
          [Date.UTC(1959, 1, 1), 23],
          [Date.UTC(1960, 1, 1), 29],
          [Date.UTC(1961, 1, 1), 27],
          [Date.UTC(1962, 1, 1), 30],
          [Date.UTC(1963, 1, 1), 23],
          [Date.UTC(1964, 1, 1), 35],
          [Date.UTC(1965, 1, 1), 22],
    
        ]
      },
      {
        name: 'Papier',
        color:'yellow',
        data: [
       
          [Date.UTC(1950, 1, 1), 71],
          [Date.UTC(1951, 1, 1), 68],
          [Date.UTC(1952, 1, 1), 44],
          [Date.UTC(1953, 1, 1), 228],
          [Date.UTC(1954, 1, 1), 141],
          [Date.UTC(1955, 1, 1), 205],
          [Date.UTC(1956, 1, 1), 135],
          [Date.UTC(1957, 1, 1), 74],
          [Date.UTC(1958, 1, 1), 90],
          [Date.UTC(1959, 1, 1), 60],
          [Date.UTC(1960, 1, 1), 170],
          [Date.UTC(1961, 1, 1), 87],
          [Date.UTC(1962, 1, 1), 193],
          [Date.UTC(1963, 1, 1), 200],
          [Date.UTC(1964, 1, 1), 391],
          [Date.UTC(1965, 1, 1), 180],
      
        ]
      },
      {
        name: 'Pastel',
        visible:true,
        
        data: [
   
          [Date.UTC(1950, 1, 1), 2],
          [Date.UTC(1952, 1, 1), 2],
          [Date.UTC(1953, 1, 1), 1],
          [Date.UTC(1954, 1, 1), 1],
          [Date.UTC(1955, 1, 1), 4],
          [Date.UTC(1956, 1, 1), 6],
          [Date.UTC(1957, 1, 1), 1],
          [Date.UTC(1958, 1, 1), 2],
          [Date.UTC(1959, 1, 1), 1],
          [Date.UTC(1960, 1, 1), 2],
          [Date.UTC(1961, 1, 1), 2],
          [Date.UTC(1962, 1, 1), 9],
          [Date.UTC(1963, 1, 1), 3],
          [Date.UTC(1964, 1, 1), 10],
          [Date.UTC(1965, 1, 1), 5],
        

        ]
      },
      {
        name: 'Stahl',
        
        visible:true,
        data: [
        
          [Date.UTC(1950, 1, 1), 38],
          [Date.UTC(1951, 1, 1), 9],
          [Date.UTC(1952, 1, 1), 10],
          [Date.UTC(1953, 1, 1), 16],
          [Date.UTC(1954, 1, 1), 17],
          [Date.UTC(1955, 1, 1), 10],
          [Date.UTC(1956, 1, 1), 8],
          [Date.UTC(1957, 1, 1), 9],
          [Date.UTC(1958, 1, 1), 15],
          [Date.UTC(1959, 1, 1), 6],
          [Date.UTC(1960, 1, 1), 36],
          [Date.UTC(1961, 1, 1), 14],
          [Date.UTC(1962, 1, 1), 13],
          [Date.UTC(1963, 1, 1), 12],
          [Date.UTC(1964, 1, 1), 21],
          [Date.UTC(1965, 1, 1), 21],
       
        ]
      },
      {
        name: 'Stift',
        color:'violet',

        data: [
       
          [Date.UTC(1950, 1, 1), 11],
          [Date.UTC(1951, 1, 1), 32],
          [Date.UTC(1952, 1, 1), 15],
          [Date.UTC(1953, 1, 1), 56],
          [Date.UTC(1954, 1, 1), 29],
          [Date.UTC(1955, 1, 1), 78],
          [Date.UTC(1956, 1, 1), 76],
          [Date.UTC(1957, 1, 1), 62],
          [Date.UTC(1958, 1, 1), 53],
          [Date.UTC(1959, 1, 1), 20],
          [Date.UTC(1960, 1, 1), 90],
          [Date.UTC(1961, 1, 1), 30],
          [Date.UTC(1962, 1, 1), 70],
          [Date.UTC(1963, 1, 1), 27],
          [Date.UTC(1964, 1, 1), 175],
          [Date.UTC(1965, 1, 1), 63],
        

        ]
      },
      {
        name: 'Tinte',
        
        visible:true,
        data: [
         
          [Date.UTC(1950, 1, 1), 27],
          [Date.UTC(1951, 1, 1), 30],
          [Date.UTC(1952, 1, 1), 26],
          [Date.UTC(1953, 1, 1), 85],
          [Date.UTC(1954, 1, 1), 94],
          [Date.UTC(1955, 1, 1), 63],
          [Date.UTC(1956, 1, 1), 74],
          [Date.UTC(1957, 1, 1), 89],
          [Date.UTC(1958, 1, 1), 71],
          [Date.UTC(1959, 1, 1), 40],
          [Date.UTC(1960, 1, 1), 115],
          [Date.UTC(1961, 1, 1), 59],
          [Date.UTC(1962, 1, 1), 79],
          [Date.UTC(1963, 1, 1), 158],
          [Date.UTC(1964, 1, 1), 95],
          [Date.UTC(1965, 1, 1), 59],
        
        ]
      },
      {
        name: 'Visitenkarte',
        visible:true,
        
        data: [
          [Date.UTC(1954, 1, 1), 61],
          [Date.UTC(1955, 1, 1), 24],
          [Date.UTC(1956, 1, 1), 4],
          [Date.UTC(1959, 1, 1), 8],
          [Date.UTC(1960, 1, 1), 2],
          [Date.UTC(1963, 1, 1), 3],
          [Date.UTC(1964, 1, 1), 15],
          [Date.UTC(1965, 1, 1), 19],
       

        ]
      },
      {
        name: 'Wasserfarben',
        visible:true,
        
        data: [
       
          [Date.UTC(1950, 1, 1), 8],
          [Date.UTC(1951, 1, 1), 44],
          [Date.UTC(1952, 1, 1), 5],
          [Date.UTC(1953, 1, 1), 46],
          [Date.UTC(1954, 1, 1), 12],
          [Date.UTC(1955, 1, 1), 19],
          [Date.UTC(1956, 1, 1), 29],
          [Date.UTC(1957, 1, 1), 11],
          [Date.UTC(1958, 1, 1), 43],
          [Date.UTC(1959, 1, 1), 9],
          [Date.UTC(1960, 1, 1), 34],
          [Date.UTC(1961, 1, 1), 32],
          [Date.UTC(1962, 1, 1), 18],
          [Date.UTC(1963, 1, 1), 24],
          [Date.UTC(1964, 1, 1), 102],
          [Date.UTC(1965, 1, 1), 57],
       
        ]
      },
      {
        name: 'Abs',
        
        visible:true,
        data: [
         
          [Date.UTC(1950, 1, 1), 1],
          [Date.UTC(1954, 1, 1), 1],
          [Date.UTC(1957, 1, 1), 1],
          [Date.UTC(1958, 1, 1), 2],
          [Date.UTC(1960, 1, 1), 2],
          [Date.UTC(1962, 1, 1), 2],
          [Date.UTC(1963, 1, 1), 1],
      

        ]
      },
      {
        name: 'Acryl',
        
        visible:true,
        data: [
         
          [Date.UTC(1950, 1, 1), 7],
          [Date.UTC(1953, 1, 1), 4],
          [Date.UTC(1954, 1, 1), 3],
          [Date.UTC(1955, 1, 1), 3],
          [Date.UTC(1956, 1, 1), 4],
          [Date.UTC(1957, 1, 1), 1],
          [Date.UTC(1958, 1, 1), 14],
          [Date.UTC(1960, 1, 1), 2],
          [Date.UTC(1961, 1, 1), 1],
          [Date.UTC(1962, 1, 1), 10],
          [Date.UTC(1964, 1, 1), 6],
          [Date.UTC(1965, 1, 1), 3],
      
        ]
      },
      {
        name: 'Airbush',
        
        visible:true,
        data: [
       
          [Date.UTC(1954, 1, 1), 1],
          [Date.UTC(1965, 1, 1), 1],
     
        ]
      },
      {
        name: 'Aquatint',
        color:'orange',
        data: [
      
          [Date.UTC(1950, 1, 1), 69],
          [Date.UTC(1951, 1, 1), 16],
          [Date.UTC(1952, 1, 1), 55],
          [Date.UTC(1953, 1, 1), 110],
          [Date.UTC(1954, 1, 1), 35],
          [Date.UTC(1955, 1, 1), 30],
          [Date.UTC(1956, 1, 1), 107],
          [Date.UTC(1957, 1, 1), 43],
          [Date.UTC(1958, 1, 1), 92],
          [Date.UTC(1959, 1, 1), 16],
          [Date.UTC(1960, 1, 1), 341],
          [Date.UTC(1961, 1, 1), 99],
          [Date.UTC(1962, 1, 1), 87],
          [Date.UTC(1963, 1, 1), 118],
          [Date.UTC(1964, 1, 1), 210],
          [Date.UTC(1965, 1, 1), 103],
     
        ]
      },
      {
        name: 'Bronze',
        
        visible:true,
        data: [
       
          [Date.UTC(1950, 1, 1), 2],
          [Date.UTC(1953, 1, 1), 2],
          [Date.UTC(1954, 1, 1), 6],
          [Date.UTC(1955, 1, 1), 1],
          [Date.UTC(1956, 1, 1), 1],
          [Date.UTC(1957, 1, 1), 1],
          [Date.UTC(1958, 1, 1), 4],
          [Date.UTC(1959, 1, 1), 3],
          [Date.UTC(1960, 1, 1), 5],
          [Date.UTC(1961, 1, 1), 1],
          [Date.UTC(1962, 1, 1), 2],
          [Date.UTC(1963, 1, 1), 3],
          [Date.UTC(1964, 1, 1), 1],
          [Date.UTC(1965, 1, 1), 3],
       
        ]
      },
      {
        name: 'Carbon',
        
        visible:true,
        data: [
        
          [Date.UTC(1954, 1, 1), 1],
          [Date.UTC(1956, 1, 1), 1],
          [Date.UTC(1960, 1, 1), 6],
          [Date.UTC(1961, 1, 1), 1],
          [Date.UTC(1962, 1, 1), 3],
          [Date.UTC(1963, 1, 1), 4],
          [Date.UTC(1964, 1, 1), 2],
          [Date.UTC(1965, 1, 1), 7],
         

        ]
      },
      {
        name: 'Glas',
        
        visible:true,
        data: [
       
          [Date.UTC(1950, 1, 1), 36],
          [Date.UTC(1951, 1, 1), 5],
          [Date.UTC(1952, 1, 1), 1],
          [Date.UTC(1953, 1, 1), 20],
          [Date.UTC(1954, 1, 1), 21],
          [Date.UTC(1955, 1, 1), 9],
          [Date.UTC(1956, 1, 1), 7],
          [Date.UTC(1957, 1, 1), 5],
          [Date.UTC(1958, 1, 1), 8],
          [Date.UTC(1959, 1, 1), 7],
          [Date.UTC(1960, 1, 1), 9],
          [Date.UTC(1961, 1, 1), 13],
          [Date.UTC(1962, 1, 1), 16],
          [Date.UTC(1963, 1, 1), 13],
          [Date.UTC(1964, 1, 1), 10],
          [Date.UTC(1965, 1, 1), 29],
         

        ]
      },
      {
        name: 'Mylar',
        
        visible:true,
        data: [
       
          [Date.UTC(1952, 1, 1), 6],
          [Date.UTC(1953, 1, 1), 1],
          [Date.UTC(1960, 1, 1), 1],
          [Date.UTC(1963, 1, 1), 3],
          [Date.UTC(1965, 1, 1), 4],
        

        ]
      },
      {
        name: 'Photomontage',
        color:'lightblue',
        data: [
      
          [Date.UTC(1959, 1, 1), 1],
          [Date.UTC(1960, 1, 1), 1],
     
        ]
      },
      {
        name: 'Polyster',
        
        visible:true,
        data: [
       
          [Date.UTC(1950, 1, 1), 5],
          [Date.UTC(1953, 1, 1), 1],
          [Date.UTC(1958, 1, 1), 1],
          [Date.UTC(1959, 1, 1), 4],
          [Date.UTC(1960, 1, 1), 2],
          [Date.UTC(1962, 1, 1), 1],
          [Date.UTC(1963, 1, 1), 3],
          [Date.UTC(1964, 1, 1), 1],
          [Date.UTC(1965, 1, 1), 3],
         
        ]
      },
      {
        name: 'Video',
        color: 'darkgreen',
        data: [
        
          [Date.UTC(1950, 1, 1), 72],
          [Date.UTC(1951, 1, 1), 25],
          [Date.UTC(1952, 1, 1), 10],
          [Date.UTC(1953, 1, 1), 28],
          [Date.UTC(1954, 1, 1), 13],
          [Date.UTC(1955, 1, 1), 14],
          [Date.UTC(1956, 1, 1), 20],
          [Date.UTC(1957, 1, 1), 73],
          [Date.UTC(1958, 1, 1), 55],
          [Date.UTC(1959, 1, 1), 17],
          [Date.UTC(1960, 1, 1), 37],
          [Date.UTC(1961, 1, 1), 14],
          [Date.UTC(1962, 1, 1), 55],
          [Date.UTC(1963, 1, 1), 23],
          [Date.UTC(1964, 1, 1), 15],
          [Date.UTC(1965, 1, 1), 18],
        
          [Date.UTC(1950, 1, 1), 1],
          [Date.UTC(1952, 1, 1), 1],
          [Date.UTC(1953, 1, 1), 1],
          [Date.UTC(1955, 1, 1), 1],
          [Date.UTC(1957, 1, 1), 24],
          [Date.UTC(1960, 1, 1), 26],
          [Date.UTC(1961, 1, 1), 3],
          [Date.UTC(1964, 1, 1), 7],
          [Date.UTC(1965, 1, 1), 11],
      
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

  ngOnInit() {
    Materialienn();
    this.Bougleois();
    
    function Materialienn () {
     Highcharts.chart('Materialien', {
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
          'Markieren Sie den Zeitraum, den Sie detailierter betrachten wollenSource: <a href="third">Click me for Biography of Artist</a>'  : '..'
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
        enabled: true
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
            enabled: true
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
            enabled: true

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
          visible:true,
          data: [
            [Date.UTC(1800, 1, 1), 1],
            [Date.UTC(1818, 1, 1), 25],
            [Date.UTC(1829, 1, 1), 1],
            [Date.UTC(1830, 1, 1), 4],
            [Date.UTC(1833, 1, 1), 2],
            [Date.UTC(1834, 1, 1), 21],
            [Date.UTC(1835, 1, 1), 6],
            [Date.UTC(1836, 1, 1), 4],
            [Date.UTC(1837, 1, 1), 2],
            [Date.UTC(1838, 1, 1), 11],
            [Date.UTC(1839, 1, 1), 1],
            [Date.UTC(1840, 1, 1), 4],
            [Date.UTC(1841, 1, 1), 14],
            [Date.UTC(1842, 1, 1), 11],
            [Date.UTC(1843, 1, 1), 3],
            [Date.UTC(1844, 1, 1), 97],
            [Date.UTC(1845, 1, 1), 5],
            [Date.UTC(1846, 1, 1), 5],
            [Date.UTC(1847, 1, 1), 51],
            [Date.UTC(1848, 1, 1), 27],
            [Date.UTC(1849, 1, 1), 4],
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
            [Date.UTC(1881, 1, 1), 28],
            [Date.UTC(1882, 1, 1), 291],
            [Date.UTC(1883, 1, 1), 7],
            [Date.UTC(1884, 1, 1), 30],
            [Date.UTC(1885, 1, 1), 60],
            [Date.UTC(1886, 1, 1), 13],
            [Date.UTC(1887, 1, 1), 12],
            [Date.UTC(1888, 1, 1), 9],
            [Date.UTC(1889, 1, 1), 6],
            [Date.UTC(1890, 1, 1), 51],
            [Date.UTC(1891, 1, 1), 156],
            [Date.UTC(1892, 1, 1), 5027],
            [Date.UTC(1893, 1, 1), 106],
            [Date.UTC(1894, 1, 1), 22],
            [Date.UTC(1895, 1, 1), 98],
            [Date.UTC(1896, 1, 1), 40],
            [Date.UTC(1897, 1, 1), 26],
            [Date.UTC(1898, 1, 1), 138],
            [Date.UTC(1899, 1, 1), 75],
            [Date.UTC(1900, 1, 1), 267],
            [Date.UTC(1901, 1, 1), 48],
            [Date.UTC(1902, 1, 1), 178],
            [Date.UTC(1903, 1, 1), 153],
            [Date.UTC(1904, 1, 1), 483],
            [Date.UTC(1905, 1, 1), 221],
            [Date.UTC(1906, 1, 1), 213],
            [Date.UTC(1907, 1, 1), 763],
            [Date.UTC(1908, 1, 1), 191],
            [Date.UTC(1909, 1, 1), 123],
            [Date.UTC(1910, 1, 1), 137],
            [Date.UTC(1911, 1, 1), 474],
            [Date.UTC(1912, 1, 1), 95],
            [Date.UTC(1913, 1, 1), 228],
            [Date.UTC(1914, 1, 1), 689],
            [Date.UTC(1915, 1, 1), 422],
            [Date.UTC(1916, 1, 1), 453],
            [Date.UTC(1917, 1, 1), 421],
            [Date.UTC(1918, 1, 1), 352],
            [Date.UTC(1919, 1, 1), 413],
            [Date.UTC(1920, 1, 1), 890],
            [Date.UTC(1920, 1, 1), 1],
            [Date.UTC(1921, 1, 1), 389],
            [Date.UTC(1922, 1, 1), 660],
            [Date.UTC(1923, 1, 1), 168],
            [Date.UTC(1924, 1, 1), 250],
            [Date.UTC(1925, 1, 1), 200],
            [Date.UTC(1926, 1, 1), 731],
            [Date.UTC(1927, 1, 1), 728],
            [Date.UTC(1928, 1, 1), 158],
            [Date.UTC(1929, 1, 1), 432],
            [Date.UTC(1930, 1, 1), 760],
            [Date.UTC(1931, 1, 1), 206],
            [Date.UTC(1932, 1, 1), 500],
            [Date.UTC(1933, 1, 1), 777],
            [Date.UTC(1934, 1, 1), 173],
            [Date.UTC(1935, 1, 1), 345],
            [Date.UTC(1936, 1, 1), 899],
            [Date.UTC(1937, 1, 1), 371],
            [Date.UTC(1938, 1, 1), 577],
            [Date.UTC(1939, 1, 1), 706],
            [Date.UTC(1940, 1, 1), 314],
            [Date.UTC(1941, 1, 1), 557],
            [Date.UTC(1942, 1, 1), 490],
            [Date.UTC(1943, 1, 1), 1625],
            [Date.UTC(1944, 1, 1), 305],
            [Date.UTC(1945, 1, 1), 463],
            [Date.UTC(1946, 1, 1), 233],
            [Date.UTC(1947, 1, 1), 375],
            [Date.UTC(1948, 1, 1), 482],
            [Date.UTC(1949, 1, 1), 246],
            [Date.UTC(1950, 1, 1), 351],
            [Date.UTC(1951, 1, 1), 258],
            [Date.UTC(1952, 1, 1), 738],
            [Date.UTC(1953, 1, 1), 417],
            [Date.UTC(1954, 1, 1), 267],
            [Date.UTC(1955, 1, 1), 830],
            [Date.UTC(1956, 1, 1), 1160],
            [Date.UTC(1957, 1, 1), 469],
            [Date.UTC(1958, 1, 1), 433],
            [Date.UTC(1959, 1, 1), 184],
            [Date.UTC(1960, 1, 1), 1284],
            [Date.UTC(1960, 1, 1), 1],
            [Date.UTC(1961, 1, 1), 619],
            [Date.UTC(1962, 1, 1), 645],
            [Date.UTC(1963, 1, 1), 821],
            [Date.UTC(1964, 1, 1), 1106],
            [Date.UTC(1965, 1, 1), 792],
            [Date.UTC(1966, 1, 1), 1239],
            [Date.UTC(1967, 1, 1), 1243],
            [Date.UTC(1968, 1, 1), 974],
            [Date.UTC(1969, 1, 1), 1203],
            [Date.UTC(1970, 1, 1), 623],
            [Date.UTC(1970, 1, 1), 2],
            [Date.UTC(1971, 1, 1), 887],
            [Date.UTC(1972, 1, 1), 749],
            [Date.UTC(1973, 1, 1), 1623],
            [Date.UTC(1974, 1, 1), 570],
            [Date.UTC(1975, 1, 1), 1063],
            [Date.UTC(1976, 1, 1), 557],
            [Date.UTC(1977, 1, 1), 627],
            [Date.UTC(1978, 1, 1), 447],
            [Date.UTC(1979, 1, 1), 774],
            [Date.UTC(1980, 1, 1), 551],
            [Date.UTC(1981, 1, 1), 445],
            [Date.UTC(1982, 1, 1), 390],
            [Date.UTC(1983, 1, 1), 326],
            [Date.UTC(1984, 1, 1), 324],
            [Date.UTC(1985, 1, 1), 400],
            [Date.UTC(1986, 1, 1), 306],
            [Date.UTC(1987, 1, 1), 242],
            [Date.UTC(1988, 1, 1), 372],
            [Date.UTC(1989, 1, 1), 324],
            [Date.UTC(1990, 1, 1), 303],
            [Date.UTC(1991, 1, 1), 387],
            [Date.UTC(1992, 1, 1), 251],
            [Date.UTC(1993, 1, 1), 206],
            [Date.UTC(1994, 1, 1), 334],
            [Date.UTC(1995, 1, 1), 271],
            [Date.UTC(1996, 1, 1), 257],
            [Date.UTC(1997, 1, 1), 243],
            [Date.UTC(1998, 1, 1), 254],
            [Date.UTC(1999, 1, 1), 216],
            [Date.UTC(2000, 1, 1), 263],
            [Date.UTC(2001, 1, 1), 304],
            [Date.UTC(2002, 1, 1), 221],
            [Date.UTC(2003, 1, 1), 306],
            [Date.UTC(2004, 1, 1), 336],
            [Date.UTC(2005, 1, 1), 207],
            [Date.UTC(2006, 1, 1), 253],
            [Date.UTC(2007, 1, 1), 236],
            [Date.UTC(2008, 1, 1), 203],
            [Date.UTC(2009, 1, 1), 223],
            [Date.UTC(2010, 1, 1), 227],
            [Date.UTC(2011, 1, 1), 248],
            [Date.UTC(2012, 1, 1), 238],
            [Date.UTC(2013, 1, 1), 246],
            [Date.UTC(2014, 1, 1), 75],
            [Date.UTC(2015, 1, 1), 87],
            [Date.UTC(2016, 1, 1), 36],
            [Date.UTC(2017, 1, 1), 79]

          ]
        }, {
          name: 'Filztift',
          
          visible:true,
          data: [
            [Date.UTC(1949, 1, 1), 5],
            [Date.UTC(1958, 1, 1), 1],
            [Date.UTC(1959, 1, 1), 2],
            [Date.UTC(1967, 1, 1), 2],
            [Date.UTC(1968, 1, 1), 2],
            [Date.UTC(1971, 1, 1), 1],
            [Date.UTC(1972, 1, 1), 3],
            [Date.UTC(1973, 1, 1), 3],
            [Date.UTC(1974, 1, 1), 1],
            [Date.UTC(1975, 1, 1), 2],
            [Date.UTC(1976, 1, 1), 8],
            [Date.UTC(1978, 1, 1), 2],
            [Date.UTC(1980, 1, 1), 1],
            [Date.UTC(1981, 1, 1), 1],
            [Date.UTC(1982, 1, 1), 1],
            [Date.UTC(1983, 1, 1), 1],
            [Date.UTC(1987, 1, 1), 1],
            [Date.UTC(1992, 1, 1), 2],
            [Date.UTC(1994, 1, 1), 1],
            [Date.UTC(2002, 1, 1), 1],
            [Date.UTC(2005, 1, 1), 3],
            [Date.UTC(2010, 1, 1), 5],
            [Date.UTC(2011, 1, 1), 1],
            [Date.UTC(2012, 1, 1), 1],
            [Date.UTC(2015, 1, 1), 9]

          ]
        },
        {
          name: 'Gelatinendruck',
          
          visible:true,
          data: [
            //    [Date.UTC(1927, 1, 1), 3],
            [Date.UTC(1968, 1, 1), 1],
            [Date.UTC(1969, 1, 1), 2],
            [Date.UTC(1970, 1, 1), 2],
            [Date.UTC(1971, 1, 1), 1],
            [Date.UTC(1972, 1, 1), 6],
            [Date.UTC(1974, 1, 1), 4],
            [Date.UTC(1976, 1, 1), 25],
            [Date.UTC(1979, 1, 1), 1],
            [Date.UTC(1980, 1, 1), 13],
            [Date.UTC(1986, 1, 1), 1],

          ]
        }, {
          name: 'Graphite',
          
          visible:true,
          data: [
            [Date.UTC(1858, 1, 1), 1],
            [Date.UTC(1875, 1, 1), 2],
            [Date.UTC(1878, 1, 1), 3],
            [Date.UTC(1891, 1, 1), 1],
            [Date.UTC(1893, 1, 1), 1],
            [Date.UTC(1901, 1, 1), 1],
            [Date.UTC(1902, 1, 1), 3],
            [Date.UTC(1907, 1, 1), 1],
            [Date.UTC(1911, 1, 1), 1],
            [Date.UTC(1912, 1, 1), 19],
            [Date.UTC(1913, 1, 1), 14],
            [Date.UTC(1915, 1, 1), 2],
            [Date.UTC(1916, 1, 1), 3],
            [Date.UTC(1918, 1, 1), 1],
            [Date.UTC(1919, 1, 1), 2],
            [Date.UTC(1920, 1, 1), 16],
            [Date.UTC(1921, 1, 1), 2],
            [Date.UTC(1923, 1, 1), 1],
            [Date.UTC(1925, 1, 1), 2],
            [Date.UTC(1926, 1, 1), 2],
            [Date.UTC(1927, 1, 1), 44],
            [Date.UTC(1928, 1, 1), 1],
            [Date.UTC(1929, 1, 1), 1],
            [Date.UTC(1931, 1, 1), 3],
            [Date.UTC(1933, 1, 1), 3],
            [Date.UTC(1937, 1, 1), 45],
            [Date.UTC(1938, 1, 1), 7],
            [Date.UTC(1939, 1, 1), 8],
            [Date.UTC(1940, 1, 1), 2],
            [Date.UTC(1945, 1, 1), 13],
            [Date.UTC(1946, 1, 1), 2],
            [Date.UTC(1948, 1, 1), 1],
            [Date.UTC(1952, 1, 1), 1],
            [Date.UTC(1953, 1, 1), 5],
            [Date.UTC(1954, 1, 1), 7],
            [Date.UTC(1955, 1, 1), 1],
            [Date.UTC(1956, 1, 1), 1],
            [Date.UTC(1957, 1, 1), 8],
            [Date.UTC(1958, 1, 1), 1],
            [Date.UTC(1959, 1, 1), 12],
            [Date.UTC(1960, 1, 1), 1],
            [Date.UTC(1961, 1, 1), 1],
            [Date.UTC(1962, 1, 1), 18],
            [Date.UTC(1963, 1, 1), 3],
            [Date.UTC(1964, 1, 1), 12],
            [Date.UTC(1965, 1, 1), 20],
            [Date.UTC(1966, 1, 1), 6],
            [Date.UTC(1967, 1, 1), 23],
            [Date.UTC(1968, 1, 1), 28],
            [Date.UTC(1969, 1, 1), 13],
            [Date.UTC(1970, 1, 1), 6],
            [Date.UTC(1971, 1, 1), 22],
            [Date.UTC(1972, 1, 1), 19],
            [Date.UTC(1973, 1, 1), 27],
            [Date.UTC(1974, 1, 1), 23],
            [Date.UTC(1975, 1, 1), 8],
            [Date.UTC(1976, 1, 1), 18],
            [Date.UTC(1977, 1, 1), 6],
            [Date.UTC(1978, 1, 1), 3],
            [Date.UTC(1979, 1, 1), 13],
            [Date.UTC(1980, 1, 1), 5],
            [Date.UTC(1981, 1, 1), 10],
            [Date.UTC(1982, 1, 1), 10],
            [Date.UTC(1983, 1, 1), 5],
            [Date.UTC(1984, 1, 1), 6],
            [Date.UTC(1985, 1, 1), 14],
            [Date.UTC(1986, 1, 1), 7],
            [Date.UTC(1987, 1, 1), 4],
            [Date.UTC(1988, 1, 1), 3],
            [Date.UTC(1989, 1, 1), 10],
            [Date.UTC(1991, 1, 1), 6],
            [Date.UTC(1992, 1, 1), 7],
            [Date.UTC(1993, 1, 1), 5],
            [Date.UTC(1994, 1, 1), 2],
            [Date.UTC(1996, 1, 1), 4],
            [Date.UTC(1997, 1, 1), 4],
            [Date.UTC(1998, 1, 1), 37],
            [Date.UTC(1999, 1, 1), 50],
            [Date.UTC(2000, 1, 1), 11],
            [Date.UTC(2001, 1, 1), 22],
            [Date.UTC(2002, 1, 1), 17],
            [Date.UTC(2003, 1, 1), 8],
            [Date.UTC(2004, 1, 1), 6],
            [Date.UTC(2006, 1, 1), 1],
            [Date.UTC(2007, 1, 1), 5],
            [Date.UTC(2009, 1, 1), 3],
            [Date.UTC(2010, 1, 1), 29],
            [Date.UTC(2013, 1, 1), 2],
            [Date.UTC(2014, 1, 1), 1],
            [Date.UTC(2016, 1, 1), 4],

          ]
        }, {
          name: 'Holz',
          color:'brown',
          data: [
            [Date.UTC(1800, 1, 1), 1],
            [Date.UTC(1813, 1, 1), 1],
            [Date.UTC(1829, 1, 1), 1],
            [Date.UTC(1833, 1, 1), 5],
            [Date.UTC(1844, 1, 1), 1],
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
            [Date.UTC(1881, 1, 1), 41],
            [Date.UTC(1882, 1, 1), 2],
            [Date.UTC(1884, 1, 1), 1],
            [Date.UTC(1885, 1, 1), 1],
            [Date.UTC(1886, 1, 1), 2],
            [Date.UTC(1890, 1, 1), 26],
            [Date.UTC(1891, 1, 1), 5],
            [Date.UTC(1892, 1, 1), 2],
            [Date.UTC(1893, 1, 1), 52],
            [Date.UTC(1895, 1, 1), 50],
            [Date.UTC(1896, 1, 1), 2],
            [Date.UTC(1897, 1, 1), 1],
            [Date.UTC(1898, 1, 1), 15],
            [Date.UTC(1900, 1, 1), 4],
            [Date.UTC(1902, 1, 1), 44],
            [Date.UTC(1903, 1, 1), 18],
            [Date.UTC(1904, 1, 1), 347],
            [Date.UTC(1905, 1, 1), 121],
            [Date.UTC(1906, 1, 1), 28],
            [Date.UTC(1907, 1, 1), 174],
            [Date.UTC(1908, 1, 1), 13],
            [Date.UTC(1909, 1, 1), 167],
            [Date.UTC(1910, 1, 1), 19],
            [Date.UTC(1911, 1, 1), 35],
            [Date.UTC(1912, 1, 1), 10],
            [Date.UTC(1913, 1, 1), 127],
            [Date.UTC(1914, 1, 1), 307],
            [Date.UTC(1915, 1, 1), 58],
            [Date.UTC(1916, 1, 1), 19],
            [Date.UTC(1917, 1, 1), 176],
            [Date.UTC(1918, 1, 1), 60],
            [Date.UTC(1919, 1, 1), 128],
            [Date.UTC(1920, 1, 1), 23],
            [Date.UTC(1921, 1, 1), 118],
            [Date.UTC(1922, 1, 1), 17],
            [Date.UTC(1923, 1, 1), 75],
            [Date.UTC(1924, 1, 1), 8],
            [Date.UTC(1925, 1, 1), 43],
            [Date.UTC(1926, 1, 1), 222],
            [Date.UTC(1927, 1, 1), 80],
            [Date.UTC(1928, 1, 1), 81],
            [Date.UTC(1929, 1, 1), 24],
            [Date.UTC(1930, 1, 1), 92],
            [Date.UTC(1931, 1, 1), 40],
            [Date.UTC(1932, 1, 1), 26],
            [Date.UTC(1933, 1, 1), 61],
            [Date.UTC(1934, 1, 1), 31],
            [Date.UTC(1935, 1, 1), 168],
            [Date.UTC(1936, 1, 1), 56],
            [Date.UTC(1937, 1, 1), 67],
            [Date.UTC(1938, 1, 1), 122],
            [Date.UTC(1939, 1, 1), 25],
            [Date.UTC(1940, 1, 1), 18],
            [Date.UTC(1941, 1, 1), 59],
            [Date.UTC(1942, 1, 1), 41],
            [Date.UTC(1943, 1, 1), 41],
            [Date.UTC(1944, 1, 1), 16],
            [Date.UTC(1945, 1, 1), 49],
            [Date.UTC(1946, 1, 1), 24],
            [Date.UTC(1947, 1, 1), 15],
            [Date.UTC(1948, 1, 1), 17],
            [Date.UTC(1949, 1, 1), 53],
            [Date.UTC(1950, 1, 1), 80],
            [Date.UTC(1951, 1, 1), 32],
            [Date.UTC(1952, 1, 1), 30],
            [Date.UTC(1953, 1, 1), 56],
            [Date.UTC(1954, 1, 1), 33],
            [Date.UTC(1955, 1, 1), 98],
            [Date.UTC(1956, 1, 1), 51],
            [Date.UTC(1957, 1, 1), 24],
            [Date.UTC(1958, 1, 1), 67],
            [Date.UTC(1959, 1, 1), 27],
            [Date.UTC(1960, 1, 1), 158],
            [Date.UTC(1961, 1, 1), 233],
            [Date.UTC(1962, 1, 1), 53],
            [Date.UTC(1963, 1, 1), 46],
            [Date.UTC(1964, 1, 1), 69],
            [Date.UTC(1965, 1, 1), 80],
            [Date.UTC(1966, 1, 1), 228],
            [Date.UTC(1967, 1, 1), 103],
            [Date.UTC(1968, 1, 1), 115],
            [Date.UTC(1969, 1, 1), 50],
            [Date.UTC(1970, 1, 1), 66],
            [Date.UTC(1971, 1, 1), 12],
            [Date.UTC(1972, 1, 1), 10],
            [Date.UTC(1973, 1, 1), 44],
            [Date.UTC(1974, 1, 1), 44],
            [Date.UTC(1975, 1, 1), 29],
            [Date.UTC(1976, 1, 1), 20],
            [Date.UTC(1977, 1, 1), 18],
            [Date.UTC(1978, 1, 1), 12],
            [Date.UTC(1979, 1, 1), 14],
            [Date.UTC(1980, 1, 1), 20],
            [Date.UTC(1981, 1, 1), 20],
            [Date.UTC(1982, 1, 1), 28],
            [Date.UTC(1983, 1, 1), 32],
            [Date.UTC(1984, 1, 1), 73],
            [Date.UTC(1985, 1, 1), 27],
            [Date.UTC(1986, 1, 1), 30],
            [Date.UTC(1987, 1, 1), 30],
            [Date.UTC(1988, 1, 1), 27],
            [Date.UTC(1989, 1, 1), 22],
            [Date.UTC(1990, 1, 1), 61],
            [Date.UTC(1991, 1, 1), 29],
            [Date.UTC(1992, 1, 1), 22],
            [Date.UTC(1993, 1, 1), 28],
            [Date.UTC(1994, 1, 1), 35],
            [Date.UTC(1995, 1, 1), 13],
            [Date.UTC(1996, 1, 1), 12],
            [Date.UTC(1997, 1, 1), 17],
            [Date.UTC(1998, 1, 1), 19],
            [Date.UTC(1999, 1, 1), 50],
            [Date.UTC(2000, 1, 1), 58],
            [Date.UTC(2001, 1, 1), 16],
            [Date.UTC(2002, 1, 1), 26],
            [Date.UTC(2003, 1, 1), 36],
            [Date.UTC(2004, 1, 1), 13],
            [Date.UTC(2005, 1, 1), 51],
            [Date.UTC(2006, 1, 1), 23],
            [Date.UTC(2007, 1, 1), 57],
            [Date.UTC(2008, 1, 1), 45],
            [Date.UTC(2009, 1, 1), 11],
            [Date.UTC(2010, 1, 1), 7],
            [Date.UTC(2011, 1, 1), 23],
            [Date.UTC(2012, 1, 1), 31],
            [Date.UTC(2013, 1, 1), 16],
            [Date.UTC(2014, 1, 1), 9],
            [Date.UTC(2015, 1, 1), 36],
            [Date.UTC(2016, 1, 1), 3],
            [Date.UTC(2017, 1, 1), 2],
          ]
        }, {
          name: 'Kugelschreiber',
          
          visible:true,
          data: [
            [Date.UTC(1921, 1, 1), 21],
            [Date.UTC(1926, 1, 1), 1],
            [Date.UTC(1927, 1, 1), 3],
            [Date.UTC(1931, 1, 1), 5],
            [Date.UTC(1933, 1, 1), 1],
            [Date.UTC(1939, 1, 1), 1],
            [Date.UTC(1940, 1, 1), 2],
            [Date.UTC(1942, 1, 1), 1],
            [Date.UTC(1943, 1, 1), 1],
            [Date.UTC(1946, 1, 1), 1],
            [Date.UTC(1949, 1, 1), 4],
            [Date.UTC(1950, 1, 1), 1],
            [Date.UTC(1952, 1, 1), 5],
            [Date.UTC(1953, 1, 1), 2],
            [Date.UTC(1954, 1, 1), 19],
            [Date.UTC(1955, 1, 1), 7],
            [Date.UTC(1956, 1, 1), 6],
            [Date.UTC(1957, 1, 1), 2],
            [Date.UTC(1958, 1, 1), 9],
            [Date.UTC(1959, 1, 1), 1],
            [Date.UTC(1960, 1, 1), 10],
            [Date.UTC(1961, 1, 1), 5],
            [Date.UTC(1962, 1, 1), 7],
            [Date.UTC(1963, 1, 1), 13],
            [Date.UTC(1964, 1, 1), 24],
            [Date.UTC(1965, 1, 1), 10],
            [Date.UTC(1966, 1, 1), 11],
            [Date.UTC(1967, 1, 1), 16],
            [Date.UTC(1968, 1, 1), 8],
            [Date.UTC(1969, 1, 1), 13],
            [Date.UTC(1970, 1, 1), 13],
            [Date.UTC(1971, 1, 1), 4],
            [Date.UTC(1972, 1, 1), 1],
            [Date.UTC(1973, 1, 1), 4],
            [Date.UTC(1974, 1, 1), 4],
            [Date.UTC(1975, 1, 1), 29],
            [Date.UTC(1976, 1, 1), 6],
            [Date.UTC(1977, 1, 1), 1],
            [Date.UTC(1978, 1, 1), 3],
            [Date.UTC(1979, 1, 1), 9],
            [Date.UTC(1980, 1, 1), 5],
            [Date.UTC(1981, 1, 1), 5],
            [Date.UTC(1982, 1, 1), 3],
            [Date.UTC(1984, 1, 1), 2],
            [Date.UTC(1985, 1, 1), 3],
            [Date.UTC(1986, 1, 1), 3],
            [Date.UTC(1987, 1, 1), 11],
            [Date.UTC(1988, 1, 1), 2],
            [Date.UTC(1991, 1, 1), 1],
            [Date.UTC(1992, 1, 1), 34],
            [Date.UTC(1993, 1, 1), 3],
            [Date.UTC(1994, 1, 1), 2],
            [Date.UTC(1995, 1, 1), 2],
            [Date.UTC(1996, 1, 1), 3],
            [Date.UTC(1997, 1, 1), 5],
            [Date.UTC(1998, 1, 1), 13],
            [Date.UTC(1999, 1, 1), 5],
            [Date.UTC(2000, 1, 1), 3],
            [Date.UTC(2001, 1, 1), 16],
            [Date.UTC(2002, 1, 1), 33],
            [Date.UTC(2003, 1, 1), 68],
            [Date.UTC(2004, 1, 1), 27],
            [Date.UTC(2005, 1, 1), 1],
            [Date.UTC(2006, 1, 1), 5],
            [Date.UTC(2007, 1, 1), 4],
            [Date.UTC(2008, 1, 1), 2],
            [Date.UTC(2010, 1, 1), 1],
            [Date.UTC(2013, 1, 1), 1],

          ]
        },
        {
          name: 'Öl',
          
          visible:true,
          data: [
            [Date.UTC(1871, 1, 1), 3],
            [Date.UTC(1872, 1, 1), 10],
            [Date.UTC(1875, 1, 1), 9],
            [Date.UTC(1877, 1, 1), 3],
            [Date.UTC(1878, 1, 1), 27],
            [Date.UTC(1882, 1, 1), 1],
            [Date.UTC(1883, 1, 1), 6],
            [Date.UTC(1890, 1, 1), 2],
            [Date.UTC(1891, 1, 1), 3],
            [Date.UTC(1895, 1, 1), 3],
            [Date.UTC(1897, 1, 1), 7],
            [Date.UTC(1898, 1, 1), 5],
            [Date.UTC(1899, 1, 1), 10],
            [Date.UTC(1900, 1, 1), 4],
            [Date.UTC(1901, 1, 1), 3],
            [Date.UTC(1902, 1, 1), 15],
            [Date.UTC(1903, 1, 1), 2],
            [Date.UTC(1904, 1, 1), 8],
            [Date.UTC(1905, 1, 1), 12],
            [Date.UTC(1906, 1, 1), 25],
            [Date.UTC(1907, 1, 1), 32],
            [Date.UTC(1908, 1, 1), 17],
            [Date.UTC(1909, 1, 1), 36],
            [Date.UTC(1910, 1, 1), 7],
            [Date.UTC(1911, 1, 1), 43],
            [Date.UTC(1912, 1, 1), 5],
            [Date.UTC(1913, 1, 1), 13],
            [Date.UTC(1914, 1, 1), 14],
            [Date.UTC(1915, 1, 1), 15],
            [Date.UTC(1916, 1, 1), 16],
            [Date.UTC(1917, 1, 1), 25],
            [Date.UTC(1918, 1, 1), 19],
            [Date.UTC(1919, 1, 1), 20],
            [Date.UTC(1920, 1, 1), 6],
            [Date.UTC(1921, 1, 1), 30],
            [Date.UTC(1922, 1, 1), 24],
            [Date.UTC(1923, 1, 1), 13],
            [Date.UTC(1924, 1, 1), 15],
            [Date.UTC(1925, 1, 1), 22],
            [Date.UTC(1926, 1, 1), 32],
            [Date.UTC(1927, 1, 1), 91],
            [Date.UTC(1928, 1, 1), 11],
            [Date.UTC(1929, 1, 1), 7],
            [Date.UTC(1930, 1, 1), 18],
            [Date.UTC(1931, 1, 1), 19],
            [Date.UTC(1932, 1, 1), 26],
            [Date.UTC(1933, 1, 1), 45],
            [Date.UTC(1934, 1, 1), 27],
            [Date.UTC(1935, 1, 1), 21],
            [Date.UTC(1936, 1, 1), 34],
            [Date.UTC(1937, 1, 1), 22],
            [Date.UTC(1938, 1, 1), 42],
            [Date.UTC(1939, 1, 1), 11],
            [Date.UTC(1940, 1, 1), 25],
            [Date.UTC(1941, 1, 1), 20],
            [Date.UTC(1942, 1, 1), 19],
            [Date.UTC(1943, 1, 1), 25],
            [Date.UTC(1944, 1, 1), 14],
            [Date.UTC(1945, 1, 1), 17],
            [Date.UTC(1946, 1, 1), 47],
            [Date.UTC(1947, 1, 1), 8],
            [Date.UTC(1948, 1, 1), 4],
            [Date.UTC(1949, 1, 1), 21],
            [Date.UTC(1950, 1, 1), 26],
            [Date.UTC(1951, 1, 1), 15],
            [Date.UTC(1952, 1, 1), 15],
            [Date.UTC(1953, 1, 1), 83],
            [Date.UTC(1954, 1, 1), 16],
            [Date.UTC(1955, 1, 1), 10],
            [Date.UTC(1956, 1, 1), 17],
            [Date.UTC(1957, 1, 1), 21],
            [Date.UTC(1958, 1, 1), 27],
            [Date.UTC(1959, 1, 1), 23],
            [Date.UTC(1960, 1, 1), 29],
            [Date.UTC(1961, 1, 1), 27],
            [Date.UTC(1962, 1, 1), 30],
            [Date.UTC(1963, 1, 1), 23],
            [Date.UTC(1964, 1, 1), 35],
            [Date.UTC(1965, 1, 1), 22],
            [Date.UTC(1966, 1, 1), 37],
            [Date.UTC(1967, 1, 1), 34],
            [Date.UTC(1968, 1, 1), 12],
            [Date.UTC(1969, 1, 1), 47],
            [Date.UTC(1970, 1, 1), 9],
            [Date.UTC(1971, 1, 1), 14],
            [Date.UTC(1972, 1, 1), 11],
            [Date.UTC(1973, 1, 1), 19],
            [Date.UTC(1974, 1, 1), 20],
            [Date.UTC(1975, 1, 1), 18],
            [Date.UTC(1976, 1, 1), 15],
            [Date.UTC(1977, 1, 1), 12],
            [Date.UTC(1978, 1, 1), 5],
            [Date.UTC(1979, 1, 1), 9],
            [Date.UTC(1980, 1, 1), 8],
            [Date.UTC(1981, 1, 1), 17],
            [Date.UTC(1982, 1, 1), 8],
            [Date.UTC(1983, 1, 1), 7],
            [Date.UTC(1984, 1, 1), 13],
            [Date.UTC(1985, 1, 1), 19],
            [Date.UTC(1986, 1, 1), 8],
            [Date.UTC(1987, 1, 1), 13],
            [Date.UTC(1988, 1, 1), 11],
            [Date.UTC(1989, 1, 1), 10],
            [Date.UTC(1990, 1, 1), 7],
            [Date.UTC(1991, 1, 1), 12],
            [Date.UTC(1992, 1, 1), 11],
            [Date.UTC(1993, 1, 1), 10],
            [Date.UTC(1994, 1, 1), 9],
            [Date.UTC(1995, 1, 1), 12],
            [Date.UTC(1996, 1, 1), 10],
            [Date.UTC(1997, 1, 1), 11],
            [Date.UTC(1998, 1, 1), 5],
            [Date.UTC(1999, 1, 1), 10],
            [Date.UTC(2000, 1, 1), 9],
            [Date.UTC(2001, 1, 1), 16],
            [Date.UTC(2002, 1, 1), 18],
            [Date.UTC(2003, 1, 1), 56],
            [Date.UTC(2004, 1, 1), 40],
            [Date.UTC(2005, 1, 1), 15],
            [Date.UTC(2006, 1, 1), 6],
            [Date.UTC(2007, 1, 1), 8],
            [Date.UTC(2008, 1, 1), 6],
            [Date.UTC(2009, 1, 1), 7],
            [Date.UTC(2010, 1, 1), 11],
            [Date.UTC(2011, 1, 1), 6],
            [Date.UTC(2012, 1, 1), 4],
            [Date.UTC(2013, 1, 1), 10],
            [Date.UTC(2014, 1, 1), 5],
            [Date.UTC(2015, 1, 1), 7],
            [Date.UTC(2017, 1, 1), 1],
          ]
        },
        {
          name: 'Papier',
          color:'yellow',
          data: [
            [Date.UTC(1818, 1, 1), 6],
            [Date.UTC(1830, 1, 1), 2],
            [Date.UTC(1833, 1, 1), 1],
            [Date.UTC(1834, 1, 1), 11],
            [Date.UTC(1836, 1, 1), 3],
            [Date.UTC(1837, 1, 1), 1],
            [Date.UTC(1838, 1, 1), 11],
            [Date.UTC(1839, 1, 1), 1],
            [Date.UTC(1840, 1, 1), 1],
            [Date.UTC(1842, 1, 1), 4],
            [Date.UTC(1844, 1, 1), 45],
            [Date.UTC(1845, 1, 1), 2],
            [Date.UTC(1846, 1, 1), 5],
            [Date.UTC(1847, 1, 1), 13],
            [Date.UTC(1848, 1, 1), 3],
            [Date.UTC(1849, 1, 1), 1],
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
            [Date.UTC(1883, 1, 1), 3],
            [Date.UTC(1884, 1, 1), 1],
            [Date.UTC(1885, 1, 1), 2],
            [Date.UTC(1890, 1, 1), 11],
            [Date.UTC(1891, 1, 1), 13],
            [Date.UTC(1892, 1, 1), 682],
            [Date.UTC(1893, 1, 1), 5],
            [Date.UTC(1894, 1, 1), 3],
            [Date.UTC(1895, 1, 1), 8],
            [Date.UTC(1896, 1, 1), 1],
            [Date.UTC(1897, 1, 1), 1],
            [Date.UTC(1898, 1, 1), 4],
            [Date.UTC(1899, 1, 1), 24],
            [Date.UTC(1900, 1, 1), 34],
            [Date.UTC(1901, 1, 1), 7],
            [Date.UTC(1902, 1, 1), 63],
            [Date.UTC(1903, 1, 1), 54],
            [Date.UTC(1904, 1, 1), 22],
            [Date.UTC(1905, 1, 1), 39],
            [Date.UTC(1906, 1, 1), 28],
            [Date.UTC(1907, 1, 1), 332],
            [Date.UTC(1908, 1, 1), 36],
            [Date.UTC(1909, 1, 1), 102],
            [Date.UTC(1910, 1, 1), 23],
            [Date.UTC(1911, 1, 1), 125],
            [Date.UTC(1912, 1, 1), 45],
            [Date.UTC(1913, 1, 1), 512],
            [Date.UTC(1914, 1, 1), 82],
            [Date.UTC(1915, 1, 1), 32],
            [Date.UTC(1916, 1, 1), 725],
            [Date.UTC(1917, 1, 1), 62],
            [Date.UTC(1918, 1, 1), 47],
            [Date.UTC(1919, 1, 1), 36],
            [Date.UTC(1920, 1, 1), 52],
            [Date.UTC(1921, 1, 1), 262],
            [Date.UTC(1922, 1, 1), 52],
            [Date.UTC(1923, 1, 1), 95],
            [Date.UTC(1924, 1, 1), 19],
            [Date.UTC(1925, 1, 1), 72],
            [Date.UTC(1926, 1, 1), 70],
            [Date.UTC(1927, 1, 1), 2306],
            [Date.UTC(1928, 1, 1), 19],
            [Date.UTC(1929, 1, 1), 30],
            [Date.UTC(1930, 1, 1), 44],
            [Date.UTC(1931, 1, 1), 64],
            [Date.UTC(1932, 1, 1), 66],
            [Date.UTC(1933, 1, 1), 158],
            [Date.UTC(1934, 1, 1), 37],
            [Date.UTC(1935, 1, 1), 69],
            [Date.UTC(1936, 1, 1), 126],
            [Date.UTC(1937, 1, 1), 177],
            [Date.UTC(1938, 1, 1), 64],
            [Date.UTC(1939, 1, 1), 40],
            [Date.UTC(1940, 1, 1), 46],
            [Date.UTC(1941, 1, 1), 42],
            [Date.UTC(1942, 1, 1), 52],
            [Date.UTC(1943, 1, 1), 209],
            [Date.UTC(1944, 1, 1), 29],
            [Date.UTC(1945, 1, 1), 86],
            [Date.UTC(1946, 1, 1), 109],
            [Date.UTC(1947, 1, 1), 17],
            [Date.UTC(1948, 1, 1), 34],
            [Date.UTC(1949, 1, 1), 113],
            [Date.UTC(1950, 1, 1), 71],
            [Date.UTC(1951, 1, 1), 68],
            [Date.UTC(1952, 1, 1), 44],
            [Date.UTC(1953, 1, 1), 228],
            [Date.UTC(1954, 1, 1), 141],
            [Date.UTC(1955, 1, 1), 205],
            [Date.UTC(1956, 1, 1), 135],
            [Date.UTC(1957, 1, 1), 74],
            [Date.UTC(1958, 1, 1), 90],
            [Date.UTC(1959, 1, 1), 60],
            [Date.UTC(1960, 1, 1), 170],
            [Date.UTC(1961, 1, 1), 87],
            [Date.UTC(1962, 1, 1), 193],
            [Date.UTC(1963, 1, 1), 200],
            [Date.UTC(1964, 1, 1), 391],
            [Date.UTC(1965, 1, 1), 180],
            [Date.UTC(1966, 1, 1), 348],
            [Date.UTC(1967, 1, 1), 550],
            [Date.UTC(1968, 1, 1), 228],
            [Date.UTC(1969, 1, 1), 281],
            [Date.UTC(1970, 1, 1), 194],
            [Date.UTC(1970, 1, 1), 1],
            [Date.UTC(1971, 1, 1), 165],
            [Date.UTC(1972, 1, 1), 134],
            [Date.UTC(1973, 1, 1), 300],
            [Date.UTC(1974, 1, 1), 188],
            [Date.UTC(1975, 1, 1), 208],
            [Date.UTC(1976, 1, 1), 230],
            [Date.UTC(1977, 1, 1), 188],
            [Date.UTC(1978, 1, 1), 150],
            [Date.UTC(1979, 1, 1), 96],
            [Date.UTC(1980, 1, 1), 116],
            [Date.UTC(1981, 1, 1), 74],
            [Date.UTC(1982, 1, 1), 153],
            [Date.UTC(1983, 1, 1), 129],
            [Date.UTC(1984, 1, 1), 129],
            [Date.UTC(1985, 1, 1), 85],
            [Date.UTC(1986, 1, 1), 98],
            [Date.UTC(1987, 1, 1), 134],
            [Date.UTC(1988, 1, 1), 68],
            [Date.UTC(1989, 1, 1), 80],
            [Date.UTC(1990, 1, 1), 75],
            [Date.UTC(1991, 1, 1), 87],
            [Date.UTC(1992, 1, 1), 191],
            [Date.UTC(1993, 1, 1), 77],
            [Date.UTC(1994, 1, 1), 104],
            [Date.UTC(1995, 1, 1), 127],
            [Date.UTC(1996, 1, 1), 104],
            [Date.UTC(1997, 1, 1), 97],
            [Date.UTC(1998, 1, 1), 162],
            [Date.UTC(1999, 1, 1), 171],
            [Date.UTC(2000, 1, 1), 151],
            [Date.UTC(2001, 1, 1), 325],
            [Date.UTC(2002, 1, 1), 304],
            [Date.UTC(2003, 1, 1), 738],
            [Date.UTC(2004, 1, 1), 315],
            [Date.UTC(2005, 1, 1), 91],
            [Date.UTC(2006, 1, 1), 41],
            [Date.UTC(2007, 1, 1), 54],
            [Date.UTC(2008, 1, 1), 102],
            [Date.UTC(2009, 1, 1), 45],
            [Date.UTC(2010, 1, 1), 48],
            [Date.UTC(2011, 1, 1), 54],
            [Date.UTC(2012, 1, 1), 56],
            [Date.UTC(2013, 1, 1), 34],
            [Date.UTC(2014, 1, 1), 35],
            [Date.UTC(2015, 1, 1), 57],
            [Date.UTC(2016, 1, 1), 125],
            [Date.UTC(2017, 1, 1), 10],

          ]
        },
        {
          name: 'Pastel',
          visible:true,
          
          data: [
            [Date.UTC(1875, 1, 1), 1],
            [Date.UTC(1878, 1, 1), 14],
            [Date.UTC(1891, 1, 1), 1],
            [Date.UTC(1893, 1, 1), 1],
            [Date.UTC(1894, 1, 1), 1],
            [Date.UTC(1896, 1, 1), 1],
            [Date.UTC(1899, 1, 1), 1],
            [Date.UTC(1900, 1, 1), 2],
            [Date.UTC(1902, 1, 1), 2],
            [Date.UTC(1903, 1, 1), 1],
            [Date.UTC(1905, 1, 1), 1],
            [Date.UTC(1907, 1, 1), 1],
            [Date.UTC(1909, 1, 1), 4],
            [Date.UTC(1910, 1, 1), 1],
            [Date.UTC(1911, 1, 1), 1],
            [Date.UTC(1912, 1, 1), 1],
            [Date.UTC(1913, 1, 1), 2],
            [Date.UTC(1914, 1, 1), 7],
            [Date.UTC(1918, 1, 1), 1],
            [Date.UTC(1919, 1, 1), 1],
            [Date.UTC(1920, 1, 1), 1],
            [Date.UTC(1921, 1, 1), 4],
            [Date.UTC(1922, 1, 1), 1],
            [Date.UTC(1924, 1, 1), 1],
            [Date.UTC(1925, 1, 1), 1],
            [Date.UTC(1926, 1, 1), 2],
            [Date.UTC(1927, 1, 1), 8],
            [Date.UTC(1930, 1, 1), 1],
            [Date.UTC(1931, 1, 1), 2],
            [Date.UTC(1932, 1, 1), 1],
            [Date.UTC(1934, 1, 1), 1],
            [Date.UTC(1936, 1, 1), 8],
            [Date.UTC(1937, 1, 1), 1],
            [Date.UTC(1938, 1, 1), 3],
            [Date.UTC(1939, 1, 1), 1],
            [Date.UTC(1941, 1, 1), 5],
            [Date.UTC(1942, 1, 1), 1],
            [Date.UTC(1945, 1, 1), 1],
            [Date.UTC(1946, 1, 1), 2],
            [Date.UTC(1947, 1, 1), 1],
            [Date.UTC(1948, 1, 1), 1],
            [Date.UTC(1949, 1, 1), 1],
            [Date.UTC(1950, 1, 1), 2],
            [Date.UTC(1952, 1, 1), 2],
            [Date.UTC(1953, 1, 1), 1],
            [Date.UTC(1954, 1, 1), 1],
            [Date.UTC(1955, 1, 1), 4],
            [Date.UTC(1956, 1, 1), 6],
            [Date.UTC(1957, 1, 1), 1],
            [Date.UTC(1958, 1, 1), 2],
            [Date.UTC(1959, 1, 1), 1],
            [Date.UTC(1960, 1, 1), 2],
            [Date.UTC(1961, 1, 1), 2],
            [Date.UTC(1962, 1, 1), 9],
            [Date.UTC(1963, 1, 1), 3],
            [Date.UTC(1964, 1, 1), 10],
            [Date.UTC(1965, 1, 1), 5],
            [Date.UTC(1966, 1, 1), 8],
            [Date.UTC(1967, 1, 1), 15],
            [Date.UTC(1968, 1, 1), 3],
            [Date.UTC(1969, 1, 1), 5],
            [Date.UTC(1970, 1, 1), 4],
            [Date.UTC(1971, 1, 1), 5],
            [Date.UTC(1972, 1, 1), 3],
            [Date.UTC(1973, 1, 1), 40],
            [Date.UTC(1974, 1, 1), 7],
            [Date.UTC(1975, 1, 1), 6],
            [Date.UTC(1976, 1, 1), 7],
            [Date.UTC(1977, 1, 1), 2],
            [Date.UTC(1978, 1, 1), 7],
            [Date.UTC(1979, 1, 1), 2],
            [Date.UTC(1980, 1, 1), 9],
            [Date.UTC(1981, 1, 1), 9],
            [Date.UTC(1982, 1, 1), 2],
            [Date.UTC(1983, 1, 1), 3],
            [Date.UTC(1984, 1, 1), 5],
            [Date.UTC(1985, 1, 1), 4],
            [Date.UTC(1986, 1, 1), 4],
            [Date.UTC(1987, 1, 1), 9],
            [Date.UTC(1988, 1, 1), 3],
            [Date.UTC(1989, 1, 1), 1],
            [Date.UTC(1990, 1, 1), 2],
            [Date.UTC(1991, 1, 1), 4],
            [Date.UTC(1993, 1, 1), 1],
            [Date.UTC(1996, 1, 1), 5],
            [Date.UTC(1998, 1, 1), 4],
            [Date.UTC(1999, 1, 1), 2],
            [Date.UTC(2000, 1, 1), 5],
            [Date.UTC(2001, 1, 1), 5],
            [Date.UTC(2002, 1, 1), 7],
            [Date.UTC(2003, 1, 1), 10],
            [Date.UTC(2004, 1, 1), 7],
            [Date.UTC(2005, 1, 1), 3],
            [Date.UTC(2008, 1, 1), 1],
            [Date.UTC(2009, 1, 1), 1],
            [Date.UTC(2011, 1, 1), 1],
            [Date.UTC(2013, 1, 1), 1],
            [Date.UTC(2014, 1, 1), 2],
            [Date.UTC(2015, 1, 1), 1],
            [Date.UTC(2016, 1, 1), 110],

          ]
        },
        {
          name: 'Stahl',
          
          visible:true,
          data: [
            [Date.UTC(1821, 1, 1), 1],
            [Date.UTC(1827, 1, 1), 1],
            [Date.UTC(1868, 1, 1), 1],
            [Date.UTC(1872, 1, 1), 1],
            [Date.UTC(1889, 1, 1), 1],
            [Date.UTC(1899, 1, 1), 1],
            [Date.UTC(1900, 1, 1), 2],
            [Date.UTC(1909, 1, 1), 1],
            [Date.UTC(1913, 1, 1), 4],
            [Date.UTC(1914, 1, 1), 1],
            [Date.UTC(1917, 1, 1), 1],
            [Date.UTC(1919, 1, 1), 1],
            [Date.UTC(1920, 1, 1), 8],
            [Date.UTC(1921, 1, 1), 1],
            [Date.UTC(1922, 1, 1), 1],
            [Date.UTC(1923, 1, 1), 1],
            [Date.UTC(1924, 1, 1), 1],
            [Date.UTC(1926, 1, 1), 7],
            [Date.UTC(1927, 1, 1), 37],
            [Date.UTC(1929, 1, 1), 2],
            [Date.UTC(1930, 1, 1), 4],
            [Date.UTC(1931, 1, 1), 4],
            [Date.UTC(1932, 1, 1), 6],
            [Date.UTC(1933, 1, 1), 8],
            [Date.UTC(1934, 1, 1), 19],
            [Date.UTC(1935, 1, 1), 19],
            [Date.UTC(1936, 1, 1), 19],
            [Date.UTC(1937, 1, 1), 31],
            [Date.UTC(1938, 1, 1), 8],
            [Date.UTC(1939, 1, 1), 3],
            [Date.UTC(1940, 1, 1), 11],
            [Date.UTC(1941, 1, 1), 21],
            [Date.UTC(1942, 1, 1), 16],
            [Date.UTC(1943, 1, 1), 27],
            [Date.UTC(1944, 1, 1), 12],
            [Date.UTC(1945, 1, 1), 6],
            [Date.UTC(1946, 1, 1), 15],
            [Date.UTC(1947, 1, 1), 5],
            [Date.UTC(1948, 1, 1), 13],
            [Date.UTC(1949, 1, 1), 6],
            [Date.UTC(1950, 1, 1), 38],
            [Date.UTC(1951, 1, 1), 9],
            [Date.UTC(1952, 1, 1), 10],
            [Date.UTC(1953, 1, 1), 16],
            [Date.UTC(1954, 1, 1), 17],
            [Date.UTC(1955, 1, 1), 10],
            [Date.UTC(1956, 1, 1), 8],
            [Date.UTC(1957, 1, 1), 9],
            [Date.UTC(1958, 1, 1), 15],
            [Date.UTC(1959, 1, 1), 6],
            [Date.UTC(1960, 1, 1), 36],
            [Date.UTC(1961, 1, 1), 14],
            [Date.UTC(1962, 1, 1), 13],
            [Date.UTC(1963, 1, 1), 12],
            [Date.UTC(1964, 1, 1), 21],
            [Date.UTC(1965, 1, 1), 21],
            [Date.UTC(1966, 1, 1), 20],
            [Date.UTC(1967, 1, 1), 7],
            [Date.UTC(1968, 1, 1), 21],
            [Date.UTC(1969, 1, 1), 16],
            [Date.UTC(1970, 1, 1), 11],
            [Date.UTC(1971, 1, 1), 10],
            [Date.UTC(1972, 1, 1), 6],
            [Date.UTC(1973, 1, 1), 11],
            [Date.UTC(1974, 1, 1), 12],
            [Date.UTC(1975, 1, 1), 12],
            [Date.UTC(1976, 1, 1), 5],
            [Date.UTC(1977, 1, 1), 5],
            [Date.UTC(1978, 1, 1), 14],
            [Date.UTC(1979, 1, 1), 6],
            [Date.UTC(1980, 1, 1), 16],
            [Date.UTC(1981, 1, 1), 8],
            [Date.UTC(1982, 1, 1), 4],
            [Date.UTC(1983, 1, 1), 7],
            [Date.UTC(1984, 1, 1), 6],
            [Date.UTC(1985, 1, 1), 3],
            [Date.UTC(1986, 1, 1), 8],
            [Date.UTC(1987, 1, 1), 9],
            [Date.UTC(1988, 1, 1), 10],
            [Date.UTC(1989, 1, 1), 7],
            [Date.UTC(1990, 1, 1), 2],
            [Date.UTC(1991, 1, 1), 11],
            [Date.UTC(1992, 1, 1), 10],
            [Date.UTC(1993, 1, 1), 12],
            [Date.UTC(1994, 1, 1), 12],
            [Date.UTC(1995, 1, 1), 2],
            [Date.UTC(1996, 1, 1), 9],
            [Date.UTC(1997, 1, 1), 8],
            [Date.UTC(1998, 1, 1), 5],
            [Date.UTC(1999, 1, 1), 5],
            [Date.UTC(2000, 1, 1), 7],
            [Date.UTC(2001, 1, 1), 9],
            [Date.UTC(2002, 1, 1), 9],
            [Date.UTC(2003, 1, 1), 7],
            [Date.UTC(2004, 1, 1), 5],
            [Date.UTC(2005, 1, 1), 3],
            [Date.UTC(2006, 1, 1), 8],
            [Date.UTC(2007, 1, 1), 15],
            [Date.UTC(2008, 1, 1), 4],
            [Date.UTC(2009, 1, 1), 4],
            [Date.UTC(2010, 1, 1), 3],
            [Date.UTC(2011, 1, 1), 2],
            [Date.UTC(2012, 1, 1), 14],
            [Date.UTC(2013, 1, 1), 5],
            [Date.UTC(2015, 1, 1), 3],
            [Date.UTC(2016, 1, 1), 1],
            [Date.UTC(2017, 1, 1), 1],

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
            [Date.UTC(1885, 1, 1), 1],
            [Date.UTC(1890, 1, 1), 8],
            [Date.UTC(1891, 1, 1), 9],
            [Date.UTC(1892, 1, 1), 1],
            [Date.UTC(1893, 1, 1), 2],
            [Date.UTC(1895, 1, 1), 3],
            [Date.UTC(1896, 1, 1), 1],
            [Date.UTC(1898, 1, 1), 4],
            [Date.UTC(1899, 1, 1), 9],
            [Date.UTC(1900, 1, 1), 6],
            [Date.UTC(1901, 1, 1), 9],
            [Date.UTC(1902, 1, 1), 52],
            [Date.UTC(1903, 1, 1), 2],
            [Date.UTC(1904, 1, 1), 21],
            [Date.UTC(1905, 1, 1), 14],
            [Date.UTC(1906, 1, 1), 14],
            [Date.UTC(1907, 1, 1), 202],
            [Date.UTC(1908, 1, 1), 12],
            [Date.UTC(1909, 1, 1), 39],
            [Date.UTC(1910, 1, 1), 6],
            [Date.UTC(1911, 1, 1), 23],
            [Date.UTC(1912, 1, 1), 6],
            [Date.UTC(1913, 1, 1), 455],
            [Date.UTC(1914, 1, 1), 26],
            [Date.UTC(1915, 1, 1), 35],
            [Date.UTC(1916, 1, 1), 746],
            [Date.UTC(1917, 1, 1), 21],
            [Date.UTC(1918, 1, 1), 18],
            [Date.UTC(1919, 1, 1), 18],
            [Date.UTC(1920, 1, 1), 18],
            [Date.UTC(1921, 1, 1), 125],
            [Date.UTC(1922, 1, 1), 29],
            [Date.UTC(1923, 1, 1), 16],
            [Date.UTC(1924, 1, 1), 11],
            [Date.UTC(1925, 1, 1), 33],
            [Date.UTC(1926, 1, 1), 31],
            [Date.UTC(1927, 1, 1), 2116],
            [Date.UTC(1928, 1, 1), 9],
            [Date.UTC(1929, 1, 1), 11],
            [Date.UTC(1930, 1, 1), 25],
            [Date.UTC(1931, 1, 1), 28],
            [Date.UTC(1932, 1, 1), 33],
            [Date.UTC(1933, 1, 1), 92],
            [Date.UTC(1934, 1, 1), 20],
            [Date.UTC(1935, 1, 1), 24],
            [Date.UTC(1936, 1, 1), 84],
            [Date.UTC(1937, 1, 1), 19],
            [Date.UTC(1938, 1, 1), 33],
            [Date.UTC(1939, 1, 1), 22],
            [Date.UTC(1940, 1, 1), 20],
            [Date.UTC(1941, 1, 1), 14],
            [Date.UTC(1942, 1, 1), 22],
            [Date.UTC(1943, 1, 1), 26],
            [Date.UTC(1944, 1, 1), 2],
            [Date.UTC(1945, 1, 1), 15],
            [Date.UTC(1946, 1, 1), 22],
            [Date.UTC(1947, 1, 1), 5],
            [Date.UTC(1948, 1, 1), 7],
            [Date.UTC(1949, 1, 1), 44],
            [Date.UTC(1950, 1, 1), 11],
            [Date.UTC(1951, 1, 1), 32],
            [Date.UTC(1952, 1, 1), 15],
            [Date.UTC(1953, 1, 1), 56],
            [Date.UTC(1954, 1, 1), 29],
            [Date.UTC(1955, 1, 1), 78],
            [Date.UTC(1956, 1, 1), 76],
            [Date.UTC(1957, 1, 1), 62],
            [Date.UTC(1958, 1, 1), 53],
            [Date.UTC(1959, 1, 1), 20],
            [Date.UTC(1960, 1, 1), 90],
            [Date.UTC(1961, 1, 1), 30],
            [Date.UTC(1962, 1, 1), 70],
            [Date.UTC(1963, 1, 1), 27],
            [Date.UTC(1964, 1, 1), 175],
            [Date.UTC(1965, 1, 1), 63],
            [Date.UTC(1966, 1, 1), 207],
            [Date.UTC(1967, 1, 1), 201],
            [Date.UTC(1968, 1, 1), 99],
            [Date.UTC(1969, 1, 1), 104],
            [Date.UTC(1970, 1, 1), 165],
            [Date.UTC(1971, 1, 1), 69],
            [Date.UTC(1972, 1, 1), 35],
            [Date.UTC(1973, 1, 1), 228],
            [Date.UTC(1974, 1, 1), 85],
            [Date.UTC(1975, 1, 1), 112],
            [Date.UTC(1976, 1, 1), 95],
            [Date.UTC(1977, 1, 1), 79],
            [Date.UTC(1978, 1, 1), 36],
            [Date.UTC(1979, 1, 1), 34],
            [Date.UTC(1980, 1, 1), 56],
            [Date.UTC(1981, 1, 1), 45],
            [Date.UTC(1982, 1, 1), 34],
            [Date.UTC(1983, 1, 1), 29],
            [Date.UTC(1984, 1, 1), 76],
            [Date.UTC(1985, 1, 1), 54],
            [Date.UTC(1986, 1, 1), 13],
            [Date.UTC(1987, 1, 1), 44],
            [Date.UTC(1988, 1, 1), 24],
            [Date.UTC(1989, 1, 1), 25],
            [Date.UTC(1990, 1, 1), 32],
            [Date.UTC(1991, 1, 1), 34],
            [Date.UTC(1992, 1, 1), 106],
            [Date.UTC(1993, 1, 1), 21],
            [Date.UTC(1994, 1, 1), 48],
            [Date.UTC(1995, 1, 1), 20],
            [Date.UTC(1996, 1, 1), 29],
            [Date.UTC(1997, 1, 1), 43],
            [Date.UTC(1998, 1, 1), 68],
            [Date.UTC(1999, 1, 1), 61],
            [Date.UTC(2000, 1, 1), 76],
            [Date.UTC(2001, 1, 1), 173],
            [Date.UTC(2002, 1, 1), 162],
            [Date.UTC(2003, 1, 1), 350],
            [Date.UTC(2004, 1, 1), 146],
            [Date.UTC(2005, 1, 1), 73],
            [Date.UTC(2006, 1, 1), 19],
            [Date.UTC(2007, 1, 1), 20],
            [Date.UTC(2008, 1, 1), 36],
            [Date.UTC(2009, 1, 1), 21],
            [Date.UTC(2010, 1, 1), 42],
            [Date.UTC(2011, 1, 1), 30],
            [Date.UTC(2012, 1, 1), 13],
            [Date.UTC(2013, 1, 1), 9],
            [Date.UTC(2014, 1, 1), 19],
            [Date.UTC(2015, 1, 1), 47],
            [Date.UTC(2016, 1, 1), 112],
            [Date.UTC(2017, 1, 1), 3],

          ]
        },
        {
          name: 'Tinte',
          
          visible:true,
          data: [
            [Date.UTC(1840, 1, 1), 1],
            [Date.UTC(1866, 1, 1), 1],
            [Date.UTC(1870, 1, 1), 2],
            [Date.UTC(1878, 1, 1), 5],
            [Date.UTC(1879, 1, 1), 1],
            [Date.UTC(1883, 1, 1), 1],
            [Date.UTC(1885, 1, 1), 2],
            [Date.UTC(1890, 1, 1), 3],
            [Date.UTC(1891, 1, 1), 3],
            [Date.UTC(1893, 1, 1), 3],
            [Date.UTC(1895, 1, 1), 2],
            [Date.UTC(1899, 1, 1), 9],
            [Date.UTC(1900, 1, 1), 17],
            [Date.UTC(1901, 1, 1), 2],
            [Date.UTC(1902, 1, 1), 4],
            [Date.UTC(1903, 1, 1), 31],
            [Date.UTC(1904, 1, 1), 5],
            [Date.UTC(1905, 1, 1), 17],
            [Date.UTC(1906, 1, 1), 9],
            [Date.UTC(1907, 1, 1), 104],
            [Date.UTC(1908, 1, 1), 10],
            [Date.UTC(1909, 1, 1), 67],
            [Date.UTC(1910, 1, 1), 8],
            [Date.UTC(1911, 1, 1), 25],
            [Date.UTC(1912, 1, 1), 19],
            [Date.UTC(1913, 1, 1), 277],
            [Date.UTC(1914, 1, 1), 69],
            [Date.UTC(1915, 1, 1), 26],
            [Date.UTC(1916, 1, 1), 56],
            [Date.UTC(1917, 1, 1), 18],
            [Date.UTC(1918, 1, 1), 53],
            [Date.UTC(1919, 1, 1), 16],
            [Date.UTC(1920, 1, 1), 17],
            [Date.UTC(1921, 1, 1), 55],
            [Date.UTC(1922, 1, 1), 8],
            [Date.UTC(1923, 1, 1), 72],
            [Date.UTC(1925, 1, 1), 31],
            [Date.UTC(1926, 1, 1), 32],
            [Date.UTC(1927, 1, 1), 514],
            [Date.UTC(1928, 1, 1), 10],
            [Date.UTC(1929, 1, 1), 17],
            [Date.UTC(1930, 1, 1), 15],
            [Date.UTC(1931, 1, 1), 28],
            [Date.UTC(1932, 1, 1), 33],
            [Date.UTC(1933, 1, 1), 91],
            [Date.UTC(1934, 1, 1), 18],
            [Date.UTC(1935, 1, 1), 34],
            [Date.UTC(1936, 1, 1), 79],
            [Date.UTC(1937, 1, 1), 53],
            [Date.UTC(1938, 1, 1), 27],
            [Date.UTC(1939, 1, 1), 25],
            [Date.UTC(1940, 1, 1), 14],
            [Date.UTC(1941, 1, 1), 28],
            [Date.UTC(1942, 1, 1), 39],
            [Date.UTC(1943, 1, 1), 175],
            [Date.UTC(1944, 1, 1), 9],
            [Date.UTC(1945, 1, 1), 86],
            [Date.UTC(1946, 1, 1), 60],
            [Date.UTC(1947, 1, 1), 7],
            [Date.UTC(1948, 1, 1), 20],
            [Date.UTC(1949, 1, 1), 62],
            [Date.UTC(1950, 1, 1), 27],
            [Date.UTC(1951, 1, 1), 30],
            [Date.UTC(1952, 1, 1), 26],
            [Date.UTC(1953, 1, 1), 85],
            [Date.UTC(1954, 1, 1), 94],
            [Date.UTC(1955, 1, 1), 63],
            [Date.UTC(1956, 1, 1), 74],
            [Date.UTC(1957, 1, 1), 89],
            [Date.UTC(1958, 1, 1), 71],
            [Date.UTC(1959, 1, 1), 40],
            [Date.UTC(1960, 1, 1), 115],
            [Date.UTC(1961, 1, 1), 59],
            [Date.UTC(1962, 1, 1), 79],
            [Date.UTC(1963, 1, 1), 158],
            [Date.UTC(1964, 1, 1), 95],
            [Date.UTC(1965, 1, 1), 59],
            [Date.UTC(1966, 1, 1), 133],
            [Date.UTC(1967, 1, 1), 226],
            [Date.UTC(1968, 1, 1), 154],
            [Date.UTC(1969, 1, 1), 131],
            [Date.UTC(1970, 1, 1), 116],
            [Date.UTC(1971, 1, 1), 85],
            [Date.UTC(1972, 1, 1), 78],
            [Date.UTC(1973, 1, 1), 76],
            [Date.UTC(1974, 1, 1), 127],
            [Date.UTC(1975, 1, 1), 105],
            [Date.UTC(1976, 1, 1), 117],
            [Date.UTC(1977, 1, 1), 100],
            [Date.UTC(1978, 1, 1), 60],
            [Date.UTC(1979, 1, 1), 29],
            [Date.UTC(1980, 1, 1), 73],
            [Date.UTC(1981, 1, 1), 84],
            [Date.UTC(1982, 1, 1), 46],
            [Date.UTC(1983, 1, 1), 55],
            [Date.UTC(1984, 1, 1), 38],
            [Date.UTC(1985, 1, 1), 64],
            [Date.UTC(1986, 1, 1), 41],
            [Date.UTC(1987, 1, 1), 43],
            [Date.UTC(1988, 1, 1), 22],
            [Date.UTC(1989, 1, 1), 27],
            [Date.UTC(1990, 1, 1), 29],
            [Date.UTC(1991, 1, 1), 40],
            [Date.UTC(1992, 1, 1), 50],
            [Date.UTC(1993, 1, 1), 22],
            [Date.UTC(1994, 1, 1), 55],
            [Date.UTC(1995, 1, 1), 83],
            [Date.UTC(1996, 1, 1), 36],
            [Date.UTC(1997, 1, 1), 45],
            [Date.UTC(1998, 1, 1), 67],
            [Date.UTC(1999, 1, 1), 66],
            [Date.UTC(2000, 1, 1), 69],
            [Date.UTC(2001, 1, 1), 117],
            [Date.UTC(2002, 1, 1), 107],
            [Date.UTC(2003, 1, 1), 238],
            [Date.UTC(2004, 1, 1), 114],
            [Date.UTC(2005, 1, 1), 109],
            [Date.UTC(2006, 1, 1), 36],
            [Date.UTC(2007, 1, 1), 129],
            [Date.UTC(2008, 1, 1), 62],
            [Date.UTC(2009, 1, 1), 27],
            [Date.UTC(2010, 1, 1), 64],
            [Date.UTC(2011, 1, 1), 58],
            [Date.UTC(2012, 1, 1), 68],
            [Date.UTC(2013, 1, 1), 168],
            [Date.UTC(2014, 1, 1), 28],
            [Date.UTC(2015, 1, 1), 44],
            [Date.UTC(2016, 1, 1), 9],
            [Date.UTC(2017, 1, 1), 3],
          ]
        },
        {
          name: 'Visitenkarte',
          visible:true,
          
          data: [
            [Date.UTC(1954, 1, 1), 61],
            [Date.UTC(1955, 1, 1), 24],
            [Date.UTC(1956, 1, 1), 4],
            [Date.UTC(1959, 1, 1), 8],
            [Date.UTC(1960, 1, 1), 2],
            [Date.UTC(1963, 1, 1), 3],
            [Date.UTC(1964, 1, 1), 15],
            [Date.UTC(1965, 1, 1), 19],
            [Date.UTC(1966, 1, 1), 12],
            [Date.UTC(1967, 1, 1), 93],
            [Date.UTC(1968, 1, 1), 14],
            [Date.UTC(1969, 1, 1), 6],
            [Date.UTC(1970, 1, 1), 2],
            [Date.UTC(1971, 1, 1), 3],
            [Date.UTC(1972, 1, 1), 1],
            [Date.UTC(1973, 1, 1), 5],
            [Date.UTC(1975, 1, 1), 6],
            [Date.UTC(1978, 1, 1), 3],
            [Date.UTC(1979, 1, 1), 4],
            [Date.UTC(1980, 1, 1), 1],
            [Date.UTC(1982, 1, 1), 2],
            [Date.UTC(1985, 1, 1), 1],
            [Date.UTC(1987, 1, 1), 1],
            [Date.UTC(1988, 1, 1), 1],
            [Date.UTC(1995, 1, 1), 1],
            [Date.UTC(1997, 1, 1), 1],
            [Date.UTC(2004, 1, 1), 1],
            [Date.UTC(2007, 1, 1), 1],
            [Date.UTC(2015, 1, 1), 1],

          ]
        },
        {
          name: 'Wasserfarben',
          visible:true,
          
          data: [
            [Date.UTC(1844, 1, 1), 1],
            [Date.UTC(1868, 1, 1), 1],
            [Date.UTC(1872, 1, 1), 6],
            [Date.UTC(1875, 1, 1), 1],
            [Date.UTC(1878, 1, 1), 12],
            [Date.UTC(1882, 1, 1), 3],
            [Date.UTC(1883, 1, 1), 1],
            [Date.UTC(1891, 1, 1), 2],
            [Date.UTC(1892, 1, 1), 1],
            [Date.UTC(1893, 1, 1), 6],
            [Date.UTC(1895, 1, 1), 4],
            [Date.UTC(1897, 1, 1), 2],
            [Date.UTC(1898, 1, 1), 5],
            [Date.UTC(1899, 1, 1), 8],
            [Date.UTC(1900, 1, 1), 21],
            [Date.UTC(1901, 1, 1), 12],
            [Date.UTC(1902, 1, 1), 11],
            [Date.UTC(1903, 1, 1), 20],
            [Date.UTC(1904, 1, 1), 28],
            [Date.UTC(1905, 1, 1), 14],
            [Date.UTC(1906, 1, 1), 15],
            [Date.UTC(1907, 1, 1), 99],
            [Date.UTC(1908, 1, 1), 5],
            [Date.UTC(1909, 1, 1), 49],
            [Date.UTC(1910, 1, 1), 8],
            [Date.UTC(1911, 1, 1), 34],
            [Date.UTC(1912, 1, 1), 10],
            [Date.UTC(1913, 1, 1), 56],
            [Date.UTC(1914, 1, 1), 61],
            [Date.UTC(1915, 1, 1), 44],
            [Date.UTC(1916, 1, 1), 16],
            [Date.UTC(1917, 1, 1), 19],
            [Date.UTC(1918, 1, 1), 37],
            [Date.UTC(1919, 1, 1), 17],
            [Date.UTC(1920, 1, 1), 13],
            [Date.UTC(1921, 1, 1), 188],
            [Date.UTC(1922, 1, 1), 37],
            [Date.UTC(1923, 1, 1), 70],
            [Date.UTC(1924, 1, 1), 11],
            [Date.UTC(1925, 1, 1), 12],
            [Date.UTC(1926, 1, 1), 50],
            [Date.UTC(1927, 1, 1), 204],
            [Date.UTC(1928, 1, 1), 6],
            [Date.UTC(1929, 1, 1), 6],
            [Date.UTC(1930, 1, 1), 19],
            [Date.UTC(1931, 1, 1), 29],
            [Date.UTC(1932, 1, 1), 43],
            [Date.UTC(1933, 1, 1), 79],
            [Date.UTC(1934, 1, 1), 16],
            [Date.UTC(1935, 1, 1), 48],
            [Date.UTC(1936, 1, 1), 184],
            [Date.UTC(1937, 1, 1), 20],
            [Date.UTC(1938, 1, 1), 28],
            [Date.UTC(1939, 1, 1), 12],
            [Date.UTC(1940, 1, 1), 24],
            [Date.UTC(1941, 1, 1), 10],
            [Date.UTC(1942, 1, 1), 30],
            [Date.UTC(1943, 1, 1), 25],
            [Date.UTC(1944, 1, 1), 1],
            [Date.UTC(1945, 1, 1), 20],
            [Date.UTC(1946, 1, 1), 46],
            [Date.UTC(1947, 1, 1), 9],
            [Date.UTC(1948, 1, 1), 11],
            [Date.UTC(1949, 1, 1), 40],
            [Date.UTC(1950, 1, 1), 8],
            [Date.UTC(1951, 1, 1), 44],
            [Date.UTC(1952, 1, 1), 5],
            [Date.UTC(1953, 1, 1), 46],
            [Date.UTC(1954, 1, 1), 12],
            [Date.UTC(1955, 1, 1), 19],
            [Date.UTC(1956, 1, 1), 29],
            [Date.UTC(1957, 1, 1), 11],
            [Date.UTC(1958, 1, 1), 43],
            [Date.UTC(1959, 1, 1), 9],
            [Date.UTC(1960, 1, 1), 34],
            [Date.UTC(1961, 1, 1), 32],
            [Date.UTC(1962, 1, 1), 18],
            [Date.UTC(1963, 1, 1), 24],
            [Date.UTC(1964, 1, 1), 102],
            [Date.UTC(1965, 1, 1), 57],
            [Date.UTC(1966, 1, 1), 100],
            [Date.UTC(1967, 1, 1), 77],
            [Date.UTC(1968, 1, 1), 56],
            [Date.UTC(1969, 1, 1), 41],
            [Date.UTC(1970, 1, 1), 33],
            [Date.UTC(1971, 1, 1), 23],
            [Date.UTC(1972, 1, 1), 21],
            [Date.UTC(1973, 1, 1), 33],
            [Date.UTC(1974, 1, 1), 34],
            [Date.UTC(1975, 1, 1), 37],
            [Date.UTC(1976, 1, 1), 39],
            [Date.UTC(1977, 1, 1), 78],
            [Date.UTC(1978, 1, 1), 54],
            [Date.UTC(1979, 1, 1), 27],
            [Date.UTC(1980, 1, 1), 19],
            [Date.UTC(1981, 1, 1), 29],
            [Date.UTC(1982, 1, 1), 80],
            [Date.UTC(1983, 1, 1), 26],
            [Date.UTC(1984, 1, 1), 65],
            [Date.UTC(1985, 1, 1), 22],
            [Date.UTC(1986, 1, 1), 24],
            [Date.UTC(1987, 1, 1), 41],
            [Date.UTC(1988, 1, 1), 16],
            [Date.UTC(1989, 1, 1), 11],
            [Date.UTC(1990, 1, 1), 12],
            [Date.UTC(1991, 1, 1), 9],
            [Date.UTC(1992, 1, 1), 15],
            [Date.UTC(1993, 1, 1), 10],
            [Date.UTC(1994, 1, 1), 18],
            [Date.UTC(1995, 1, 1), 15],
            [Date.UTC(1996, 1, 1), 27],
            [Date.UTC(1997, 1, 1), 35],
            [Date.UTC(1998, 1, 1), 31],
            [Date.UTC(1999, 1, 1), 23],
            [Date.UTC(2000, 1, 1), 27],
            [Date.UTC(2001, 1, 1), 70],
            [Date.UTC(2002, 1, 1), 84],
            [Date.UTC(2003, 1, 1), 231],
            [Date.UTC(2004, 1, 1), 90],
            [Date.UTC(2005, 1, 1), 8],
            [Date.UTC(2006, 1, 1), 4],
            [Date.UTC(2007, 1, 1), 8],
            [Date.UTC(2008, 1, 1), 9],
            [Date.UTC(2009, 1, 1), 4],
            [Date.UTC(2010, 1, 1), 4],
            [Date.UTC(2011, 1, 1), 12],
            [Date.UTC(2012, 1, 1), 4],
            [Date.UTC(2013, 1, 1), 5],
            [Date.UTC(2014, 1, 1), 4],
            [Date.UTC(2015, 1, 1), 1],
            [Date.UTC(2016, 1, 1), 1],
            [Date.UTC(2017, 1, 1), 1],
          ]
        },
        {
          name: 'Abs',
          
          visible:true,
          data: [
            [Date.UTC(1927, 1, 1), 1],
            [Date.UTC(1936, 1, 1), 1],
            [Date.UTC(1949, 1, 1), 1],
            [Date.UTC(1950, 1, 1), 1],
            [Date.UTC(1954, 1, 1), 1],
            [Date.UTC(1957, 1, 1), 1],
            [Date.UTC(1958, 1, 1), 2],
            [Date.UTC(1960, 1, 1), 2],
            [Date.UTC(1962, 1, 1), 2],
            [Date.UTC(1963, 1, 1), 1],
            [Date.UTC(1966, 1, 1), 5],
            [Date.UTC(1967, 1, 1), 3],
            [Date.UTC(1968, 1, 1), 4],
            [Date.UTC(1969, 1, 1), 1],
            [Date.UTC(1970, 1, 1), 1],
            [Date.UTC(1971, 1, 1), 4],
            [Date.UTC(1972, 1, 1), 7],
            [Date.UTC(1973, 1, 1), 13],
            [Date.UTC(1974, 1, 1), 5],
            [Date.UTC(1975, 1, 1), 4],
            [Date.UTC(1976, 1, 1), 2],
            [Date.UTC(1977, 1, 1), 5],
            [Date.UTC(1978, 1, 1), 5],
            [Date.UTC(1979, 1, 1), 1],
            [Date.UTC(1980, 1, 1), 2],
            [Date.UTC(1981, 1, 1), 2],
            [Date.UTC(1982, 1, 1), 1],
            [Date.UTC(1983, 1, 1), 3],
            [Date.UTC(1984, 1, 1), 2],
            [Date.UTC(1985, 1, 1), 2],
            [Date.UTC(1986, 1, 1), 3],
            [Date.UTC(1988, 1, 1), 2],
            [Date.UTC(1989, 1, 1), 8],
            [Date.UTC(1991, 1, 1), 2],
            [Date.UTC(1992, 1, 1), 6],
            [Date.UTC(1993, 1, 1), 4],
            [Date.UTC(1994, 1, 1), 5],
            [Date.UTC(1995, 1, 1), 1],
            [Date.UTC(1996, 1, 1), 9],
            [Date.UTC(1997, 1, 1), 5],
            [Date.UTC(1998, 1, 1), 5],
            [Date.UTC(1999, 1, 1), 2],
            [Date.UTC(2000, 1, 1), 1],
            [Date.UTC(2001, 1, 1), 1],
            [Date.UTC(2002, 1, 1), 1],
            [Date.UTC(2003, 1, 1), 4],
            [Date.UTC(2004, 1, 1), 4],
            [Date.UTC(2005, 1, 1), 7],
            [Date.UTC(2006, 1, 1), 1],
            [Date.UTC(2007, 1, 1), 3],
            [Date.UTC(2009, 1, 1), 1],
            [Date.UTC(2010, 1, 1), 2],
            [Date.UTC(2013, 1, 1), 1],
            [Date.UTC(2015, 1, 1), 1],

          ]
        },
        {
          name: 'Acryl',
          
          visible:true,
          data: [
            [Date.UTC(1880, 1, 1), 1],
            [Date.UTC(1898, 1, 1), 1],
            [Date.UTC(1913, 1, 1), 3],
            [Date.UTC(1927, 1, 1), 7],
            [Date.UTC(1931, 1, 1), 4],
            [Date.UTC(1934, 1, 1), 1],
            [Date.UTC(1937, 1, 1), 1],
            [Date.UTC(1938, 1, 1), 1],
            [Date.UTC(1941, 1, 1), 1],
            [Date.UTC(1944, 1, 1), 1],
            [Date.UTC(1946, 1, 1), 11],
            [Date.UTC(1947, 1, 1), 4],
            [Date.UTC(1949, 1, 1), 1],
            [Date.UTC(1950, 1, 1), 7],
            [Date.UTC(1953, 1, 1), 4],
            [Date.UTC(1954, 1, 1), 3],
            [Date.UTC(1955, 1, 1), 3],
            [Date.UTC(1956, 1, 1), 4],
            [Date.UTC(1957, 1, 1), 1],
            [Date.UTC(1958, 1, 1), 14],
            [Date.UTC(1960, 1, 1), 2],
            [Date.UTC(1961, 1, 1), 1],
            [Date.UTC(1962, 1, 1), 10],
            [Date.UTC(1964, 1, 1), 6],
            [Date.UTC(1965, 1, 1), 3],
            [Date.UTC(1966, 1, 1), 10],
            [Date.UTC(1967, 1, 1), 7],
            [Date.UTC(1968, 1, 1), 12],
            [Date.UTC(1969, 1, 1), 8],
            [Date.UTC(1970, 1, 1), 7],
            [Date.UTC(1971, 1, 1), 2],
            [Date.UTC(1972, 1, 1), 4],
            [Date.UTC(1973, 1, 1), 7],
            [Date.UTC(1974, 1, 1), 7],
            [Date.UTC(1975, 1, 1), 5],
            [Date.UTC(1976, 1, 1), 7],
            [Date.UTC(1977, 1, 1), 2],
            [Date.UTC(1978, 1, 1), 3],
            [Date.UTC(1979, 1, 1), 7],
            [Date.UTC(1980, 1, 1), 3],
            [Date.UTC(1981, 1, 1), 3],
            [Date.UTC(1982, 1, 1), 5],
            [Date.UTC(1983, 1, 1), 9],
            [Date.UTC(1984, 1, 1), 6],
            [Date.UTC(1985, 1, 1), 1],
            [Date.UTC(1986, 1, 1), 4],
            [Date.UTC(1987, 1, 1), 3],
            [Date.UTC(1989, 1, 1), 3],
            [Date.UTC(1990, 1, 1), 7],
            [Date.UTC(1991, 1, 1), 4],
            [Date.UTC(1992, 1, 1), 6],
            [Date.UTC(1993, 1, 1), 10],
            [Date.UTC(1994, 1, 1), 3],
            [Date.UTC(1995, 1, 1), 3],
            [Date.UTC(1996, 1, 1), 5],
            [Date.UTC(1997, 1, 1), 4],
            [Date.UTC(1998, 1, 1), 3],
            [Date.UTC(1999, 1, 1), 2],
            [Date.UTC(2000, 1, 1), 7],
            [Date.UTC(2001, 1, 1), 15],
            [Date.UTC(2002, 1, 1), 12],
            [Date.UTC(2003, 1, 1), 5],
            [Date.UTC(2004, 1, 1), 4],
            [Date.UTC(2005, 1, 1), 9],
            [Date.UTC(2006, 1, 1), 3],
            [Date.UTC(2007, 1, 1), 21],
            [Date.UTC(2008, 1, 1), 5],
            [Date.UTC(2009, 1, 1), 6],
            [Date.UTC(2010, 1, 1), 17],
            [Date.UTC(2011, 1, 1), 3],
            [Date.UTC(2012, 1, 1), 4],
            [Date.UTC(2013, 1, 1), 3],
            [Date.UTC(2014, 1, 1), 5],
            [Date.UTC(2015, 1, 1), 4],
            [Date.UTC(2016, 1, 1), 4],
            [Date.UTC(2017, 1, 1), 5],
          ]
        },
        {
          name: 'Airbush',
          
          visible:true,
          data: [
            [Date.UTC(1920, 1, 1), 1],
            [Date.UTC(1922, 1, 1), 2],
            [Date.UTC(1923, 1, 1), 1],
            [Date.UTC(1927, 1, 1), 5],
            [Date.UTC(1933, 1, 1), 1],
            [Date.UTC(1934, 1, 1), 1],
            [Date.UTC(1935, 1, 1), 3],
            [Date.UTC(1936, 1, 1), 1],
            [Date.UTC(1954, 1, 1), 1],
            [Date.UTC(1965, 1, 1), 1],
            [Date.UTC(1966, 1, 1), 1],
            [Date.UTC(1968, 1, 1), 4],
            [Date.UTC(1969, 1, 1), 1],
            [Date.UTC(1970, 1, 1), 1],
            [Date.UTC(1971, 1, 1), 1],
            [Date.UTC(1972, 1, 1), 1],
            [Date.UTC(1973, 1, 1), 1],
            [Date.UTC(1974, 1, 1), 4],
            [Date.UTC(1975, 1, 1), 3],
            [Date.UTC(1976, 1, 1), 1],
            [Date.UTC(1979, 1, 1), 4],
            [Date.UTC(1980, 1, 1), 1],
            [Date.UTC(1981, 1, 1), 3],
            [Date.UTC(1982, 1, 1), 1],
            [Date.UTC(1984, 1, 1), 1],
            [Date.UTC(1985, 1, 1), 2],
            [Date.UTC(1992, 1, 1), 4],
            [Date.UTC(1997, 1, 1), 1],
            [Date.UTC(1999, 1, 1), 1],
            [Date.UTC(2002, 1, 1), 2],
            [Date.UTC(2004, 1, 1), 9],
            [Date.UTC(2005, 1, 1), 1],
            [Date.UTC(2008, 1, 1), 1],
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
            [Date.UTC(1882, 1, 1), 68],
            [Date.UTC(1885, 1, 1), 4],
            [Date.UTC(1886, 1, 1), 2],
            [Date.UTC(1888, 1, 1), 39],
            [Date.UTC(1891, 1, 1), 40],
            [Date.UTC(1892, 1, 1), 3],
            [Date.UTC(1893, 1, 1), 1],
            [Date.UTC(1895, 1, 1), 30],
            [Date.UTC(1897, 1, 1), 1],
            [Date.UTC(1898, 1, 1), 5],
            [Date.UTC(1899, 1, 1), 2],
            [Date.UTC(1900, 1, 1), 31],
            [Date.UTC(1901, 1, 1), 6],
            [Date.UTC(1902, 1, 1), 61],
            [Date.UTC(1903, 1, 1), 40],
            [Date.UTC(1904, 1, 1), 68],
            [Date.UTC(1905, 1, 1), 77],
            [Date.UTC(1906, 1, 1), 16],
            [Date.UTC(1907, 1, 1), 295],
            [Date.UTC(1908, 1, 1), 11],
            [Date.UTC(1909, 1, 1), 102],
            [Date.UTC(1910, 1, 1), 7],
            [Date.UTC(1911, 1, 1), 60],
            [Date.UTC(1912, 1, 1), 13],
            [Date.UTC(1913, 1, 1), 16],
            [Date.UTC(1914, 1, 1), 271],
            [Date.UTC(1915, 1, 1), 38],
            [Date.UTC(1916, 1, 1), 25],
            [Date.UTC(1917, 1, 1), 148],
            [Date.UTC(1918, 1, 1), 79],
            [Date.UTC(1919, 1, 1), 129],
            [Date.UTC(1920, 1, 1), 10],
            [Date.UTC(1921, 1, 1), 16],
            [Date.UTC(1922, 1, 1), 57],
            [Date.UTC(1923, 1, 1), 45],
            [Date.UTC(1924, 1, 1), 12],
            [Date.UTC(1925, 1, 1), 24],
            [Date.UTC(1926, 1, 1), 177],
            [Date.UTC(1927, 1, 1), 665],
            [Date.UTC(1928, 1, 1), 16],
            [Date.UTC(1929, 1, 1), 50],
            [Date.UTC(1930, 1, 1), 101],
            [Date.UTC(1931, 1, 1), 82],
            [Date.UTC(1932, 1, 1), 42],
            [Date.UTC(1933, 1, 1), 232],
            [Date.UTC(1934, 1, 1), 19],
            [Date.UTC(1935, 1, 1), 55],
            [Date.UTC(1936, 1, 1), 94],
            [Date.UTC(1937, 1, 1), 84],
            [Date.UTC(1938, 1, 1), 212],
            [Date.UTC(1939, 1, 1), 8],
            [Date.UTC(1940, 1, 1), 27],
            [Date.UTC(1941, 1, 1), 140],
            [Date.UTC(1942, 1, 1), 40],
            [Date.UTC(1943, 1, 1), 113],
            [Date.UTC(1944, 1, 1), 10],
            [Date.UTC(1945, 1, 1), 42],
            [Date.UTC(1946, 1, 1), 88],
            [Date.UTC(1947, 1, 1), 14],
            [Date.UTC(1948, 1, 1), 30],
            [Date.UTC(1949, 1, 1), 45],
            [Date.UTC(1950, 1, 1), 69],
            [Date.UTC(1951, 1, 1), 16],
            [Date.UTC(1952, 1, 1), 55],
            [Date.UTC(1953, 1, 1), 110],
            [Date.UTC(1954, 1, 1), 35],
            [Date.UTC(1955, 1, 1), 30],
            [Date.UTC(1956, 1, 1), 107],
            [Date.UTC(1957, 1, 1), 43],
            [Date.UTC(1958, 1, 1), 92],
            [Date.UTC(1959, 1, 1), 16],
            [Date.UTC(1960, 1, 1), 341],
            [Date.UTC(1961, 1, 1), 99],
            [Date.UTC(1962, 1, 1), 87],
            [Date.UTC(1963, 1, 1), 118],
            [Date.UTC(1964, 1, 1), 210],
            [Date.UTC(1965, 1, 1), 103],
            [Date.UTC(1966, 1, 1), 196],
            [Date.UTC(1967, 1, 1), 519],
            [Date.UTC(1968, 1, 1), 134],
            [Date.UTC(1969, 1, 1), 101],
            [Date.UTC(1970, 1, 1), 113],
            [Date.UTC(1971, 1, 1), 61],
            [Date.UTC(1972, 1, 1), 124],
            [Date.UTC(1973, 1, 1), 159],
            [Date.UTC(1974, 1, 1), 57],
            [Date.UTC(1975, 1, 1), 223],
            [Date.UTC(1976, 1, 1), 105],
            [Date.UTC(1977, 1, 1), 98],
            [Date.UTC(1978, 1, 1), 85],
            [Date.UTC(1979, 1, 1), 63],
            [Date.UTC(1980, 1, 1), 83],
            [Date.UTC(1981, 1, 1), 61],
            [Date.UTC(1982, 1, 1), 44],
            [Date.UTC(1983, 1, 1), 46],
            [Date.UTC(1984, 1, 1), 60],
            [Date.UTC(1985, 1, 1), 72],
            [Date.UTC(1986, 1, 1), 106],
            [Date.UTC(1987, 1, 1), 32],
            [Date.UTC(1988, 1, 1), 82],
            [Date.UTC(1989, 1, 1), 166],
            [Date.UTC(1990, 1, 1), 154],
            [Date.UTC(1991, 1, 1), 121],
            [Date.UTC(1992, 1, 1), 83],
            [Date.UTC(1993, 1, 1), 35],
            [Date.UTC(1994, 1, 1), 88],
            [Date.UTC(1995, 1, 1), 23],
            [Date.UTC(1996, 1, 1), 94],
            [Date.UTC(1997, 1, 1), 56],
            [Date.UTC(1998, 1, 1), 111],
            [Date.UTC(1999, 1, 1), 37],
            [Date.UTC(2000, 1, 1), 115],
            [Date.UTC(2001, 1, 1), 101],
            [Date.UTC(2002, 1, 1), 80],
            [Date.UTC(2003, 1, 1), 58],
            [Date.UTC(2004, 1, 1), 61],
            [Date.UTC(2005, 1, 1), 101],
            [Date.UTC(2006, 1, 1), 67],
            [Date.UTC(2007, 1, 1), 49],
            [Date.UTC(2008, 1, 1), 133],
            [Date.UTC(2009, 1, 1), 55],
            [Date.UTC(2010, 1, 1), 77],
            [Date.UTC(2011, 1, 1), 138],
            [Date.UTC(2012, 1, 1), 58],
            [Date.UTC(2013, 1, 1), 68],
            [Date.UTC(2014, 1, 1), 28],
            [Date.UTC(2015, 1, 1), 46],
            [Date.UTC(2016, 1, 1), 7],
            [Date.UTC(2017, 1, 1), 36],
          ]
        },
        {
          name: 'Bronze',
          
          visible:true,
          data: [
            [Date.UTC(1878, 1, 1), 14],
            [Date.UTC(1886, 1, 1), 1],
            [Date.UTC(1890, 1, 1), 10],
            [Date.UTC(1895, 1, 1), 2],
            [Date.UTC(1897, 1, 1), 2],
            [Date.UTC(1899, 1, 1), 2],
            [Date.UTC(1900, 1, 1), 2],
            [Date.UTC(1902, 1, 1), 4],
            [Date.UTC(1904, 1, 1), 12],
            [Date.UTC(1907, 1, 1), 1],
            [Date.UTC(1908, 1, 1), 13],
            [Date.UTC(1909, 1, 1), 1],
            [Date.UTC(1910, 1, 1), 4],
            [Date.UTC(1911, 1, 1), 17],
            [Date.UTC(1912, 1, 1), 2],
            [Date.UTC(1914, 1, 1), 3],
            [Date.UTC(1915, 1, 1), 1],
            [Date.UTC(1916, 1, 1), 6],
            [Date.UTC(1917, 1, 1), 1],
            [Date.UTC(1919, 1, 1), 4],
            [Date.UTC(1924, 1, 1), 2],
            [Date.UTC(1925, 1, 1), 4],
            [Date.UTC(1926, 1, 1), 7],
            [Date.UTC(1927, 1, 1), 7],
            [Date.UTC(1929, 1, 1), 1],
            [Date.UTC(1930, 1, 1), 1],
            [Date.UTC(1931, 1, 1), 2],
            [Date.UTC(1932, 1, 1), 7],
            [Date.UTC(1933, 1, 1), 23],
            [Date.UTC(1935, 1, 1), 8],
            [Date.UTC(1936, 1, 1), 1],
            [Date.UTC(1937, 1, 1), 1],
            [Date.UTC(1938, 1, 1), 3],
            [Date.UTC(1939, 1, 1), 1],
            [Date.UTC(1940, 1, 1), 5],
            [Date.UTC(1941, 1, 1), 2],
            [Date.UTC(1942, 1, 1), 13],
            [Date.UTC(1944, 1, 1), 2],
            [Date.UTC(1945, 1, 1), 1],
            [Date.UTC(1946, 1, 1), 2],
            [Date.UTC(1947, 1, 1), 4],
            [Date.UTC(1948, 1, 1), 8],
            [Date.UTC(1949, 1, 1), 2],
            [Date.UTC(1950, 1, 1), 2],
            [Date.UTC(1953, 1, 1), 2],
            [Date.UTC(1954, 1, 1), 6],
            [Date.UTC(1955, 1, 1), 1],
            [Date.UTC(1956, 1, 1), 1],
            [Date.UTC(1957, 1, 1), 1],
            [Date.UTC(1958, 1, 1), 4],
            [Date.UTC(1959, 1, 1), 3],
            [Date.UTC(1960, 1, 1), 5],
            [Date.UTC(1961, 1, 1), 1],
            [Date.UTC(1962, 1, 1), 2],
            [Date.UTC(1963, 1, 1), 3],
            [Date.UTC(1964, 1, 1), 1],
            [Date.UTC(1965, 1, 1), 3],
            [Date.UTC(1966, 1, 1), 1],
            [Date.UTC(1967, 1, 1), 2],
            [Date.UTC(1968, 1, 1), 2],
            [Date.UTC(1969, 1, 1), 4],
            [Date.UTC(1970, 1, 1), 4],
            [Date.UTC(1972, 1, 1), 1],
            [Date.UTC(1973, 1, 1), 1],
            [Date.UTC(1974, 1, 1), 2],
            [Date.UTC(1975, 1, 1), 1],
            [Date.UTC(1976, 1, 1), 1],
            [Date.UTC(1977, 1, 1), 1],
            [Date.UTC(1978, 1, 1), 1],
            [Date.UTC(1979, 1, 1), 1],
            [Date.UTC(1980, 1, 1), 5],
            [Date.UTC(1981, 1, 1), 1],
            [Date.UTC(1982, 1, 1), 6],
            [Date.UTC(1983, 1, 1), 1],
            [Date.UTC(1984, 1, 1), 2],
            [Date.UTC(1985, 1, 1), 1],
            [Date.UTC(1986, 1, 1), 1],
            [Date.UTC(1987, 1, 1), 4],
            [Date.UTC(1988, 1, 1), 2],
            [Date.UTC(1989, 1, 1), 1],
            [Date.UTC(1990, 1, 1), 1],
            [Date.UTC(1991, 1, 1), 1],
            [Date.UTC(1992, 1, 1), 1],
            [Date.UTC(1994, 1, 1), 1],
            [Date.UTC(1995, 1, 1), 1],
            [Date.UTC(1997, 1, 1), 1],
            [Date.UTC(1998, 1, 1), 2],
            [Date.UTC(2003, 1, 1), 1],
            [Date.UTC(2004, 1, 1), 2],
            [Date.UTC(2006, 1, 1), 1],
            [Date.UTC(2007, 1, 1), 2],
            [Date.UTC(2011, 1, 1), 2],
            [Date.UTC(2012, 1, 1), 1],
            [Date.UTC(2013, 1, 1), 1],
            [Date.UTC(2014, 1, 1), 2],
            [Date.UTC(2015, 1, 1), 1],
            [Date.UTC(2017, 1, 1), 1],
          ]
        },
        {
          name: 'Carbon',
          
          visible:true,
          data: [
            [Date.UTC(1834, 1, 1), 10],
            [Date.UTC(1836, 1, 1), 1],
            [Date.UTC(1844, 1, 1), 1],
            [Date.UTC(1847, 1, 1), 5],
            [Date.UTC(1855, 1, 1), 1],
            [Date.UTC(1856, 1, 1), 1],
            [Date.UTC(1857, 1, 1), 1],
            [Date.UTC(1864, 1, 1), 2],
            [Date.UTC(1874, 1, 1), 1],
            [Date.UTC(1875, 1, 1), 4],
            [Date.UTC(1876, 1, 1), 1],
            [Date.UTC(1887, 1, 1), 1],
            [Date.UTC(1894, 1, 1), 2],
            [Date.UTC(1897, 1, 1), 1],
            [Date.UTC(1902, 1, 1), 1],
            [Date.UTC(1903, 1, 1), 1],
            [Date.UTC(1905, 1, 1), 2],
            [Date.UTC(1907, 1, 1), 3],
            [Date.UTC(1910, 1, 1), 1],
            [Date.UTC(1918, 1, 1), 1],
            [Date.UTC(1921, 1, 1), 5],
            [Date.UTC(1923, 1, 1), 1],
            [Date.UTC(1926, 1, 1), 9],
            [Date.UTC(1927, 1, 1), 9],
            [Date.UTC(1930, 1, 1), 3],
            [Date.UTC(1932, 1, 1), 2],
            [Date.UTC(1934, 1, 1), 1],
            [Date.UTC(1938, 1, 1), 1],
            [Date.UTC(1948, 1, 1), 2],
            [Date.UTC(1954, 1, 1), 1],
            [Date.UTC(1956, 1, 1), 1],
            [Date.UTC(1960, 1, 1), 6],
            [Date.UTC(1961, 1, 1), 1],
            [Date.UTC(1962, 1, 1), 3],
            [Date.UTC(1963, 1, 1), 4],
            [Date.UTC(1964, 1, 1), 2],
            [Date.UTC(1965, 1, 1), 7],
            [Date.UTC(1966, 1, 1), 1],
            [Date.UTC(1967, 1, 1), 1],
            [Date.UTC(1968, 1, 1), 2],
            [Date.UTC(1970, 1, 1), 4],
            [Date.UTC(1971, 1, 1), 1],
            [Date.UTC(1972, 1, 1), 3],
            [Date.UTC(1973, 1, 1), 11],
            [Date.UTC(1974, 1, 1), 2],
            [Date.UTC(1975, 1, 1), 1],
            [Date.UTC(1977, 1, 1), 2],
            [Date.UTC(1978, 1, 1), 3],
            [Date.UTC(1982, 1, 1), 1],
            [Date.UTC(1983, 1, 1), 2],
            [Date.UTC(1984, 1, 1), 1],
            [Date.UTC(1985, 1, 1), 2],
            [Date.UTC(1987, 1, 1), 1],
            [Date.UTC(1988, 1, 1), 4],
            [Date.UTC(1989, 1, 1), 3],
            [Date.UTC(1990, 1, 1), 2],
            [Date.UTC(1991, 1, 1), 3],
            [Date.UTC(1992, 1, 1), 4],
            [Date.UTC(1993, 1, 1), 4],
            [Date.UTC(1994, 1, 1), 3],
            [Date.UTC(1995, 1, 1), 2],
            [Date.UTC(1996, 1, 1), 3],
            [Date.UTC(1997, 1, 1), 3],
            [Date.UTC(1998, 1, 1), 8],
            [Date.UTC(1999, 1, 1), 4],
            [Date.UTC(2000, 1, 1), 9],
            [Date.UTC(2001, 1, 1), 3],
            [Date.UTC(2002, 1, 1), 5],
            [Date.UTC(2003, 1, 1), 25],
            [Date.UTC(2004, 1, 1), 8],
            [Date.UTC(2007, 1, 1), 2],
            [Date.UTC(2010, 1, 1), 1],
            [Date.UTC(2011, 1, 1), 1],
            [Date.UTC(2014, 1, 1), 1],

          ]
        },
        {
          name: 'Glas',
          
          visible:true,
          data: [
            [Date.UTC(1830, 1, 1), 1],
            [Date.UTC(1836, 1, 1), 1],
            [Date.UTC(1840, 1, 1), 1],
            [Date.UTC(1841, 1, 1), 7],
            [Date.UTC(1844, 1, 1), 21],
            [Date.UTC(1845, 1, 1), 1],
            [Date.UTC(1847, 1, 1), 7],
            [Date.UTC(1849, 1, 1), 1],
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
            [Date.UTC(1881, 1, 1), 3],
            [Date.UTC(1886, 1, 1), 1],
            [Date.UTC(1887, 1, 1), 3],
            [Date.UTC(1888, 1, 1), 2],
            [Date.UTC(1889, 1, 1), 1],
            [Date.UTC(1890, 1, 1), 32],
            [Date.UTC(1892, 1, 1), 7],
            [Date.UTC(1893, 1, 1), 4],
            [Date.UTC(1894, 1, 1), 4],
            [Date.UTC(1895, 1, 1), 1],
            [Date.UTC(1897, 1, 1), 1],
            [Date.UTC(1900, 1, 1), 18],
            [Date.UTC(1901, 1, 1), 5],
            [Date.UTC(1904, 1, 1), 4],
            [Date.UTC(1907, 1, 1), 2],
            [Date.UTC(1910, 1, 1), 17],
            [Date.UTC(1911, 1, 1), 1],
            [Date.UTC(1912, 1, 1), 6],
            [Date.UTC(1913, 1, 1), 23],
            [Date.UTC(1914, 1, 1), 5],
            [Date.UTC(1916, 1, 1), 1],
            [Date.UTC(1920, 1, 1), 7],
            [Date.UTC(1921, 1, 1), 5],
            [Date.UTC(1923, 1, 1), 1],
            [Date.UTC(1925, 1, 1), 2],
            [Date.UTC(1926, 1, 1), 22],
            [Date.UTC(1927, 1, 1), 24],
            [Date.UTC(1928, 1, 1), 4],
            [Date.UTC(1929, 1, 1), 16],
            [Date.UTC(1930, 1, 1), 5],
            [Date.UTC(1931, 1, 1), 2],
            [Date.UTC(1932, 1, 1), 5],
            [Date.UTC(1933, 1, 1), 4],
            [Date.UTC(1934, 1, 1), 16],
            [Date.UTC(1935, 1, 1), 4],
            [Date.UTC(1936, 1, 1), 5],
            [Date.UTC(1937, 1, 1), 21],
            [Date.UTC(1938, 1, 1), 5],
            [Date.UTC(1939, 1, 1), 4],
            [Date.UTC(1940, 1, 1), 5],
            [Date.UTC(1941, 1, 1), 3],
            [Date.UTC(1942, 1, 1), 16],
            [Date.UTC(1943, 1, 1), 2],
            [Date.UTC(1944, 1, 1), 7],
            [Date.UTC(1945, 1, 1), 41],
            [Date.UTC(1946, 1, 1), 28],
            [Date.UTC(1947, 1, 1), 4],
            [Date.UTC(1948, 1, 1), 4],
            [Date.UTC(1949, 1, 1), 8],
            [Date.UTC(1950, 1, 1), 36],
            [Date.UTC(1951, 1, 1), 5],
            [Date.UTC(1952, 1, 1), 1],
            [Date.UTC(1953, 1, 1), 20],
            [Date.UTC(1954, 1, 1), 21],
            [Date.UTC(1955, 1, 1), 9],
            [Date.UTC(1956, 1, 1), 7],
            [Date.UTC(1957, 1, 1), 5],
            [Date.UTC(1958, 1, 1), 8],
            [Date.UTC(1959, 1, 1), 7],
            [Date.UTC(1960, 1, 1), 9],
            [Date.UTC(1961, 1, 1), 13],
            [Date.UTC(1962, 1, 1), 16],
            [Date.UTC(1963, 1, 1), 13],
            [Date.UTC(1964, 1, 1), 10],
            [Date.UTC(1965, 1, 1), 29],
            [Date.UTC(1966, 1, 1), 34],
            [Date.UTC(1967, 1, 1), 21],
            [Date.UTC(1968, 1, 1), 20],
            [Date.UTC(1969, 1, 1), 25],
            [Date.UTC(1970, 1, 1), 10],
            [Date.UTC(1971, 1, 1), 12],
            [Date.UTC(1972, 1, 1), 20],
            [Date.UTC(1973, 1, 1), 15],
            [Date.UTC(1974, 1, 1), 14],
            [Date.UTC(1975, 1, 1), 5],
            [Date.UTC(1976, 1, 1), 10],
            [Date.UTC(1977, 1, 1), 4],
            [Date.UTC(1978, 1, 1), 5],
            [Date.UTC(1979, 1, 1), 8],
            [Date.UTC(1980, 1, 1), 9],
            [Date.UTC(1981, 1, 1), 5],
            [Date.UTC(1982, 1, 1), 1],
            [Date.UTC(1983, 1, 1), 6],
            [Date.UTC(1984, 1, 1), 6],
            [Date.UTC(1985, 1, 1), 8],
            [Date.UTC(1986, 1, 1), 3],
            [Date.UTC(1987, 1, 1), 10],
            [Date.UTC(1988, 1, 1), 9],
            [Date.UTC(1989, 1, 1), 6],
            [Date.UTC(1990, 1, 1), 3],
            [Date.UTC(1991, 1, 1), 6],
            [Date.UTC(1992, 1, 1), 4],
            [Date.UTC(1993, 1, 1), 8],
            [Date.UTC(1994, 1, 1), 10],
            [Date.UTC(1995, 1, 1), 23],
            [Date.UTC(1996, 1, 1), 9],
            [Date.UTC(1997, 1, 1), 8],
            [Date.UTC(1998, 1, 1), 5],
            [Date.UTC(1999, 1, 1), 3],
            [Date.UTC(2000, 1, 1), 4],
            [Date.UTC(2001, 1, 1), 8],
            [Date.UTC(2002, 1, 1), 5],
            [Date.UTC(2003, 1, 1), 23],
            [Date.UTC(2004, 1, 1), 13],
            [Date.UTC(2005, 1, 1), 5],
            [Date.UTC(2006, 1, 1), 7],
            [Date.UTC(2007, 1, 1), 12],
            [Date.UTC(2008, 1, 1), 5],
            [Date.UTC(2009, 1, 1), 10],
            [Date.UTC(2010, 1, 1), 2],
            [Date.UTC(2011, 1, 1), 3],
            [Date.UTC(2012, 1, 1), 4],
            [Date.UTC(2013, 1, 1), 4],
            [Date.UTC(2014, 1, 1), 8],
            [Date.UTC(2015, 1, 1), 4],
            [Date.UTC(2016, 1, 1), 1],
            [Date.UTC(2017, 1, 1), 4],

          ]
        },
        {
          name: 'Mylar',
          
          visible:true,
          data: [
            [Date.UTC(1945, 1, 1), 1],
            [Date.UTC(1952, 1, 1), 6],
            [Date.UTC(1953, 1, 1), 1],
            [Date.UTC(1960, 1, 1), 1],
            [Date.UTC(1963, 1, 1), 3],
            [Date.UTC(1965, 1, 1), 4],
            [Date.UTC(1966, 1, 1), 3],
            [Date.UTC(1968, 1, 1), 3],
            [Date.UTC(1969, 1, 1), 1],
            [Date.UTC(1970, 1, 1), 1],
            [Date.UTC(1971, 1, 1), 1],
            [Date.UTC(1972, 1, 1), 22],
            [Date.UTC(1973, 1, 1), 1],
            [Date.UTC(1975, 1, 1), 1],
            [Date.UTC(1976, 1, 1), 4],
            [Date.UTC(1980, 1, 1), 10],
            [Date.UTC(1981, 1, 1), 9],
            [Date.UTC(1985, 1, 1), 1],
            [Date.UTC(1991, 1, 1), 1],
            [Date.UTC(1992, 1, 1), 5],
            [Date.UTC(1996, 1, 1), 2],
            [Date.UTC(1999, 1, 1), 2],
            [Date.UTC(2000, 1, 1), 8],
            [Date.UTC(2003, 1, 1), 5],
            [Date.UTC(2004, 1, 1), 1],
            [Date.UTC(2005, 1, 1), 6],
            [Date.UTC(2010, 1, 1), 11],

          ]
        },
        {
          name: 'Photomontage',
          color:'lightblue',
          data: [
            [Date.UTC(1870, 1, 1), 1],
            [Date.UTC(1915, 1, 1), 2],
            [Date.UTC(1916, 1, 1), 1],
            [Date.UTC(1920, 1, 1), 7],
            [Date.UTC(1923, 1, 1), 18],
            [Date.UTC(1924, 1, 1), 2],
            [Date.UTC(1925, 1, 1), 1],
            [Date.UTC(1926, 1, 1), 4],
            [Date.UTC(1927, 1, 1), 2],
            [Date.UTC(1931, 1, 1), 1],
            [Date.UTC(1934, 1, 1), 2],
            [Date.UTC(1935, 1, 1), 1],
            [Date.UTC(1940, 1, 1), 11],
            [Date.UTC(1948, 1, 1), 1],
            [Date.UTC(1959, 1, 1), 1],
            [Date.UTC(1960, 1, 1), 1],
            [Date.UTC(1966, 1, 1), 1],
            [Date.UTC(1967, 1, 1), 21],
            [Date.UTC(1968, 1, 1), 1],
            [Date.UTC(1971, 1, 1), 3],
            [Date.UTC(1973, 1, 1), 1],
            [Date.UTC(1974, 1, 1), 1],
            [Date.UTC(1976, 1, 1), 8],
            [Date.UTC(1992, 1, 1), 1],

          ]
        },
        {
          name: 'Polyster',
          
          visible:true,
          data: [
            [Date.UTC(1935, 1, 1), 1],
            [Date.UTC(1940, 1, 1), 1],
            [Date.UTC(1942, 1, 1), 8],
            [Date.UTC(1943, 1, 1), 4],
            [Date.UTC(1950, 1, 1), 5],
            [Date.UTC(1953, 1, 1), 1],
            [Date.UTC(1958, 1, 1), 1],
            [Date.UTC(1959, 1, 1), 4],
            [Date.UTC(1960, 1, 1), 2],
            [Date.UTC(1962, 1, 1), 1],
            [Date.UTC(1963, 1, 1), 3],
            [Date.UTC(1964, 1, 1), 1],
            [Date.UTC(1965, 1, 1), 3],
            [Date.UTC(1966, 1, 1), 2],
            [Date.UTC(1967, 1, 1), 4],
            [Date.UTC(1968, 1, 1), 3],
            [Date.UTC(1969, 1, 1), 3],
            [Date.UTC(1970, 1, 1), 3],
            [Date.UTC(1971, 1, 1), 2],
            [Date.UTC(1972, 1, 1), 1],
            [Date.UTC(1974, 1, 1), 4],
            [Date.UTC(1975, 1, 1), 2],
            [Date.UTC(1976, 1, 1), 1],
            [Date.UTC(1979, 1, 1), 6],
            [Date.UTC(1983, 1, 1), 1],
            [Date.UTC(1985, 1, 1), 3],
            [Date.UTC(1986, 1, 1), 3],
            [Date.UTC(1992, 1, 1), 1],
            [Date.UTC(1993, 1, 1), 5],
            [Date.UTC(1994, 1, 1), 11],
            [Date.UTC(1995, 1, 1), 7],
            [Date.UTC(1996, 1, 1), 3],
            [Date.UTC(1997, 1, 1), 5],
            [Date.UTC(1998, 1, 1), 1],
            [Date.UTC(1999, 1, 1), 4],
            [Date.UTC(2001, 1, 1), 6],
            [Date.UTC(2002, 1, 1), 2],
            [Date.UTC(2003, 1, 1), 3],
            [Date.UTC(2004, 1, 1), 2],
            [Date.UTC(2005, 1, 1), 2],
            [Date.UTC(2007, 1, 1), 4],
            [Date.UTC(2008, 1, 1), 1],
            [Date.UTC(2014, 1, 1), 3],
          ]
        },
        {
          name: 'Video',
          color: 'darkgreen',
          data: [
            [Date.UTC(1870, 1, 1), 1],
            [Date.UTC(1884, 1, 1), 3],
            [Date.UTC(1891, 1, 1), 1],
            [Date.UTC(1897, 1, 1), 1],
            [Date.UTC(1899, 1, 1), 2],
            [Date.UTC(1901, 1, 1), 1],
            [Date.UTC(1903, 1, 1), 2],
            [Date.UTC(1904, 1, 1), 2],
            [Date.UTC(1905, 1, 1), 9],
            [Date.UTC(1906, 1, 1), 1],
            [Date.UTC(1907, 1, 1), 1],
            [Date.UTC(1908, 1, 1), 3],
            [Date.UTC(1910, 1, 1), 1],
            [Date.UTC(1911, 1, 1), 24],
            [Date.UTC(1913, 1, 1), 5],
            [Date.UTC(1914, 1, 1), 5],
            [Date.UTC(1915, 1, 1), 4],
            [Date.UTC(1916, 1, 1), 2],
            [Date.UTC(1917, 1, 1), 4],
            [Date.UTC(1918, 1, 1), 1],
            [Date.UTC(1919, 1, 1), 4],
            [Date.UTC(1920, 1, 1), 4],
            [Date.UTC(1921, 1, 1), 1],
            [Date.UTC(1923, 1, 1), 5],
            [Date.UTC(1924, 1, 1), 5],
            [Date.UTC(1925, 1, 1), 3],
            [Date.UTC(1926, 1, 1), 23],
            [Date.UTC(1927, 1, 1), 7],
            [Date.UTC(1928, 1, 1), 3],
            [Date.UTC(1929, 1, 1), 7],
            [Date.UTC(1930, 1, 1), 3],
            [Date.UTC(1931, 1, 1), 7],
            [Date.UTC(1932, 1, 1), 6],
            [Date.UTC(1933, 1, 1), 18],
            [Date.UTC(1934, 1, 1), 1],
            [Date.UTC(1935, 1, 1), 9],
            [Date.UTC(1936, 1, 1), 29],
            [Date.UTC(1937, 1, 1), 15],
            [Date.UTC(1938, 1, 1), 8],
            [Date.UTC(1939, 1, 1), 10],
            [Date.UTC(1940, 1, 1), 3],
            [Date.UTC(1941, 1, 1), 7],
            [Date.UTC(1942, 1, 1), 3],
            [Date.UTC(1943, 1, 1), 52],
            [Date.UTC(1944, 1, 1), 12],
            [Date.UTC(1945, 1, 1), 28],
            [Date.UTC(1946, 1, 1), 7],
            [Date.UTC(1947, 1, 1), 6],
            [Date.UTC(1948, 1, 1), 15],
            [Date.UTC(1949, 1, 1), 3],
            [Date.UTC(1950, 1, 1), 72],
            [Date.UTC(1951, 1, 1), 25],
            [Date.UTC(1952, 1, 1), 10],
            [Date.UTC(1953, 1, 1), 28],
            [Date.UTC(1954, 1, 1), 13],
            [Date.UTC(1955, 1, 1), 14],
            [Date.UTC(1956, 1, 1), 20],
            [Date.UTC(1957, 1, 1), 73],
            [Date.UTC(1958, 1, 1), 55],
            [Date.UTC(1959, 1, 1), 17],
            [Date.UTC(1960, 1, 1), 37],
            [Date.UTC(1961, 1, 1), 14],
            [Date.UTC(1962, 1, 1), 55],
            [Date.UTC(1963, 1, 1), 23],
            [Date.UTC(1964, 1, 1), 15],
            [Date.UTC(1965, 1, 1), 18],
            [Date.UTC(1966, 1, 1), 54],
            [Date.UTC(1967, 1, 1), 34],
            [Date.UTC(1968, 1, 1), 90],
            [Date.UTC(1969, 1, 1), 44],
            [Date.UTC(1970, 1, 1), 66],
            [Date.UTC(1971, 1, 1), 58],
            [Date.UTC(1972, 1, 1), 29],
            [Date.UTC(1973, 1, 1), 24],
            [Date.UTC(1974, 1, 1), 84],
            [Date.UTC(1975, 1, 1), 39],
            [Date.UTC(1976, 1, 1), 62],
            [Date.UTC(1977, 1, 1), 32],
            [Date.UTC(1978, 1, 1), 34],
            [Date.UTC(1979, 1, 1), 49],
            [Date.UTC(1980, 1, 1), 62],
            [Date.UTC(1981, 1, 1), 37],
            [Date.UTC(1982, 1, 1), 65],
            [Date.UTC(1983, 1, 1), 46],
            [Date.UTC(1984, 1, 1), 31],
            [Date.UTC(1985, 1, 1), 32],
            [Date.UTC(1986, 1, 1), 25],
            [Date.UTC(1987, 1, 1), 39],
            [Date.UTC(1988, 1, 1), 34],
            [Date.UTC(1989, 1, 1), 27],
            [Date.UTC(1990, 1, 1), 19],
            [Date.UTC(1991, 1, 1), 25],
            [Date.UTC(1992, 1, 1), 14],
            [Date.UTC(1993, 1, 1), 14],
            [Date.UTC(1994, 1, 1), 25],
            [Date.UTC(1995, 1, 1), 15],
            [Date.UTC(1996, 1, 1), 34],
            [Date.UTC(1997, 1, 1), 25],
            [Date.UTC(1998, 1, 1), 21],
            [Date.UTC(1999, 1, 1), 19],
            [Date.UTC(2000, 1, 1), 30],
            [Date.UTC(2001, 1, 1), 33],
            [Date.UTC(2002, 1, 1), 50],
            [Date.UTC(2003, 1, 1), 39],
            [Date.UTC(2004, 1, 1), 61],
            [Date.UTC(2005, 1, 1), 53],
            [Date.UTC(2006, 1, 1), 46],
            [Date.UTC(2007, 1, 1), 63],
            [Date.UTC(2008, 1, 1), 49],
            [Date.UTC(2009, 1, 1), 52],
            [Date.UTC(2010, 1, 1), 36],
            [Date.UTC(2011, 1, 1), 32],
            [Date.UTC(2012, 1, 1), 16],
            [Date.UTC(2013, 1, 1), 14],
            [Date.UTC(2014, 1, 1), 4],
            [Date.UTC(2015, 1, 1), 5],
            [Date.UTC(2016, 1, 1), 3],
            [Date.UTC(1914, 1, 1), 1],
            [Date.UTC(1928, 1, 1), 2],
            [Date.UTC(1947, 1, 1), 2],
            [Date.UTC(1950, 1, 1), 1],
            [Date.UTC(1952, 1, 1), 1],
            [Date.UTC(1953, 1, 1), 1],
            [Date.UTC(1955, 1, 1), 1],
            [Date.UTC(1957, 1, 1), 24],
            [Date.UTC(1960, 1, 1), 26],
            [Date.UTC(1961, 1, 1), 3],
            [Date.UTC(1964, 1, 1), 7],
            [Date.UTC(1965, 1, 1), 11],
            [Date.UTC(1966, 1, 1), 41],
            [Date.UTC(1967, 1, 1), 20],
            [Date.UTC(1968, 1, 1), 26],
            [Date.UTC(1969, 1, 1), 30],
            [Date.UTC(1970, 1, 1), 46],
            [Date.UTC(1971, 1, 1), 20],
            [Date.UTC(1972, 1, 1), 60],
            [Date.UTC(1973, 1, 1), 60],
            [Date.UTC(1974, 1, 1), 130],
            [Date.UTC(1975, 1, 1), 62],
            [Date.UTC(1976, 1, 1), 85],
            [Date.UTC(1977, 1, 1), 36],
            [Date.UTC(1978, 1, 1), 56],
            [Date.UTC(1979, 1, 1), 91],
            [Date.UTC(1980, 1, 1), 77],
            [Date.UTC(1981, 1, 1), 55],
            [Date.UTC(1982, 1, 1), 78],
            [Date.UTC(1983, 1, 1), 117],
            [Date.UTC(1984, 1, 1), 67],
            [Date.UTC(1985, 1, 1), 75],
            [Date.UTC(1986, 1, 1), 38],
            [Date.UTC(1987, 1, 1), 45],
            [Date.UTC(1988, 1, 1), 55],
            [Date.UTC(1989, 1, 1), 42],
            [Date.UTC(1990, 1, 1), 27],
            [Date.UTC(1991, 1, 1), 40],
            [Date.UTC(1992, 1, 1), 37],
            [Date.UTC(1993, 1, 1), 39],
            [Date.UTC(1994, 1, 1), 161],
            [Date.UTC(1995, 1, 1), 53],
            [Date.UTC(1996, 1, 1), 39],
            [Date.UTC(1997, 1, 1), 32],
            [Date.UTC(1998, 1, 1), 50],
            [Date.UTC(1999, 1, 1), 37],
            [Date.UTC(2000, 1, 1), 35],
            [Date.UTC(2001, 1, 1), 33],
            [Date.UTC(2002, 1, 1), 36],
            [Date.UTC(2003, 1, 1), 41],
            [Date.UTC(2004, 1, 1), 37],
            [Date.UTC(2005, 1, 1), 34],
            [Date.UTC(2006, 1, 1), 35],
            [Date.UTC(2007, 1, 1), 57],
            [Date.UTC(2008, 1, 1), 42],
            [Date.UTC(2009, 1, 1), 36],
            [Date.UTC(2010, 1, 1), 31],
            [Date.UTC(2011, 1, 1), 29],
            [Date.UTC(2012, 1, 1), 38],
            [Date.UTC(2013, 1, 1), 29],
            [Date.UTC(2014, 1, 1), 18],
            [Date.UTC(2015, 1, 1), 7],
            [Date.UTC(2016, 1, 1), 11],
            [Date.UTC(2017, 1, 1), 2],
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
 
  
  
 

}

   
   


  

  

}
