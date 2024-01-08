import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MegaMenuModule,
    MenubarModule,
    InputTextModule,
  ],
  exports: [
    ButtonModule,
    MegaMenuModule,
    MenubarModule,
    InputTextModule,
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
