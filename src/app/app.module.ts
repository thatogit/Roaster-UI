import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoasterComponent } from './components/roaster/roaster/roaster.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddTeamComponent } from './components/teams/add-team/add-team.component';
import { TeamComponent } from './components/teams/team/team.component';
import { EditRoasterComponent } from './components/roaster/edit-roaster/edit-roaster.component';
import { AddRoasterComponent } from './components/roaster/add-roaster/add-roaster.component';
import { EditTeamComponent } from './components/teams/edit-team/edit-team.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    RoasterComponent,
    AddRoasterComponent,
    EditRoasterComponent,
    AddTeamComponent,
    TeamComponent,
    EditTeamComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
