import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorMainComponent } from './indicator-main.component';

describe('IndicatorMainComponent', () => {
  let component: IndicatorMainComponent;
  let fixture: ComponentFixture<IndicatorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
