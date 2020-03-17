import { TestBed } from '@angular/core/testing';
import { RecommendService } from './recommend.service';
import {  HttpClientModule } from '@angular/common/http';
describe('RecommendService', () => {
  let service: RecommendService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[]
    });
    service = TestBed.inject(RecommendService);
  });
  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});