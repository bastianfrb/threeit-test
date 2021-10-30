import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorDetailComponent } from './components/indicator-detail/indicator-detail.component';
import { IndicatorDetailChartComponent } from './components/indicator-detail-chart/indicator-detail-chart.component';
import { IndicatorLastDaysComponent } from './components/indicator-last-days/indicator-last-days.component';
import { IndicatorMainComponent } from './components/indicator-main/indicator-main.component';
import { IndicatorOptionComponent } from './components/indicator-option/indicator-option.component';
import { MatCardModule } from '@angular/material/card';
import { IndicatorRoutingModule } from './indicator-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    IndicatorDetailComponent,
    IndicatorDetailChartComponent,
    IndicatorLastDaysComponent,
    IndicatorMainComponent,
    IndicatorOptionComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    IndicatorRoutingModule,
    MatProgressSpinnerModule,
  ],
})
export class IndicatorModule { }
