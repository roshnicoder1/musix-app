import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouriteComponent } from './favourite.component';
import { RoutingService } from '../service/routing.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
describe('FavouriteComponent', () => {
  let component: FavouriteComponent;
  let fixture: ComponentFixture<FavouriteComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteComponent ],
      imports:[HttpClientModule],
      providers:[RoutingService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});