import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../aircraft-service.service';
import { Aircraft } from '../aircraft';

@Component({
  selector: 'app-view-aircrafts',
  templateUrl: './view-aircrafts.component.html',
  styleUrls: ['./view-aircrafts.component.css']
})
export class ViewAircraftsComponent implements OnInit {


  // aircraftData = Aircraft[];

  aircraftData: Aircraft[] = new Array<Aircraft>()
 
  constructor(private aircraftService: AircraftService) {}
 
  ngOnInit() {
    this.aircraftService.findAll().subscribe(data => {
      this.aircraftData = data;
      console.log(this.aircraftData);
    });
  }

  deleteAircraft() {
    this.aircraftService.deleteAircraft();
    this.ngOnInit();
    console.log("delete works!");
  }
}



//   public aircraftData = [];
//   constructor(private myservice: MyserviceService) {}

//   ngOnInit() {
//     this.myservice.getData().subscribe((data) => {
//        this.aircraftData = Array.from(Object.keys(data), k=>data[k]);
//        console.log(this.aircraftData);
//     });
//   }

// }
