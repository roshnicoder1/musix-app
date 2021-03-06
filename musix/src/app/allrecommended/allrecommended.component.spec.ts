import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrecommendedComponent } from './allrecommended.component';
import { HttpClientModule } from '@angular/common/http';

describe('AllrecommendedComponent', () => {
  let component: AllrecommendedComponent;
  let fixture: ComponentFixture<AllrecommendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllrecommendedComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
