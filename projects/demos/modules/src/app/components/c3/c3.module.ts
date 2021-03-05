import { AppC2Module } from './../c2/c2.module';
import { C3Component } from './c3.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [C3Component],
  imports: [CommonModule, AppC2Module],
  exports: [C3Component],
})
export class AppC3Module {}
