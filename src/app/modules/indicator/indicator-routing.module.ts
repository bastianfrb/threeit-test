import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicatorDetailChartComponent } from './components/indicator-detail-chart/indicator-detail-chart.component';
import { IndicatorDetailComponent } from './components/indicator-detail/indicator-detail.component';
import { IndicatorMainComponent } from './components/indicator-main/indicator-main.component';

const routes: Routes = [
  {
    path: '',
    component: IndicatorMainComponent
  },
  {
    path: 'detail/:code',
    component: IndicatorDetailComponent
  },
  {
    path: 'detail-chart/:code',
    component: IndicatorDetailChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicatorRoutingModule { }
