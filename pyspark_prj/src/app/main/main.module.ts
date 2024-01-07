import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DemoComponent } from './demo/demo.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
