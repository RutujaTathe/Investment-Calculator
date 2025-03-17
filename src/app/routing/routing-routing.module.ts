import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../Shared/header/header.component';
import { CalculatedInvestmentComponent } from '../Components/calculated-investment/calculated-investment.component';
import { UserInputComponent } from '../Components/user-input/user-input.component';

const routes: Routes = [
  {path:'calculate',component:CalculatedInvestmentComponent},
  {
    path:'',pathMatch:'full',component:UserInputComponent,
    
  },
  {
    path:'',component:UserInputComponent
  },
  {
    path:'**',component:UserInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
