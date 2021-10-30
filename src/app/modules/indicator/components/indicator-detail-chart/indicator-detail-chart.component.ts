import { Component, Input, OnInit } from '@angular/core';
import { IIndicatorDetail } from '../../interfaces/indicators';
import * as Highcharts from 'highcharts';
import { DatePresentationPipe } from 'src/app/modules/shared/pipes/date-presentation.pipe';

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
    const datePipe = new DatePresentationPipe();

    this.chartOptions = {
      credits: { enabled: false },
      title: { text: '' },
      chart: {
        backgroundColor: 'transparent',
        height: '200px',
      },
      series: [{
        type: 'line',
        data: this.indicator?.serie.map((value) => {
          return { y: value.valor, label: datePipe.transform(value.fecha) };
        }),
        color: '#26c9d3',
        lineWidth: 3,
        showInLegend: false,
      }],
      yAxis: {
        title: { text: `Valor en ${this.indicator?.unidad_medida}`, style: { color: 'white' } },
        gridLineColor: 'white',
        labels: { style: { color: 'white' } },
      },
      xAxis: {
        title: { text: `Fecha`, style: { color: 'white' } },
        gridLineColor: 'white',
        categories: this.indicator?.serie.map((value, index) => {
          return index % 3 === 0 ? datePipe.transform(value.fecha) : '';
        }),
        labels: { style: { color: 'white' } },
      },
      plotOptions: {
        series: {
          tooltip: {
            headerFormat: '',
            pointFormatter: function() {
              const point = this as any;
              return `
                <strong>Fecha: </strong> ${point.label}
                <br><strong>Valor: </strong> ${point.y}
              `;
            },
          }
        }
      }
    };
  }

}
