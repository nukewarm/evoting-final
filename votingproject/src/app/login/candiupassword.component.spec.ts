import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandiupasswordComponent } from './candiupassword.component';

describe('CandiupasswordComponent', () => {
  let component: CandiupasswordComponent;
  let fixture: ComponentFixture<CandiupasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandiupasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandiupasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
