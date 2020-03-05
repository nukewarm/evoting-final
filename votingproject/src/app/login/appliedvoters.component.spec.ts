import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedvotersComponent } from './appliedvoters.component';

describe('AppliedvotersComponent', () => {
  let component: AppliedvotersComponent;
  let fixture: ComponentFixture<AppliedvotersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedvotersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedvotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
