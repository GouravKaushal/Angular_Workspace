import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: '[app-employee]',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  private empService: EmployeeService
  employees: any[];
  constructor(emp: EmployeeService) {
    console.log('Inside cons');
    this.empService = emp;
  }
  ngOnInit() {
    console.log('Inside Oninit');
    this.empService.getAllEmployees().subscribe(
      data => this.employees = data);
  }



}
