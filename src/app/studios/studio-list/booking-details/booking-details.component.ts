import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent {
  constructor(public bookingDetailsRef: MatDialogRef<BookingDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public bookedStudio: any) { }
}
