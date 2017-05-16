import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdCardModule,
  MdGridListModule
} from '@angular/material';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdGridListModule
  ],
  exports: [
    MdCardModule,
    MdGridListModule,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
