import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aircraft } from '../app/aircraft';
import { Observable } from 'rxjs';
 
@Injectable()
export class AircraftService {
 
  private aircraftUrl: string;
 
  constructor(private http: HttpClient) {
    this.aircraftUrl = 'http://localhost:8080/service/crafts';
  }
 
  public findAll(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(this.aircraftUrl);
  }
 
  public addAircraft(aircraft: Aircraft) {
    return this.http.post<Aircraft>(this.aircraftUrl, aircraft);
  }

  public deleteAircraft() {
      return this.http.delete(this.aircraftUrl).subscribe(data => {
        console.log(data);
      });
    }
}