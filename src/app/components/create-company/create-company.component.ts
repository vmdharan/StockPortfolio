import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company';
import { SectorService } from 'src/app/services/sector.service';
import { Sector } from 'src/app/models/sector';

@Component({
  selector: 'create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  companyName: string = "";
  companyCode: string = "";
  companyDesc: string = "";
  companySector: string = "";

  listOfSectors: Sector[] = [];

  constructor(private companyService: CompanyService,
    private sectorService: SectorService) { }

  ngOnInit() {
    this.loadSectors();
  }

  saveCompany() {
    let newCompany: Company = new Company();
    newCompany.Name = this.companyName;
    newCompany.Code = this.companyCode;
    newCompany.Sector = this.companySector;
    newCompany.Description = this.companyDesc;

    this.companyService.saveCompany(newCompany).subscribe(() => { });
  }

  loadSectors() {
    this.sectorService.getSectors().subscribe(res => {
      if(res != null) {
        this.listOfSectors = res;
      }
    })
  }
}
