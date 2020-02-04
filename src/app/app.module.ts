import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { ChartsModule } from 'ng2-charts';

import { CreateSectorComponent } from './components/create-sector/create-sector.component';
import { ListSectorsComponent } from './components/list-sectors/list-sectors.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BuySellSharesComponent } from './components/buy-sell-shares/buy-sell-shares.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { HoldingsComponent } from './components/holdings/holdings.component';
import { UpdatePricesComponent } from './components/update-prices/update-prices.component';
import { DashboardTopMenuComponent } from './components/dashboard-top-menu/dashboard-top-menu.component';
import { ScoreCardComponent } from './components/dashboard/score-card/score-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopMenuComponent,
    CreateSectorComponent,
    ListSectorsComponent,
    CreateCompanyComponent,
    ListCompaniesComponent,
    DashboardComponent,
    BuySellSharesComponent,
    TransactionHistoryComponent,
    HoldingsComponent,
    UpdatePricesComponent,
    DashboardTopMenuComponent,
    ScoreCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    ChartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
