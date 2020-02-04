import { Component, OnInit } from '@angular/core';
import { SectorService } from '../../services/sector.service';

const ELEMENT_DATA: any = [];

@Component({
  selector: 'list-sectors',
  templateUrl: './list-sectors.component.html',
  styleUrls: ['./list-sectors.component.scss']
})
export class ListSectorsComponent implements OnInit {

  displayedColumns: string[] = [ "name", "code", "description" ];
  dataSource = ELEMENT_DATA;

  constructor(private sectorService: SectorService) { }

  ngOnInit() {
    this.sectorService.getSectors().subscribe(res => {
      if(res != null) {
        this.dataSource = res;
      }
    });
  }

}
