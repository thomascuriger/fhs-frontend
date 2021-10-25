import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimesComponent } from './view-times.component';

describe('ViewTimesComponent', () => {
  let component: ViewTimesComponent;
  let fixture: ComponentFixture<ViewTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
