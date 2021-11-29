import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitarbeiterComponent } from './mitarbeiter.component';

describe('MitarbeiterComponent', () => {
  let component: MitarbeiterComponent;
  let fixture: ComponentFixture<MitarbeiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitarbeiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitarbeiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
