import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarlibrosComponent } from './visualizarlibros.component';

describe('VisualizarlibrosComponent', () => {
  let component: VisualizarlibrosComponent;
  let fixture: ComponentFixture<VisualizarlibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarlibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarlibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
