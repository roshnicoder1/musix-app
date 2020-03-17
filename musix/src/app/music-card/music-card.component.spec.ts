import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicCardComponent } from './music-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecommendService } from '../service/recommend.service';
describe('MusicCardComponent', () => {
  let component: MusicCardComponent;
  let fixture: ComponentFixture<MusicCardComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicCardComponent ],
      imports:[HttpClientModule],
      providers:[RecommendService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MusicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});