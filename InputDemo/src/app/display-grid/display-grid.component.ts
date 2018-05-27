import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-grid',
  templateUrl: './display-grid.component.html',
  styleUrls: ['./display-grid.component.css']
})
export class DisplayGridComponent implements OnInit {

  @Input()
  dataList: any[] = [];

  @Input()
  columnList: any[] = [];

  @Input()
  displayColumnList: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
