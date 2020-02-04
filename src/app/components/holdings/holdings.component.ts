import { Component, OnInit } from '@angular/core';
import { HoldingService } from 'src/app/services/holding.service';

const ELEMENT_DATA: any = [];

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.scss']
})
export class HoldingsComponent implements OnInit {

  displayedColumns: string[] = ["code", "quantity", "purchase_price",
    "current_price", "value", "change", "change_percent"];
  dataSource = ELEMENT_DATA;

  constructor(private holdingService: HoldingService) { }

  ngOnInit() {
    this.loadHoldings();
  }

  loadHoldings() {
    this.holdingService.getHoldings().subscribe(res => {
      if(res != null) {
        this.dataSource = res;
      }
    })
  }
}
