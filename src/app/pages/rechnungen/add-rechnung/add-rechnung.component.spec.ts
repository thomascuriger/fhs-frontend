import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRechnungComponent } from './add-rechnung.component';

describe('AddRechnungComponent', () => {
  let component: AddRechnungComponent;
  let fixture: ComponentFixture<AddRechnungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRechnungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRechnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
