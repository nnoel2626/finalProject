import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentdetailsComponent } from './equipmentdetails.component';

describe('EquipmentdetailsComponent', () => {
  let component: EquipmentdetailsComponent;
  let fixture: ComponentFixture<EquipmentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
