import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatecvComponent } from './candidatecv.component';

describe('CandidatecvComponent', () => {
  let component: CandidatecvComponent;
  let fixture: ComponentFixture<CandidatecvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatecvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
