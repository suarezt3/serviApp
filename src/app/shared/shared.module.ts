import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimengModule } from '../primeNG/primeng.module';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    PrimengModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
