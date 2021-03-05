import { AppV2RoutingModule } from './v2.routing.module';
import { AppC2Module } from './../../components/c2/c2.module';
import { V2Component } from './v2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [V2Component],
  imports: [CommonModule, AppC2Module, AppV2RoutingModule],
  exports: [V2Component],
})
export class AppV2Module {}
