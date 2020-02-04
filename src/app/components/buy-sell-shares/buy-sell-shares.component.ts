import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-buy-sell-shares',
  templateUrl: './buy-sell-shares.component.html',
  styleUrls: ['./buy-sell-shares.component.scss']
})
export class BuySellSharesComponent implements OnInit {

  companyCode: string = "";
  transactionDate: string = "";
  transactionType: string = "";
  quantity: number = 0;
  price: number = 0.00;
  value: number = 0.00;
  brokerage: number = 0.00;
  total: number = 0.00;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  saveTransaction() {
    let transaction = new Transaction();
    transaction.Code = this.companyCode;
    transaction.Date = this.transactionDate;
    transaction.BuyOrSell = this.transactionType;
    transaction.Quantity = this.quantity;
    transaction.Price = this.price;
    transaction.Value = this.value;
    transaction.Brokerage = this.brokerage;
    transaction.Total = this.total;

    this.transactionService.saveTransaction(transaction).subscribe(() => {});
  }
}
