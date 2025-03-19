import { Injectable } from '@angular/core';
import { InvestmentInput, InvestmentResultInterface } from '../Components/calculated-investment/investment-input.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentServiceService {
  resultData: InvestmentResultInterface[] = [];

  constructor() {}

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } = data;
    const annualData = [];

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;

      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment,
        totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultData = annualData;
  }
}
