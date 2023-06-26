import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoasterComponent } from './components/roaster/roaster/roaster.component';
import { AddRoasterComponent } from './components/roaster/add-roaster/add-roaster.component';
import { EditRoasterComponent } from './components/roaster/edit-roaster/edit-roaster.component';
import { TeamComponent } from './components/teams/team/team.component';
import { AddTeamComponent } from './components/teams/add-team/add-team.component';
import { EditTeamComponent } from './components/teams/edit-team/edit-team.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';

const routes: Routes = [
  {
    path: '',
    component : RoasterComponent
  },
  {
    path: 'Roaster',
    component : RoasterComponent
  },
  {
    path: 'Roaster/add',
    component : AddRoasterComponent
  }
  ,
  {
    path: 'Roaster/edit/:id',
    component : EditRoasterComponent
  }
  ,
  {
    path: 'Team',
    component : TeamComponent
  }
  ,
  {
    path: 'Team/add',
    component : AddTeamComponent
  }
  ,
  {
    path: 'Team/edit/:id',
    component : EditTeamComponent
  }
  ,
  {
    path: 'Employee',
    component : EmployeeComponent
  }
  ,
  {
    path: 'Employee/add',
    component : AddEmployeeComponent
  }
  ,
  {
    path: 'Employee/edit/:id',
    component : EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
