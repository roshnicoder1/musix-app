import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfavrecComponent } from './unfavrec.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('UnfavrecComponent', () => {
  let component: UnfavrecComponent;
  let fixture: ComponentFixture<UnfavrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfavrecComponent ],
      imports:[HttpClientModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfavrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
