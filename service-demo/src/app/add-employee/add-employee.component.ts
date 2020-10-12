import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.module';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers:[EmployeeService]
})
export class AddEmployeeComponent {

  private empService: EmployeeService
  constructor(emp: EmployeeService) {
    this.empService = emp;
  }

  employee:Employee=new Employee(0,'test',10);

  onSubmit() {
    console.log('submit called...!!!');
    this.empService.createEmployee(this.employee).subscribe(
      data=>{alert('Employee inserted successfully..!!!');}
    )
  }

}
