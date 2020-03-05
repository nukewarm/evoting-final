import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnablevotingComponent } from './enablevoting.component';

describe('EnablevotingComponent', () => {
  let component: EnablevotingComponent;
  let fixture: ComponentFixture<EnablevotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnablevotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnablevotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
