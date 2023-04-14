import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task11ParentComponent } from './task11-parent.component';

describe('Task11ParentComponent', () => {
  let component: Task11ParentComponent;
  let fixture: ComponentFixture<Task11ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task11ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task11ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
