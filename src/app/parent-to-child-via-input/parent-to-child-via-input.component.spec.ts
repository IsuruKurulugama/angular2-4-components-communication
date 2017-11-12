import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToChildViaInputComponent } from './parent-to-child-via-input.component';

describe('ParentToChildViaInputComponent', () => {
  let component: ParentToChildViaInputComponent;
  let fixture: ComponentFixture<ParentToChildViaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentToChildViaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentToChildViaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
