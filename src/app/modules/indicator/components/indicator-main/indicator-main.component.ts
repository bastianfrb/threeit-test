import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/modules/shared/services/communication.service';
import { IIndicatorResponse } from '../../interfaces/IIndicator';
import { IndicatorService } from '../../services/indicator.service';

@Component({
  selector: 'app-indicator-main',
  templateUrl: './indicator-main.component.html',
  styleUrls: ['./indicator-main.component.scss']
})
export class IndicatorMainComponent implements OnInit {

  public indicators: IIndicatorResponse[];

  constructor(private indicatorService: IndicatorService) {
    this.indicators = [];
  }

  ngOnInit(): void {
    this.getCurrentIndicators();
  }

  /**
   * Function to get the current indicators
   */
  public getCurrentIndicators(): void {
    this.indicatorService.getCurrentIndicators();
  }

}
