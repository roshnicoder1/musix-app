import { TestBed } from '@angular/core/testing';
import { FavouriteService } from './favourite.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
describe('FavouriteService', () => {
  let service: FavouriteService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[]
    });
    service = TestBed.inject(FavouriteService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});