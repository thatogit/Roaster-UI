import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employee/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails : Employee ={
    employeeID:0,
    firstName:'',
    lastName: '',
    email:'',
    cellNumber:''
  }
  constructor(private route: ActivatedRoute, private employeeService : EmployeesService,private router : Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params) => {
        const id = params.get('id');

        
        if (Number(id)){
          //api call
          this.employeeService.getEmployee(Number(id))
          .subscribe({
            next : (response:any) =>{              
              this.employeeDetails = response.result
              console.log(toString())
              console.log(this.employeeDetails)
            }
          });
        }
      }
    })
  }

  updateEmployee()
  {
    this.employeeService.updateEmployee(Number(this.employeeDetails.employeeID),this.employeeDetails)
    .subscribe({
      next: (employee) =>{
        this.router.navigate(['Employee']);
        console.log(employee)
      }
    })
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee(Number(this.employeeDetails.employeeID))
    .subscribe({
      next : (response)=>
      {
        this.router.navigate(['Employee']);

      }
    })
  }
}
