import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';
import { Router } from '@angular/router';
import type { InvestmentInput } from '../calculated-investment/investment-input.model';
import { InvestmentServiceService } from 'src/app/Service/investment-service.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent {
  constructor(
    private investmentService: InvestmentServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  enterInitialInvestment = '0';
  enterAnnualInvestment = '0';
  enterExpectedReturn = '5';
  enterDuration = '10';
  // enterDuration = signal('10');
  showSnackbar: boolean = false;

  faqs = [
    {
      question: 'What is Initial Investment?',
      answer:
        'The starting amount of money The initial investment is the amount of money you start with when making an investment. It is the principal amount you initially put into an investment plan.',
      open: false,
    },
    {
      question: 'How is the "Expected Return" calculated?',
      answer:
        'The expected return is the percentage of growth you anticipate from your investment over a specific period. It is usually an average annual rate based on past performance or market conditions.',
      open: false,
    },
    {
      question: 'What does "Annual Investment" mean?',
      answer:
        'Annual investment refers to the amount of money you plan to add to your investment each year to grow your overall investment portfolio.',
      open: false,
    },
    {
      question: 'What does "Duration" mean in the form?',
      answer:
        "Duration refers to the number of years you plan to keep your investment active or the time frame for which you want to calculate the investment's growth.",
      open: false,
    },
    {
      question: 'What is the purpose of the "Load Example Data" button?',
      answer:
        'The "Load Example Data" button fills the form with predefined values to help you understand how the calculation works or test the tool with sample inputs.',
      open: false,
    },
    {
      question: 'Can I edit the loaded example data?',
      answer:
        'Yes, you can modify any field after loading the example data and then proceed to calculate with the updated values.',
      open: false,
    },
  ];

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

  onReset() {
    this.enterInitialInvestment = '';
    this.enterAnnualInvestment = '';
    this.enterExpectedReturn = '';
    this.enterDuration = '';

    this.showSnackbar = true;
    setTimeout(() => {
      this.showSnackbar = false;
    }, 3000);
  }

  loadExampleData() {
    this.enterInitialInvestment = '10000';
    this.enterAnnualInvestment = '5000';
    this.enterExpectedReturn = '8';
    this.enterDuration = '20';
  }
}
