import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenvotingpassComponent } from './genvotingpass.component';

describe('GenvotingpassComponent', () => {
  let component: GenvotingpassComponent;
  let fixture: ComponentFixture<GenvotingpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenvotingpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenvotingpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
