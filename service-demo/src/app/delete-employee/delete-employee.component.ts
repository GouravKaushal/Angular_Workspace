import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.module';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css'],
  providers:[EmployeeService]
})
export class DeleteEmployeeComponent {
  private empService: EmployeeService
  constructor(emp: EmployeeService) {
    this.empService = emp;
  }

  employeeId:number=0;

  onDeleteButton() {
    this.empService.deleteEmployee(this.employeeId).subscribe(
      data=>{alert('Deleted Successfully..!!!');}
    )
  }
}
