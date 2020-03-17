import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { McardtopComponent } from './mcardtop.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecommendService } from '../service/recommend.service';
describe('McardtopComponent', () => {
  let component: McardtopComponent;
  let fixture: ComponentFixture<McardtopComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McardtopComponent ],
      imports:[HttpClientModule],
      providers:[RecommendService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(McardtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});