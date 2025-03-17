import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedInvestmentComponent } from './calculated-investment.component';

describe('CalculatedInvestmentComponent', () => {
  let component: CalculatedInvestmentComponent;
  let fixture: ComponentFixture<CalculatedInvestmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalculatedInvestmentComponent]
    });
    fixture = TestBed.createComponent(CalculatedInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
