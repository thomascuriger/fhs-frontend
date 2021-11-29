import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnungenComponent } from './rechnungen.component';

describe('RechnungenComponent', () => {
  let component: RechnungenComponent;
  let fixture: ComponentFixture<RechnungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechnungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechnungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
