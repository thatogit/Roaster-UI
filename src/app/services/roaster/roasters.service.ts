import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';
import { Roaster } from 'src/app/models/roaster.model';

@Injectable({
  providedIn: 'root'
})
export class RoastersService {

  baseUrl : string = environment.API_URL;

  constructor(private httpCall : HttpClient ) { }

  getAllRoasters() : Observable<Roaster[]>
  {
    return this.httpCall.get<Roaster[]>(this.baseUrl+'RoasterAPI')
  }

  addRoaster(addRoasterRequest : Roaster) : Observable<Roaster>
  {
    
    return this.httpCall.post<Roaster>(this.baseUrl+'RoasterAPI',addRoasterRequest)
  }

  getRoaster(id:number):Observable<Roaster>
  {
    return this.httpCall.get<Roaster>(this.baseUrl + 'RoasterAPI/'+id);
  }

  updateRoaster(id:number,updateRoaster:Roaster):Observable<Roaster>
  {
    return this.httpCall.put<Roaster>(this.baseUrl + 'RoasterAPI/'+id,updateRoaster);
  }

  deleteRoaster(id:number) : Observable<Roaster>
  {
    return this.httpCall.delete<Roaster>(this.baseUrl + 'RoasterAPI/'+id);
  }




}
