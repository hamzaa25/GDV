import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartModule} from 'angular-highcharts';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: StartpageComponent },
  { path: 'second', component: SecondpageComponent },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    SecondpageComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
        RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
