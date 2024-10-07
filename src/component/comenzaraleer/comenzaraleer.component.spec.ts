import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComenzaraleerComponent } from './comenzaraleer.component';

describe('ComenzaraleerComponent', () => {
  let component: ComenzaraleerComponent;
  let fixture: ComponentFixture<ComenzaraleerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComenzaraleerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComenzaraleerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
