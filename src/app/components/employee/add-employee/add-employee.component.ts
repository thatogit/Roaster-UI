import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employee/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{


  addEmployeeRequest : Employee= {
    employeeID:0,
    firstName:'',
    lastName: '',
    email:'',
    cellNumber:''
  };

  constructor(private employeeService : EmployeesService) {}

  ngOnInit(): void {

  }

  addEmployee()
  {
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe(
      {
        next : (employee) =>{
          console.log(employee);
        }
      }
    )
  }

}
