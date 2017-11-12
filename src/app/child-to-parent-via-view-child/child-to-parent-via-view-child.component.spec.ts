import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentViaViewChildComponent } from './child-to-parent-via-view-child.component';

describe('ChildToParentViaViewChildComponent', () => {
  let component: ChildToParentViaViewChildComponent;
  let fixture: ComponentFixture<ChildToParentViaViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildToParentViaViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParentViaViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
