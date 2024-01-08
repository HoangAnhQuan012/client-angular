import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './shared/services/services.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './main/demo/demo.component';
import { MenuTopBarComponent } from './main/menu-top-bar/menu-top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    MenuTopBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
