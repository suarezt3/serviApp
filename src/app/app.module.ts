import { NgModule, LOCALE_ID  } from '@angular/core'; // LOCALE_ID Para el idioma español
import { registerLocaleData } from '@angular/common'; //Para el idioma español
import localeEs from '@angular/common/locales/es'; //Para el idioma español


import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';


import { MessageService } from 'primeng/api';


registerLocaleData(localeEs, 'es'); // Registra el idioma español


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [
    MessageService,
    { provide: LOCALE_ID, useValue: 'es' } // Establece el locale a español

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
