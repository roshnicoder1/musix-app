import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterService } from '../service/register.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog, MatDialogModule } from '@angular/material';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientModule,RouterTestingModule,MatDialogModule],
      providers:[RegisterService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});