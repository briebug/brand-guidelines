import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewPageComponent } from './overview-page/overview-page.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    OverviewRoutingModule
  ],
  declarations: [OverviewPageComponent]
})
export class OverviewModule { }
