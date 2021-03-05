import { AppV3Module } from './views/v3/v3.module';
import { V3Component } from './views/v3/v3.component';
import { V2Component } from './views/v2/v2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V1Component } from './views/v1/v1.component';
const routes: Routes = [
  {
    path: 'v1',
    loadChildren: () =>
      import('./views/v1/v1.module').then((m) => m.AppV1Module),
  },
  {
    path: 'v2',
    loadChildren: () =>
      import('./views/v2/v2.module').then((m) => m.AppV2Module),
  },
  {
    path: 'v3',
    loadChildren: () =>
      import('./views/v3/v3.module').then((m) => m.AppV3Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
