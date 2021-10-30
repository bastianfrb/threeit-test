import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datePresentation'
})
export class DatePresentationPipe implements PipeTransform {

  constructor() { }
  public transform(value: string, args?: any): string {
    if (value === '0001-01-01T00:00:00+00:00' || value === '1900-01-01T00:00:00+00:00') {
      return '-';
    } else {
      console.log(value);
      const format = 'DD/MM/YYYY';
      const message = moment(value, 'YYYY-MM-DD').format(format);
      return message;
    }

  }

}
