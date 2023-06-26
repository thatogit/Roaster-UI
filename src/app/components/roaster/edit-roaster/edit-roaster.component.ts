import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Roaster } from 'src/app/models/roaster.model';
import { RoastersService } from 'src/app/services/roaster/roasters.service';

@Component({
  selector: 'app-edit-roaster',
  templateUrl: './edit-roaster.component.html',
  styleUrls: ['./edit-roaster.component.css']
})
export class EditRoasterComponent implements OnInit {

  roasterDetails : Roaster ={
    id:0,
    firstLine:'',
    secondLine: '',
    supportDueDate:''
  }
  constructor(private route: ActivatedRoute, private roasterService : RoastersService,private router : Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params) => {
        const id = params.get('id');

        
        if (Number(id)){
          //api call
          this.roasterService.getRoaster(Number(id))
          .subscribe({
            next : (response:any) =>{              
              this.roasterDetails = response.result
              console.log(toString())
              console.log(this.roasterDetails)
            }
          });
        }
      }
    })
  }

  updateRoaster()
  {
    this.roasterService.updateRoaster(Number(this.roasterDetails.id),this.roasterDetails)
    .subscribe({
      next: (roaster) =>{
        this.router.navigate(['Roaster']);
      }
    })
  }

  deleteRoaster(){
    this.roasterService.deleteRoaster(Number(this.roasterDetails.id))
    .subscribe({
      next : (response)=>
      {
        this.router.navigate(['Roaster']);

      }
    })
  }

}
