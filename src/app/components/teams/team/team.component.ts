import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamsService } from 'src/app/services/team/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams : Team [] = [] ;

  constructor(private teamService : TeamsService){}

  ngOnInit(): void {
    this.teamService.getAllTeam()
    .subscribe((team : any)=>
    {
      this.teams = team.result;
    });
  }

  

}
