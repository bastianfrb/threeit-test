import { Component, OnInit } from '@angular/core';
import { IIndicatorObject } from '../../interfaces/indicators';
import { IndicatorService } from '../../services/indicator.service';

@Component({
  selector: 'app-indicator-main',
  templateUrl: './indicator-main.component.html',
  styleUrls: ['./indicator-main.component.scss']
})
export class IndicatorMainComponent implements OnInit {

  public indicators: IIndicatorObject;

  constructor(private indicatorService: IndicatorService) {
    this.indicators = {
      data: [],
    };
  }

  ngOnInit(): void {
    this.getCurrentIndicators();
  }

  /**
   * Function to get the current indicators
   */
  public async getCurrentIndicators(): Promise<void> {
    this.indicators = await this.indicatorService.getCurrentIndicators();

    for (const indicator of this.indicators.data) {
      indicator.detail = await this.setDetailIndicator(indicator.codigo);

      console.log(indicator.detail);
    }
  }

  /**
   * Function to assign detail indicator to indicatorObject
   */
  private setDetailIndicator(indicatorCode: string): Promise<any> {
    return this.indicatorService.getIndicatorDetail(indicatorCode);
  }

}
