import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopTracksComponent } from './top-tracks.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MusicService } from '../service/music.service';
describe('TopTracksComponent', () => {
  let component: TopTracksComponent;
  let fixture: ComponentFixture<TopTracksComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTracksComponent ],
      imports:[HttpClientModule],
      providers:[MusicService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TopTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});