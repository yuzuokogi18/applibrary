import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoficcionComponent } from './noficcion.component';

describe('NoficcionComponent', () => {
  let component: NoficcionComponent;
  let fixture: ComponentFixture<NoficcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoficcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoficcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
