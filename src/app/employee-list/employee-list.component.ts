import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: IEmployee[] = [];
  emp: IEmployee[] = [];
  id: number;
  errorMsg: string;
  showDataFlag: boolean = false;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => { this.employees = data });
      console.log(this.employees);
  }


  getData(idValue: number) {
    this._employeeService.getEmployeeById(idValue)
      .subscribe(data => this.emp = data,
        error => this.errorMsg = error);
    if (this.errorMsg == null || this.errorMsg == '') {
      setTimeout(() => {
        if (this.errorMsg == null || this.errorMsg == '') { this.showDataFlag = true; }
        else { this.showDataFlag = false; }
      }, 1000);
      // this.showDataFlag=true;
      console.log(this.showDataFlag);
    }
    console.log(this.emp);
  }
}
