import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmSmsComponent } from './confirm-sms.component';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '@core/store/app.state';

describe('ConfirmSmsComponent', () => {
  let component: ConfirmSmsComponent;
  let fixture: ComponentFixture<ConfirmSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmSmsComponent ],
      imports: [FormsModule, ReactiveFormsModule, StoreModule.forRoot(reducers)],
      providers: [Store]
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
