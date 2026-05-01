import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { WelcomePage } from './welcome-page/welcome-page';

@NgModule({
  declarations: [WelcomePage],
  imports: [CommonModule, DashboardRoutingModule],
  exports:[WelcomePage]
})
export class DashboardModule {}
