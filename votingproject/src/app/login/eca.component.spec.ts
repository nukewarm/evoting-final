import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcaComponent } from './eca.component';

describe('EcaComponent', () => {
  let component: EcaComponent;
  let fixture: ComponentFixture<EcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
