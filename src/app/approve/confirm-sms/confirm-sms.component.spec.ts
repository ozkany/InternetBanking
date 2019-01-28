import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSmsComponent } from './confirm-sms.component';

describe('ConfirmSmsComponent', () => {
  let component: ConfirmSmsComponent;
  let fixture: ComponentFixture<ConfirmSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
