import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendedComponent } from './recommended.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecommendService } from '../service/recommend.service';
describe('RecommendedComponent', () => {
  let component: RecommendedComponent;
  let fixture: ComponentFixture<RecommendedComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedComponent ],
      imports:[HttpClientModule],
      providers:[RecommendService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

