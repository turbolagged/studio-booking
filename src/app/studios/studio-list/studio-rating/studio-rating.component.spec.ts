import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioRatingComponent } from './studio-rating.component';

describe('StudioRatingComponent', () => {
  let component: StudioRatingComponent;
  let fixture: ComponentFixture<StudioRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudioRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
