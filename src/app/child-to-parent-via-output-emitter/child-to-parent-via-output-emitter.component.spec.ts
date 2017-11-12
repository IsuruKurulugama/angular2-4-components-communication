import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentViaOutputEmitterComponent } from './child-to-parent-via-output-emitter.component';

describe('ChildToParentViaOutputEmitterComponent', () => {
  let component: ChildToParentViaOutputEmitterComponent;
  let fixture: ComponentFixture<ChildToParentViaOutputEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildToParentViaOutputEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParentViaOutputEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
