import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamsService } from 'src/app/services/team/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  addTeamRequest : Team =
  {
    id : 0,
    employeeID : '',
    teamName : '',
    teamLeader : ''
  };

  constructor(private teamService : TeamsService){}

  ngOnInit(): void {

  }

  addTeam(){
    this.teamService.addTeam(this.addTeamRequest)
    .subscribe(
      {
        next : (team)=>{
          console.log(team);
        }
      }
    )
  }

}
