import { TestBed } from '@angular/core/testing';
import { IndicatorModule } from '../indicator.module';

import { IndicatorService } from './indicator.service';

describe('IndicatorService', () => {
  let service: IndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IndicatorModule]
    });
    service = TestBed.inject(IndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
