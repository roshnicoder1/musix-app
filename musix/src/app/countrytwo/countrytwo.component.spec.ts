import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountrytwoComponent } from './countrytwo.component';
import { MusicService } from '../service/music.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
describe('CountrytwoComponent', () => {
  let component: CountrytwoComponent;
  let fixture: ComponentFixture<CountrytwoComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrytwoComponent ],
      imports:[HttpClientModule],
      providers:[MusicService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CountrytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});