import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { TestComponent } from './test/test.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule,GoogleChartsModule],
  declarations: [AppComponent, CustomerComponent, TestComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
