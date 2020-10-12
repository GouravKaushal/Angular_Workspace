import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee.module';

@Injectable(
  /*{
  providedIn:'root' //providers[]: App.module.ts
}*/
)
export class EmployeeService {
  private url: string = "https://fakerestapi.azurewebsites.net/api/Users";
  private url2: string = "./assets/data/employee.json";
  private url3: string = "http://localhost:8080/api/v1/employees";

  constructor(private http: HttpClient) {
      console.log('Inside Service Constructor');
   }
  
  
  getAllEmployees() :Observable<any[]>{
    return this.http.get<any[]>(this.url3);
  }

  createEmployee(employeee:Employee){
    return this.http.post<Employee>(this.url3,employeee)
  }
  deleteEmployee(employeeId:number){
    return this.http.delete(this.url3+"/"+employeeId)
  }
}
