import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AccordionModule} from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { TagModule } from 'primeng/tag';
import { SidebarModule } from 'primeng/sidebar';






@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    ToastModule,
    ButtonModule,
    FileUploadModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    CardModule,
    DialogModule,
    CalendarModule,
    InputTextareaModule,
    AccordionModule,
    ChartModule,
    TagModule,
    SidebarModule
  ],
  exports: [
    ToolbarModule,
    ToastModule,
    ButtonModule,
    FileUploadModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    CardModule,
    DialogModule,
    CalendarModule,
    InputTextareaModule,
    AccordionModule,
    ChartModule,
    TagModule,
    SidebarModule
  ]
})
export class PrimengModule { }
