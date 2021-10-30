import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorDetailComponent } from './components/indicator-detail/indicator-detail.component';
import { IndicatorDetailChartComponent } from './components/indicator-detail-chart/indicator-detail-chart.component';
import { IndicatorLastDaysComponent } from './components/indicator-last-days/indicator-last-days.component';
import { IndicatorMainComponent } from './components/indicator-main/indicator-main.component';
import { MatCardModule } from '@angular/material/card';
import { IndicatorRoutingModule } from './indicator-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    IndicatorDetailComponent,
    IndicatorDetailChartComponent,
    IndicatorLastDaysComponent,
    IndicatorMainComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    IndicatorRoutingModule,
    MatProgressSpinnerModule,
    SharedModule,
    HighchartsChartModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
  ],
})
export class IndicatorModule { }
