export class Employee{
  /*  constructor( employeeId:number, employeeName:string, employeeSalary:number){
        this.employeeId=employeeId;
        this.employeeName=employeeName;
        this.employeeSalary=employeeSalary;
    }
    employeeId:number;
    employeeName:string;
    employeeSalary:number;
  */

 constructor( public employeeId:number, 
    public employeeName:string,
     public employeeSalary?:number){
         
     }
}