import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  @Input() bgColor: string = "#d2d2d2";
  @Input() score: number = 0;
  @Input() info: string = "";

  constructor() { }

  ngOnInit() {
  }

}
