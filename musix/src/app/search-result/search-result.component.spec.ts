import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultComponent } from './search-result.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MusicService } from '../service/music.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultComponent ],
      imports:[HttpClientModule,RouterTestingModule],
      providers:[MusicService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});