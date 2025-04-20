import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioCardComponent } from './studio-card.component';

describe('StudioCardComponent', () => {
  let component: StudioCardComponent;
  let fixture: ComponentFixture<StudioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
