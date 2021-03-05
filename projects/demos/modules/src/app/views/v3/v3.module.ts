import { AppC3Module } from './../../components/c3/c3.module';
import { AppC2Module } from './../../components/c2/c2.module';
import { AppC1Moudule } from './../../components/c1/c1.module';
import { V3Component } from './v3.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppV3RoutingModule } from './v3.routing.module';

@NgModule({
  declarations: [V3Component],
  imports: [CommonModule, AppC1Moudule, AppC3Module, AppV3RoutingModule],
  exports: [V3Component],
})
export class AppV3Module {}
