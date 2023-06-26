import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employee/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  employees : Employee [] = [] ;

  constructor(private employeeService : EmployeesService) {}
  ngOnInit(): void {
    this.employeeService.getAllEmployees()
    .subscribe((employee:any) =>
    {
          this.employees= employee.result;
          console.log(this.employees);
    });
  }
}
