import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferActivitiesComponent } from './transfer-activities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '@core/store/app.state';

describe('TransferActivitiesComponent', () => {
  let component: TransferActivitiesComponent;
  let fixture: ComponentFixture<TransferActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferActivitiesComponent ],
      imports: [SharedModule, StoreModule.forRoot(reducers)],
      providers: [Store]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
