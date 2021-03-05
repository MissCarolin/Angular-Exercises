import { AppV3Module } from './views/v3/v3.module';
import { AppV2Module } from './views/v2/v2.module';
import { AppV1Module } from './views/v1/v1.module';
import { AppC3Module } from './components/c3/c3.module';
import { AppC2Module } from './components/c2/c2.module';
import { AppC1Moudule } from './components/c1/c1.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { V1Component } from './views/v1/v1.component';
import { V2Component } from './views/v2/v2.component';
import { V3Component } from './views/v3/v3.component';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
