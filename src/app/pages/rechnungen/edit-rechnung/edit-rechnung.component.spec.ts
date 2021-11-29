import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRechnungComponent } from './edit-rechnung.component';

describe('EditRechnungComponent', () => {
  let component: EditRechnungComponent;
  let fixture: ComponentFixture<EditRechnungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRechnungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRechnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
