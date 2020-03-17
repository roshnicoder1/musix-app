import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarousalComponent } from './carousal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterService } from '../service/register.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('CarousalComponent', () => {
  let component: CarousalComponent;
  let fixture: ComponentFixture<CarousalComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalComponent ],
      imports:[HttpClientModule,RouterTestingModule],
      providers:[RegisterService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});