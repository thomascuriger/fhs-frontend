import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimesComponent } from './add-times.component';

describe('AddTimesComponent', () => {
  let component: AddTimesComponent;
  let fixture: ComponentFixture<AddTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
