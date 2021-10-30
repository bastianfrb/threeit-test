import { Injectable } from '@angular/core';
import { CommunicationService } from '../../shared/services/communication.service';
import { IIndicatorDetail, IIndicatorObject } from '../interfaces/indicators';
import { IIndicator } from '../interfaces/indicators';

@Injectable({
  providedIn: 'root',
})
export class IndicatorService {

  constructor(private communicationService: CommunicationService) { }

  /**
   * Function to get the current indicators
   */
  public getCurrentIndicators(): Promise<IIndicatorObject> {
    return new Promise((resolve) => {
      const url = 'https://mindicador.cl/api';
      this.communicationService.get(url).subscribe((response: any) => {

        // Create object width default values
        const indicators: IIndicatorObject = {
          data: [] as IIndicator[],
          info: {
            autor: response.autor || '',
            fecha: response.fecha || '',
            version: response.version || '',
          }
        };

        // Excluded data because they aren't indicators
        const excluded = ['autor', 'fecha', 'version'];

        for (const key of Object.keys(response)) {
          if (!excluded.includes(key)) {
            indicators.data.push(response[key]);
          }
        }

        resolve(indicators);
      }, 
      (error) => console.error('Could not call miindicador API', error)
      );
    });
  }

  /**
   * Function to get last 10 days of an indicator
   */
   public getIndicatorDetail(indicator: string): Promise<IIndicatorDetail> {
    const url = `https://mindicador.cl/api/${indicator}`;

    return this.communicationService.get(url).toPromise().catch((error) => {
      console.error('Could not call miindicador API', error);
    });
  }
}
