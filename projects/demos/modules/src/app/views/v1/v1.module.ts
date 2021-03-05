import { AppC1Moudule } from './../../components/c1/c1.module';
import { V1Component } from './v1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppV1RoutingModule } from './v1.routing.module';

@NgModule({
  declarations: [V1Component],
  imports: [CommonModule, AppC1Moudule, AppV1RoutingModule],
  exports: [V1Component],
})
export class AppV1Module {}
