import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '@core/store/app.state';
import { AccountGridComponent } from './account-grid.component';
import { MoneyPipe } from '../../pipes/money.pipe';
import { ResourcePipe } from '../../pipes/resource.pipe';

describe('AccountGridComponent', () => {
  let component: AccountGridComponent;
  let fixture: ComponentFixture<AccountGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountGridComponent, MoneyPipe, ResourcePipe],
      imports: [StoreModule.forRoot(reducers)],
      providers: [Store]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
