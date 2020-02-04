import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

const ELEMENT_DATA: any = [];

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  displayedColumns: string[] = ["date", "code", "type", "quantity",
    "price", "value", "brokerage", "total"];
  dataSource = ELEMENT_DATA;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(res => {
      if(res != null) {
        this.dataSource = res;
      }
    })
  }

}
