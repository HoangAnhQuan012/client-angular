import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ButtonModule
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
 }
