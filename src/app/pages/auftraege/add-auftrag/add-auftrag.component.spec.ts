import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuftragComponent } from './add-auftrag.component';

describe('AddAuftragComponent', () => {
  let component: AddAuftragComponent;
  let fixture: ComponentFixture<AddAuftragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAuftragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuftragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
