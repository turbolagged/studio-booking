import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioListComponent } from './studio-list/studio-list.component';
import { StudioCardComponent } from './studio-list/studio-card/studio-card.component';
import { StudiosComponent } from './studios.component';

import {MaterialModule} from 'src/app/material.module';
import { BookingDialogComponent } from './studio-list/booking-dialog/booking-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudioListComponent,
    StudioCardComponent,
    StudiosComponent,
    BookingDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class StudiosModule { }
