import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoutingService } from '../service/routing.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule } from '@angular/material';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[HttpClientModule,RouterTestingModule,MatMenuModule],
      providers:[RoutingService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});