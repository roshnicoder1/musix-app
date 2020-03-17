import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogBoxComponent } from './dialog-box.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
describe('DialogBoxComponent', () => {
  let component: DialogBoxComponent;
  let fixture: ComponentFixture<DialogBoxComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBoxComponent ],
      imports:[HttpClientModule],
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});