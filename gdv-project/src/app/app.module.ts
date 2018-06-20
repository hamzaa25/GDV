import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartModule} from 'angular-highcharts';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: StartpageComponent },
  { path: 'second', component: SecondpageComponent },
  { path: 'third', component: ThirdpageComponent },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    SecondpageComponent,
    ThirdpageComponent
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
