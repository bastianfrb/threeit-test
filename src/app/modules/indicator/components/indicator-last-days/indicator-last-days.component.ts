import { Component, OnInit } from '@angular/core';
import { IIndicatorDetail } from '../../interfaces/indicators';

@Component({
  selector: 'app-indicator-last-days',
  templateUrl: './indicator-last-days.component.html',
  styleUrls: ['./indicator-last-days.component.scss']
})
export class IndicatorLastDaysComponent implements OnInit {

  public indicator: IIndicatorDetail;

  public displayedColumns: string[];

  constructor() {
    this.indicator = {
      autor: '',
      codigo: '',
      nombre: '',
      serie: [],
      unidad_medida: '',
      version: ''
    };

    this.displayedColumns = ['fecha', 'valor'];
  }

  ngOnInit(): void {
  }

}
