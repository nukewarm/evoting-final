import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterupasswordComponent } from './voterupassword.component';

describe('VoterupasswordComponent', () => {
  let component: VoterupasswordComponent;
  let fixture: ComponentFixture<VoterupasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterupasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterupasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
