import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';
import { Router } from '@angular/router';
import type { InvestmentInput } from '../calculated-investment/investment-input.model';
import { InvestmentServiceService } from 'src/app/Service/investment-service.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent {
  constructor(
    private investmentService: InvestmentServiceService,
    private router: Router
  ) {}
  enterInitialInvestment = '0';
  enterAnnualInvestment = '0';
  enterExpectedReturn = '5';
  enterDuration = '10';
  // enterDuration = signal('10');

  onSubmit() {
    this.router.navigate(['calculate']);
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enterInitialInvestment,
      // initialInvestment: +this.enterInitialInvestment(),
      duration: +this.enterDuration,
      expectedReturn: +this.enterExpectedReturn,
      annualInvestment: +this.enterAnnualInvestment,
    });
  }
}
