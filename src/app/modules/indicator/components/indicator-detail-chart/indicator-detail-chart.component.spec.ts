import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicatorModule } from '../../indicator.module';

import { IndicatorDetailChartComponent } from './indicator-detail-chart.component';

describe('IndicatorDetailChartComponent', () => {
  let component: IndicatorDetailChartComponent;
  let fixture: ComponentFixture<IndicatorDetailChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorDetailChartComponent ],
      imports: [IndicatorModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorDetailChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
