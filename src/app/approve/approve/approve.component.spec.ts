import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApproveComponent } from './approve.component';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '@core/store/app.state';

describe('ApproveComponent', () => {
  let component: ApproveComponent;
  let fixture: ComponentFixture<ApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveComponent ],
      imports: [StoreModule.forRoot(reducers)],
      providers: [Store]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
