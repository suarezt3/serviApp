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
    DialogModule
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
    DialogModule
  ]
})
export class PrimengModule { }
