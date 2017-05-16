import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule
  ],
  exports: [
    MdCardModule,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
