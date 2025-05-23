import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioListComponent } from './studio-list/studio-list.component';
import { StudioCardComponent } from './studio-list/studio-card/studio-card.component';
import { StudiosComponent } from './studios.component';
import {MaterialModule} from 'src/app/material.module';
import { BookingDialogComponent } from './studio-list/booking-dialog/booking-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchByPlaceComponent } from './search-by-place/search-by-place.component';
import { StudioRatingComponent } from './studio-list/studio-rating/studio-rating.component';
import { BookingDetailsComponent } from './studio-list/booking-details/booking-details.component';
import { BookingListComponent } from './booking-list/booking-list.component';

@NgModule({
  declarations: [
    StudioListComponent,
    StudioCardComponent,
    StudiosComponent,
    BookingDialogComponent,
    SearchByPlaceComponent,
    StudioRatingComponent,
    BookingDetailsComponent,
    BookingListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class StudiosModule { }
