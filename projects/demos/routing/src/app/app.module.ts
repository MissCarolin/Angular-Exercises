import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewAComponent } from './views/view-a/view-a.component';
import { ViewBComponent } from './views/view-b/view-b.component';
import { ViewCComponent } from './views/view-c/view-c.component';

const routes: Routes = [
{
  path:'view-a', component: ViewAComponent,
},
{
  path:'view-b', component: ViewBComponent,
},
{path:'view-c', component: ViewCComponent,
},
{path: '**', redirectTo: 'view-a'}
];

@NgModule({
  declarations: [
    AppComponent,
    ViewAComponent,
    ViewBComponent,
    ViewCComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
