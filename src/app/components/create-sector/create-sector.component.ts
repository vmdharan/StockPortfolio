import { Component, OnInit } from '@angular/core';
import { SectorService } from 'src/app/services/sector.service';
import { Sector } from '../../models/sector';

@Component({
  selector: 'create-sector',
  templateUrl: './create-sector.component.html',
  styleUrls: ['./create-sector.component.scss']
})
export class CreateSectorComponent implements OnInit {

  sectorName: string = "";
  sectorCode: string = "";
  sectorDesc: string = "";

  constructor(private sectorService: SectorService) { }

  ngOnInit() {
  }

  saveSector() {
    let newSector: Sector = new Sector();
    newSector.Name = this.sectorName;
    newSector.Code = this.sectorCode;
    newSector.Description = this.sectorDesc;

    this.sectorService.saveSector(newSector).subscribe(() => {});
  }
}
