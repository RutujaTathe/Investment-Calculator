import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Shared/header/header.component';
import { UserInputComponent } from './Components/user-input/user-input.component';
import { CalculatedInvestmentComponent } from "./Components/calculated-investment/calculated-investment.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, UserInputComponent, CalculatedInvestmentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'InvestmentCalculatorProject';
  
}
