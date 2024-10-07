import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminiComponent } from './admini.component';

describe('AdminiComponent', () => {
  let component: AdminiComponent;
  let fixture: ComponentFixture<AdminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
