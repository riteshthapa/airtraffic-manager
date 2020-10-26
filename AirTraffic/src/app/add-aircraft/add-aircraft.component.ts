import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AircraftService } from '../aircraft-service.service';
import { Aircraft } from '../aircraft';

@Component({
  selector: 'app-add-aircraft',
  templateUrl: './add-aircraft.component.html',
  styleUrls: ['./add-aircraft.component.css']
})
export class AddAircraftComponent {

aircraft: Aircraft;

 constructor(
  private route: ActivatedRoute, 
    private router: Router, 
      private aircraftService: AircraftService) {
  this.aircraft = new Aircraft();
}
  
public aircraftData = [];
  
ngOnInit() {
  this.aircraftService.findAll().subscribe(data => {
    this.aircraftData = data;
    console.log(this.aircraftData);
  });
}

  addData() {
    this.aircraftService.addAircraft(this.aircraft)
      .subscribe(data => {
        console.log(data)
        this.ngOnInit();
      })      
  }
}
