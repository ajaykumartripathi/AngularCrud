import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [MyProfileComponent, DashboardComponent, LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
