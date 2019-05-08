import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssetsComponent } from './assets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MiscModule } from 'src/app/misc/misc.module';
import { GooglePieChartComponent } from 'src/app/misc/google-charts/google-pie-chart/google-pie-chart.component';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '@core/store/app.state';

describe('AssetsComponent', () => {
  let component: AssetsComponent;
  let fixture: ComponentFixture<AssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsComponent, GooglePieChartComponent ],
      imports: [SharedModule, MiscModule, StoreModule.forRoot(reducers)],
      providers: [Store]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
