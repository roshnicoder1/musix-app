import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { RegisterService } from '../service/register.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('RegisterService', () => {
  let service: RegisterService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientModule],
      providers:[]
    });
    service = TestBed.inject(RegisterService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});