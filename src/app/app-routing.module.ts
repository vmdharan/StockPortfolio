import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';
import { CreateSectorComponent } from './components/create-sector/create-sector.component';
import { ListSectorsComponent } from './components/list-sectors/list-sectors.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BuySellSharesComponent } from './components/buy-sell-shares/buy-sell-shares.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { HoldingsComponent } from './components/holdings/holdings.component';
import { UpdatePricesComponent } from './components/update-prices/update-prices.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', component: DashboardComponent,
  },
  { path: 'create-company', component: CreateCompanyComponent },
  { path: 'list-companies', component: ListCompaniesComponent },
  { path: 'create-sector', component: CreateSectorComponent },
  { path: 'list-sectors', component: ListSectorsComponent },
  { path: 'buy-sell-shares', component: BuySellSharesComponent },
  { path: 'transaction-history', component: TransactionHistoryComponent },
  { path: 'holdings', component: HoldingsComponent },
  { path: 'update-prices', component: UpdatePricesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
