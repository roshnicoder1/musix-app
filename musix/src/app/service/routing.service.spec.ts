import { TestBed } from '@angular/core/testing';
import { RoutingService } from './routing.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
describe('RoutingService', () => {
  let service: RoutingService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[RoutingService]
    });
    service = TestBed.inject(RoutingService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});