import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaiableComponent } from './avaiable.component';

describe('AvaiableComponent', () => {
  let component: AvaiableComponent;
  let fixture: ComponentFixture<AvaiableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaiableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaiableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
