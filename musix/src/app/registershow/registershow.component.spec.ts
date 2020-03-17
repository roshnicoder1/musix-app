import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistershowComponent } from './registershow.component';
import { RegisterService } from '../service/register.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoutingService } from '../service/routing.service';
describe('RegistershowComponent', () => {
  let component: RegistershowComponent;
  let fixture: ComponentFixture<RegistershowComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistershowComponent ],
      imports:[HttpClientModule],
      providers:[RegisterService,RoutingService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(RegistershowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});