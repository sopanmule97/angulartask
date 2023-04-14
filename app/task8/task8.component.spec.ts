import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task8Component } from './task8.component';

describe('Task8Component', () => {
  let component: Task8Component;
  let fixture: ComponentFixture<Task8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
