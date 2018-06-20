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

    ngOnInit() {
      c();

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
              text:'Source: <a href="dashboard3">Click me for Biography of Artist</a>'
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