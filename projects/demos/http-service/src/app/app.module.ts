import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { UnsubscribeTakeUntilComponent } from './components/unsubscribe-take-until/unsubscribe-take-until.component';
import { UnsubscribeAsyncComponent } from './components/unsubscribe-async/unsubscribe-async.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    UnsubscribeTakeUntilComponent,
    UnsubscribeAsyncComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
