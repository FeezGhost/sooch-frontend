import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyDashboardComponent } from './main-body-dashboard.component';

describe('MainBodyDashboardComponent', () => {
  let component: MainBodyDashboardComponent;
  let fixture: ComponentFixture<MainBodyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBodyDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
