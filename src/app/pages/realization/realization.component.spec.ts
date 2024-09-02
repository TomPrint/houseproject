import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationComponent } from './realization.component';

describe('RealizationComponent', () => {
  let component: RealizationComponent;
  let fixture: ComponentFixture<RealizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
