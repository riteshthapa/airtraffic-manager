import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAircraftsComponent } from './view-aircrafts.component';

describe('ViewAircraftsComponent', () => {
  let component: ViewAircraftsComponent;
  let fixture: ComponentFixture<ViewAircraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAircraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAircraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
