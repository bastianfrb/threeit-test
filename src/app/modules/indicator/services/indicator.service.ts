import { Injectable } from '@angular/core';
import { CommunicationService } from '../../shared/services/communication.service';

@Injectable({
  providedIn: 'root',
})
export class IndicatorService {

  constructor(private communicationService: CommunicationService) { }

  /**
   * Function to get the current indicators
   */
   public getCurrentIndicators(): void {
    const url = 'https://mindicador.cl/api'
    this.communicationService.get(url).subscribe((v) => {
      console.log('values', v);
    });
  }
}
