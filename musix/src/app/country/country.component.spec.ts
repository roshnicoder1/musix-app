import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryComponent } from './country.component';
import { MusicService } from '../service/music.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryComponent ],
      imports:[HttpClientModule],
      providers:[MusicService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});