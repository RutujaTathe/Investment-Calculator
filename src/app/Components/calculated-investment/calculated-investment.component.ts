import { Component, Input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { InvestmentServiceService } from 'src/app/Service/investment-service.service';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'app-calculated-investment',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, MatPaginatorModule],
  templateUrl: './calculated-investment.component.html',
  styleUrls: ['./calculated-investment.component.scss'],
})
export class CalculatedInvestmentComponent {
  length = 0; 
  pageSize = 10; 
  pageIndex = 0; 
  pageSizeOptions = [5, 10, 25]; 
  displayedResults: any[] = []; 
  showFirstLastButtons!: true;

  constructor(private investmentService: InvestmentServiceService) {}

  ngOnInit(): void {
    this.updateDisplayedResults();
  }

  updateDisplayedResults(): void {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;

    this.displayedResults = this.investmentService.resultData.slice(start, end);
    this.length = this.investmentService.resultData.length;
  }

  onPageEvent(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedResults();
  }

  get results() {
    return this.displayedResults;
  }
}
