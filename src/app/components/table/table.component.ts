import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  info: string;
  details: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { info: 'CreatedBy',  details: 'IGS BIM Solutions'},
  {info: 'Manufacturer', details: 'Radiant Australia'},
  { info: 'Depth', details: '90'},
  {info: 'Height', details: '32'},
  { info: 'Width', details: '650'},
  { info: 'URLProductSpecific', details: 'https://www.radiantheating.com.au/'},
  { info: 'Model', details: 'SBRTR-650 | BRU-SBRTR-650 | BSBRTR-650 |'},
  { info: 'ModifiedIssue', details: 'O20210929.00'},
  {info: 'Types', details: '8'},
  
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    displayedColumns: string[] = [ 'info', 'details'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

 

}
