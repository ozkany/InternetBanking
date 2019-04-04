import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferActivitiesComponent } from './transfer-activities.component';

describe('TransferActivitiesComponent', () => {
  let component: TransferActivitiesComponent;
  let fixture: ComponentFixture<TransferActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
