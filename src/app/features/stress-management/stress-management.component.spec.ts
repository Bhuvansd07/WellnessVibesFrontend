import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressManagementComponent } from './stress-management.component';

describe('StressManagementComponent', () => {
  let component: StressManagementComponent;
  let fixture: ComponentFixture<StressManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StressManagementComponent]
    });
    fixture = TestBed.createComponent(StressManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
