import { Component, OnInit } from '@angular/core';
import { Roaster } from 'src/app/models/roaster.model';
import { RoastersService } from 'src/app/services/roaster/roasters.service';

@Component({
  selector: 'app-roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.css']
})
export class RoasterComponent implements OnInit{

  roasters : Roaster [] = [] ;

  constructor(private roasterService : RoastersService) {}
  ngOnInit(): void {
    this.roasterService.getAllRoasters()
    .subscribe((roaster:any) =>
    {
          this.roasters= roaster.result;
    });
  }


}
