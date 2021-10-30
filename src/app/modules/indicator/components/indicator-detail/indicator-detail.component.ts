import { Component, Input, OnInit } from '@angular/core';
import { IIndicatorDetail } from '../../interfaces/indicators';

@Component({
  selector: 'app-indicator-detail',
  templateUrl: './indicator-detail.component.html',
  styleUrls: ['./indicator-detail.component.scss']
})
export class IndicatorDetailComponent implements OnInit {

  @Input() public indicator: IIndicatorDetail;

  constructor() { 
    this.indicator = {
      autor: '',
      codigo: '',
      nombre: '',
      serie: [],
      unidad_medida: '',
      version: ''
    };
  }

  ngOnInit(): void {
  }

}
