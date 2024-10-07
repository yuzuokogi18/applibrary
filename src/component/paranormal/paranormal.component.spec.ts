import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParanormalComponent } from './paranormal.component';

describe('ParanormalComponent', () => {
  let component: ParanormalComponent;
  let fixture: ComponentFixture<ParanormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParanormalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParanormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
