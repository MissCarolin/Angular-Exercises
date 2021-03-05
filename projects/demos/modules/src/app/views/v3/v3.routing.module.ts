
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V3Component } from './v3.component';
const routes: Routes = [
  {
    path: '',
    component: V3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppV3RoutingModule {}
