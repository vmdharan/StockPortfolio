import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

const ELEMENT_DATA: any = [];

@Component({
  selector: 'list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.scss']
})
export class ListCompaniesComponent implements OnInit {

  displayedColumns: string[] = ["name", "code", "sector", "description"];
  dataSource = ELEMENT_DATA;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(res => {
      if(res != null) {
        this.dataSource = res;
      }
    });
  }

}
