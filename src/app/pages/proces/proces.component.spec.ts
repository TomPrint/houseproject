import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesComponent } from './proces.component';

describe('ProcesComponent', () => {
  let component: ProcesComponent;
  let fixture: ComponentFixture<ProcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
