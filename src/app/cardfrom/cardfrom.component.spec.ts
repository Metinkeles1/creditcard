import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardfromComponent } from './cardfrom.component';

describe('CardfromComponent', () => {
  let component: CardfromComponent;
  let fixture: ComponentFixture<CardfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardfromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
