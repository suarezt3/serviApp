import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { PrimengModule } from '../primeNG/primeng.module';



@NgModule({
  declarations: [
    CrudComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    CrudComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
  ]
})
export class ComponentsModule { }
