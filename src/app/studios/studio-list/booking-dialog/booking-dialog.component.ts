import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent {

  studioBookingForm!: FormGroup;
  bookingList: any[];


  constructor(public bookingDialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) {

    this.studioBookingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      slotStart: new FormControl('', Validators.required),
      slotEnd: new FormControl('', Validators.required)
    });
  }

  get slotStartTime() {
    return this.studioBookingForm.get('slotStart')?.value;
  }
  get slotEndTime() {
    return this.studioBookingForm.get('slotEnd')?.value;
  }

  get slotDate() {
    return this.studioBookingForm.get('slotEnd')?.value;

  }

  onSubmit() {

    if (this.studioBookingForm.invalid) {
      return;
    }



    const targetSlotTime = {
      start: 
    }



    let finalArr: any[] = [];
    const bookingListArray = [];
    bookingListArray.push(this.studioBookingForm.value);

    finalArr = [...bookingListArray, ...this.bookingList]

    localStorage.setItem('bookingList', JSON.stringify(finalArr))

    this.closeModal()
    this.successAlert();

  }
  closeModal() {
    this.bookingDialogRef.close()
  }

  successAlert() {
    this.snackBar.open('Your booking is confirmed!', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  ngOnInit() {
    const existingBookings = localStorage.getItem('bookingList');
    this.bookingList = existingBookings ? [...JSON.parse(existingBookings)] : []
  }

  clashingSlot(time: string, slotStart: string, slotEnd: string): boolean {
    return time >= slotStart && time <= slotEnd;
  }


  slotsOverlap(startA: string, endA: string, startB: string, endB: string): boolean {
    return startA < endB && startB < endA;
  }


  doesSlotClash( newSlot: { start: string; end: string }, existingSlots: { start: string; end: string }[]): boolean {
    return existingSlots.some(slot =>
      this.slotsOverlap(newSlot.start, newSlot.end, slot.start, slot.end)
    );
  }
}
