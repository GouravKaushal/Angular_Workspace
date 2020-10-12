import { Component } from "@angular/core";
import { Employee } from './employee.model';
@Component({
    selector:'app-emp',
    templateUrl:'./employee.component.html',
   /*template:`<h2> Home Test</h2>
   {{getMessage()}} 
   {{10+25}}
   {{['ABC','xyz','123'] [0]}}
   {{ {personId:101,personName:'Gourav',personAge:24}.personId}}
   `*///string interpolation syntax
   // styleUrls:['./employee.component.css'],
   styles:[`h2{color : green}`]
})
export class EmployeeComponent{
    public  message:string='Gourav!!'
    constructor(){
        console.log('Inside Constructor')
    }
   
    public getMessage():string{
        return this.message;
    }

    employee1={
        employeeId:101,
        employeeName:'Gourav Kaushal',
        employeeSalary:23
    }
    employee2:Employee=new Employee(101,"Ram",2000);
    employees3:Employee[]=[
        {
            employeeId:105,
            employeeName:'ABC',
            employeeSalary:26
        },
        {
            employeeId:106,
            employeeName:'DEF',
            employeeSalary:27
        }
        ,{
            employeeId:107,
            employeeName:'XYZ',
            employeeSalary:28
        }
    ]
myFunction():void{
    console.log('Clicked..!!!')
}
}

