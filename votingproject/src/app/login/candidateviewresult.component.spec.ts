import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateviewresultComponent } from './candidateviewresult.component';

describe('CandidateviewresultComponent', () => {
  let component: CandidateviewresultComponent;
  let fixture: ComponentFixture<CandidateviewresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateviewresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateviewresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
