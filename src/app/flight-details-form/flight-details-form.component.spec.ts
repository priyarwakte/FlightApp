import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FlightDetailsFormComponent } from './flight-details-form.component';

describe('FlightDetailsFormComponent', () => {
  let component: FlightDetailsFormComponent;
  let fixture: ComponentFixture<FlightDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule,FlightDetailsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
