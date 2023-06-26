import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl : string = environment.API_URL;
  constructor(private httCall : HttpClient) { }
  

  getAllEmployees() : Observable<Employee[]>
  {
    return this.httCall.get<Employee[]>(this.baseUrl+'EmployeeAPI');
  }

  addEmployee(addEmployeeRequest : Employee): Observable<Employee>
  {
    return this.httCall.post<Employee>(this.baseUrl+'EmployeeAPI',addEmployeeRequest);
  }

  getEmployee(id:number):Observable<Employee>
  {
    return this.httCall.get<Employee>(this.baseUrl+'EmployeeAPI/Id?Id='+id);
  }

  updateEmployee(id:number,updateEmployee:Employee):Observable<Employee>
  {
    return this.httCall.put<Employee>(this.baseUrl+'EmployeeAPI/Id?Id='+id,updateEmployee);
  }

  deleteEmployee(id:number) : Observable<Employee>
  {
    return this.httCall.delete<Employee>(this.baseUrl + 'EmployeeAPI/Id?Id='+id);
  }

}
