import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotebuttonsComponent } from './votebuttons.component';

describe('VotebuttonsComponent', () => {
  let component: VotebuttonsComponent;
  let fixture: ComponentFixture<VotebuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotebuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotebuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
