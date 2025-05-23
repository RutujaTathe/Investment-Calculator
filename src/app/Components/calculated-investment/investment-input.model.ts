export interface InvestmentInput{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }

  export interface InvestmentResultInterface{
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
  }


