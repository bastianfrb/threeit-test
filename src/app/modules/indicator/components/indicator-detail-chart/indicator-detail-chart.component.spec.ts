import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorDetailChartComponent } from './indicator-detail-chart.component';

describe('IndicatorDetailChartComponent', () => {
  let component: IndicatorDetailChartComponent;
  let fixture: ComponentFixture<IndicatorDetailChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorDetailChartComponent ]
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
