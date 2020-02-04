import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CurrentPrices } from '../../models/stock-prices';
import { PricesService } from 'src/app/services/prices.service';


const ELEMENT_DATA: any = [];

@Component({
  selector: 'app-update-prices',
  templateUrl: './update-prices.component.html',
  styleUrls: ['./update-prices.component.scss']
})
export class UpdatePricesComponent implements OnInit {

  stockPrices: CurrentPrices[] = [];
  stockToUpdate: string = "";
  currentPrice: number = 0;

  displayedColumns: string[] = ["stock", "current_price", "apply"];
  dataSource = new MatTableDataSource<CurrentPrices>();

  constructor(private pricesService: PricesService) { }

  ngOnInit() {
    this.dataSource.data = this.stockPrices;
  }

  addStockPrice() {
    let cp: CurrentPrices = new CurrentPrices();
    cp.stock = this.stockToUpdate;
    cp.price = this.currentPrice;
    cp.apply = true;

    this.stockPrices.push(cp);

    let sp: CurrentPrices[] = [];
    sp = this.stockPrices;
    this.dataSource.data = sp;
  }

  savePrices() {
    this.pricesService.savePrices(this.stockPrices).subscribe(res => {

    });
  }
}
