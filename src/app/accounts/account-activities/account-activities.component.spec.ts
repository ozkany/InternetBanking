import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountActivitiesComponent } from './account-activities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReceiptComponent } from '../receipt/receipt.component';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '@core/store/app.state';

describe('AccountActivitiesComponent', () => {
  let component: AccountActivitiesComponent;
  let fixture: ComponentFixture<AccountActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountActivitiesComponent, ReceiptComponent ],
      imports: [SharedModule, StoreModule.forRoot(reducers)],
      providers: [Store]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
