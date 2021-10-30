import { DatePresentationPipe } from './date-presentation.pipe';

describe('DatePresentationPipe', () => {
  it('create an instance', () => {
    const pipe = new DatePresentationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should show "-" when value is invalid', () => {
    const pipe = new DatePresentationPipe();
    const firstCase = '0001-01-01T00:00:00+00:00';
    const secondCase = '1900-01-01T00:00:00+00:00';

    expect(pipe.transform(firstCase)).toEqual('-');
    expect(pipe.transform(secondCase)).toEqual('-');
  });

  it('should format date from YYYY-MM-DD format to DD/MM/YYYY', () => {
    const pipe = new DatePresentationPipe();
    const dateValue = '2021-10-30T19:15:00';
    expect(pipe.transform(dateValue)).toEqual('30/10/2021');
  });
});
