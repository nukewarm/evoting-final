import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotenowloginComponent } from './votenowlogin.component';

describe('VotenowloginComponent', () => {
  let component: VotenowloginComponent;
  let fixture: ComponentFixture<VotenowloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotenowloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotenowloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
