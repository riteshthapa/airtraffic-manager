import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AddAircraftComponent } from './add-aircraft/add-aircraft.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AircraftService } from './aircraft-service.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ViewAircraftsComponent } from './view-aircrafts/view-aircrafts.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAircraftComponent,
    HomeComponent,
    AboutComponent,
    ViewAircraftsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'add-aircraft' , component: AddAircraftComponent},
      { path: 'home' , component: HomeComponent},
      { path: 'about' , component: AboutComponent},
      { path: 'view-aircraft' , component: ViewAircraftsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [AircraftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
