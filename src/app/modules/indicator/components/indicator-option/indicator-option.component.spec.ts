import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorOptionComponent } from './indicator-option.component';

describe('IndicatorOptionComponent', () => {
  let component: IndicatorOptionComponent;
  let fixture: ComponentFixture<IndicatorOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
