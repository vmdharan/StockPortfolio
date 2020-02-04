import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  dashboard() {
    this.router.navigate(['']);
  }

  createCompany() {
    this.router.navigate(['create-company']);
  }

  listCompanies() {
    this.router.navigate(['list-companies']);
  }

  createSector() {
    this.router.navigate(['create-sector']);
  }

  listSectors() {
    this.router.navigate(['list-sectors']);
  }

  buySellShares() {
    this.router.navigate(['buy-sell-shares']);
  }

  transactionHistory() {
    this.router.navigate(['transaction-history']);
  }

  holdings() {
    this.router.navigate(['holdings']);
  }

  updatePrices() {
    this.router.navigate(['update-prices']);
  }
}
