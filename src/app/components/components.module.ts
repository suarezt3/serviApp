import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';


import { PrimengModule } from '../primeNG/primeng.module';
import { FormComponent } from './form/form.component';
import { CardClientComponent } from './card-client/card-client.component';
import { ChartComponent } from './chart/chart.component';
import { NextDateComponent } from './next-date/next-date.component';
import { StatisticsComponent } from './statistics/statistics.component';




@NgModule({
  declarations: [
    TableComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent,
    CardClientComponent,
    ChartComponent,
    NextDateComponent,
    StatisticsComponent,

  ],
  exports: [
    BrowserAnimationsModule,
    TableComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent,
    CardClientComponent,
    NextDateComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
