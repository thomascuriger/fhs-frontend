import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKundeComponent } from './add-kunde.component';

describe('AddKundeComponent', () => {
  let component: AddKundeComponent;
  let fixture: ComponentFixture<AddKundeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKundeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKundeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
