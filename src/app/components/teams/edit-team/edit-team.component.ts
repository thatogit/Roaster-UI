import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/models/team.model';
import { TeamsService } from 'src/app/services/team/teams.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  teamDetails : Team =
  {
    id : 0,
    employeeID : '',
    teamName : '',
    teamLeader : ''
  };

  constructor(private route : ActivatedRoute, private teamService: TeamsService, private router : Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
        next : (params) => {
          const id = params.get('id');

          if(Number(id)){
            this.teamService.getTeam(Number(id))
            .subscribe({
              next : (response:any) =>{
                this.teamDetails = response.result
                console.log(toString())
                console.log(this.teamDetails)
              }
            })
          }
        }
      });
  }

  updateTeam(){
    this.teamService.updateTeam(Number(this.teamDetails.id),this.teamDetails)
    .subscribe({
      next : (roaster) =>
      {
        this.router.navigate(['Team']);
      }
    })
  }

  deleteTeam(){
    this.teamService.deleteTeam(Number(this.teamDetails.id))
    .subscribe({
      next : (response) =>
      {
        this.router.navigate(['Team']);
      }
    })
  }

}
