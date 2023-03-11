import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { PrimengModule } from '../primeNG/primeng.module';
import { FormComponent } from './form/form.component';
import { CardClientComponent } from './card-client/card-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent,
    CardClientComponent
  ],
  exports: [
    BrowserAnimationsModule,
    TableComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent,
    CardClientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ]
})
export class ComponentsModule { }
