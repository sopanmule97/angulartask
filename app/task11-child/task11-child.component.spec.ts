import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task11ChildComponent } from './task11-child.component';

describe('Task11ChildComponent', () => {
  let component: Task11ChildComponent;
  let fixture: ComponentFixture<Task11ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task11ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task11ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
