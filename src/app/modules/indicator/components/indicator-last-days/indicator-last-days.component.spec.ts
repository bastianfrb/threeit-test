import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicatorModule } from '../../indicator.module';

import { IndicatorLastDaysComponent } from './indicator-last-days.component';

describe('IndicatorLastDaysComponent', () => {
  let component: IndicatorLastDaysComponent;
  let fixture: ComponentFixture<IndicatorLastDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorLastDaysComponent ],
      imports: [IndicatorModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorLastDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
