import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '@core/store/app.state';
import { IntermRecordsComponent } from './interm-records.component';

describe('IntermRecordsComponent', () => {
  let component: IntermRecordsComponent;
  let fixture: ComponentFixture<IntermRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermRecordsComponent ],
      imports: [StoreModule.forRoot(reducers)],
      providers: [Store]
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
