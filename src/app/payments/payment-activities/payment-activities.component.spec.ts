import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '@core/store/app.state';
import { PaymentActivitiesComponent } from './payment-activities.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PaymentActivitiesComponent', () => {
  let component: PaymentActivitiesComponent;
  let fixture: ComponentFixture<PaymentActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentActivitiesComponent],
      imports: [SharedModule, StoreModule.forRoot(reducers)],
      providers: [Store]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
