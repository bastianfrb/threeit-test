import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicatorModule } from '../../indicator.module';

import { IndicatorMainComponent } from './indicator-main.component';

describe('IndicatorMainComponent', () => {
  let component: IndicatorMainComponent;
  let fixture: ComponentFixture<IndicatorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorMainComponent ],
      imports: [IndicatorModule]
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
