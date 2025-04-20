import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-by-place',
  templateUrl: './search-by-place.component.html',
  styleUrls: ['./search-by-place.component.scss']
})
export class SearchByPlaceComponent {

  placeFilterForm: FormGroup;
  @Output() studioFilterEvent = new EventEmitter<any>();

  constructor() {
    this.placeFilterForm = new FormGroup({
      filterQuery: new FormControl('', Validators.required)
    });
  }
  ngOnInit() {

    this.placeFilterForm.get('filterQuery')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(response => {
      this.studioFilterEvent.emit(response);
    })

  }

}
