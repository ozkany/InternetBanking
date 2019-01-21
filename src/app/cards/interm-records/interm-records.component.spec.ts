import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermRecordsComponent } from './interm-records.component';

describe('IntermRecordsComponent', () => {
  let component: IntermRecordsComponent;
  let fixture: ComponentFixture<IntermRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
