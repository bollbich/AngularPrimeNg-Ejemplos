import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import localES from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localES);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    PrimeNgModule,
    SharedModule,
    VentasModule,
    PrimeNgModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide:LOCALE_ID,useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
