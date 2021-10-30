import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IIndicatorDetail } from '../../interfaces/indicators';
import { IndicatorLastDaysComponent } from '../indicator-last-days/indicator-last-days.component';

@Component({
  selector: 'app-indicator-detail',
  templateUrl: './indicator-detail.component.html',
  styleUrls: ['./indicator-detail.component.scss']
})
export class IndicatorDetailComponent {

  @Input() public indicator: IIndicatorDetail;

  constructor(private dialog: MatDialog) { 
    this.indicator = {
      autor: '',
      codigo: '',
      nombre: '',
      serie: [],
      unidad_medida: '',
      version: ''
    };
  }

  /**
   * Function to open a Mat Dialog with the last 10 days for indicator
   */
  public openLastDaysDialog(): void {
    const instance = this.dialog.open(IndicatorLastDaysComponent);
    instance.componentInstance.indicator = this.indicator;
  }

}
