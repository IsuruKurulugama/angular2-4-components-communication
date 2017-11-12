import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicateViaDataServiceComponent } from './communicate-via-data-service.component';

describe('CommunicateViaDataServiceComponent', () => {
  let component: CommunicateViaDataServiceComponent;
  let fixture: ComponentFixture<CommunicateViaDataServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicateViaDataServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicateViaDataServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
