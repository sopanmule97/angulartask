import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tast4Component } from './tast4.component';

describe('Tast4Component', () => {
  let component: Tast4Component;
  let fixture: ComponentFixture<Tast4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tast4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tast4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
