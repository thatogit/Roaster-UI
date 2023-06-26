import { Component, OnInit } from '@angular/core';
import { Roaster } from 'src/app/models/roaster.model';
import { RoastersService } from 'src/app/services/roaster/roasters.service';

@Component({
  selector: 'app-add-roaster',
  templateUrl: './add-roaster.component.html',
  styleUrls: ['./add-roaster.component.css']
})
export class AddRoasterComponent implements OnInit {

  addRoasterRequest : Roaster= {
    firstLine:'',
    secondLine: '',
    supportDueDate:''

  };

  constructor(private roasterService : RoastersService) {}

  ngOnInit(): void {

  }

  addRoaster()
  {
    this.roasterService.addRoaster(this.addRoasterRequest)
    .subscribe(
      {
        next : (roaster) =>{
          console.log(roaster);
        }
      }
    )
  }

}
