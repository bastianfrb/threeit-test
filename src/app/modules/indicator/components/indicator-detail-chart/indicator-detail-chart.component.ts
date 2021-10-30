import { Component, Input, OnInit } from '@angular/core';
import { IIndicatorDetail } from '../../interfaces/indicators';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-indicator-detail-chart',
  templateUrl: './indicator-detail-chart.component.html',
  styleUrls: ['./indicator-detail-chart.component.scss']
})
export class IndicatorDetailChartComponent implements OnInit {

  @Input() public indicator?: IIndicatorDetail;

  public Highcharts: typeof Highcharts = Highcharts;
  public chartOptions: Highcharts.Options = { };


  constructor() { }

  ngOnInit(): void {
    this.initializeChart();
  }

  private initializeChart(): void {

    this.chartOptions = {
      credits: { enabled: false },
      title: { text: '' },
      chart: {
        backgroundColor: 'transparent',
        height: '200px',
      },
      series: [{
        type: 'line',
        data: this.indicator?.serie.map((v) => {
          return {
            name: v.fecha,
            value: v.valor
          };
        }),
        color: '#26c9d3',
        lineWidth: 3,
        showInLegend: false
      }],
      yAxis: {
        title: { text: `Valor en ${this.indicator?.unidad_medida}` },
        gridLineColor: 'white',
      },
      xAxis: {
        title: { text: `Fecha` },
        gridLineColor: 'white',
      }
    };
  }

}
