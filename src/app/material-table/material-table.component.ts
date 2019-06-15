import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../periodic-element';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [];  
  displayedColumns: string[] = ['bussName','discription','contact','email'];
  dataSource:MatTableDataSource<PeriodicElement>;
  bussName:string='';
  discription:string='';
  contact:string='';
  email:string='';
  constructor() { }

  ngOnInit() {
  }

}
