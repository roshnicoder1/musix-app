import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumDetailComponent } from './album-detail.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
describe('AlbumDetailComponent', () => {
  let component: AlbumDetailComponent;
  let fixture: ComponentFixture<AlbumDetailComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumDetailComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});