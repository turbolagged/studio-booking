import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByPlaceComponent } from './search-by-place.component';

describe('SearchByPlaceComponent', () => {
  let component: SearchByPlaceComponent;
  let fixture: ComponentFixture<SearchByPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
