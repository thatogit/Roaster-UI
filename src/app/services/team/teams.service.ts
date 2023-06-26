import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roaster } from 'src/app/models/roaster.model';
import { Team } from 'src/app/models/team.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  baseUrl : string = environment.API_URL;
  constructor(private httCall : HttpClient) { }

  getAllTeam() : Observable<Team[]>
  {
    return this.httCall.get<Team[]>(this.baseUrl+'TeamAPI');
  }

  addTeam(addTeamRequest : Team): Observable<Team>
  {
    return this.httCall.post<Team>(this.baseUrl+'TeamAPI',addTeamRequest);
  }

  getTeam(id:number):Observable<Team>
  {
    return this.httCall.get<Team>(this.baseUrl+'TeamAPI/'+id);
  }

  updateTeam(id:number,updateTeam:Team):Observable<Team>
  {
    return this.httCall.put<Team>(this.baseUrl+'TeamAPI/'+id,updateTeam);
  }

  deleteTeam(id:number) : Observable<Team>
  {
    return this.httCall.delete<Team>(this.baseUrl + 'TeamAPI/'+id);
  }


}
