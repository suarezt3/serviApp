import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';



@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    ToastModule,
    ButtonModule,
    FileUploadModule,
    TableModule
  ],
  exports: [
    ToolbarModule,
    ToastModule,
    ButtonModule,
    FileUploadModule,
    TableModule
  ]
})
export class PrimengModule { }
