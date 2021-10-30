import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndicatorModule } from '../../indicator.module';

import { IndicatorDetailComponent } from './indicator-detail.component';

@Component({
  selector: 'app-indicator-detail',
  template: `
    <!-- Extract from main html -->
    <div class="last-days">
      <button #button mat-icon-button 
        matTooltip="Ver últimos 10 días"
        matTooltipPosition="above"
        (click)="openLastDaysDialog()">
        <mat-icon>today</mat-icon>
      </button>
    </div>
  `,
})
class TestIndicatorDetail extends IndicatorDetailComponent {
  @ViewChild('button', { static: true })
  public buttonRef?: ElementRef;
}

describe('IndicatorDetailComponent', () => {
  let component: TestIndicatorDetail;
  let fixture: ComponentFixture<TestIndicatorDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestIndicatorDetail ],
      imports: [IndicatorModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIndicatorDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open LastDayComponent', fakeAsync(() => {
    const spyOpen = spyOn(component, 'openLastDaysDialog').and.callThrough();

    // Wait for component initialization
    tick(1000);
    component.buttonRef?.nativeElement.click();

    expect(spyOpen).toHaveBeenCalled();
  }));
});
