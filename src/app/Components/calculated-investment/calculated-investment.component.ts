import { Component, Input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { InvestmentServiceService } from 'src/app/Service/investment-service.service';

@Component({
  selector: 'app-calculated-investment',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './calculated-investment.component.html',
  styleUrls: ['./calculated-investment.component.scss'],
})
export class CalculatedInvestmentComponent {
  constructor(private investmentService: InvestmentServiceService) {}
  get results() {
    return this.investmentService.resultData;

    //using signal
    // result=computed(()=>this.investmentService.resultData.asReadOnly();
  }
}
