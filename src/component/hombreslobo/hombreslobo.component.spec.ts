import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HombresloboComponent } from './hombreslobo.component';

describe('HombresloboComponent', () => {
  let component: HombresloboComponent;
  let fixture: ComponentFixture<HombresloboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HombresloboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HombresloboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
