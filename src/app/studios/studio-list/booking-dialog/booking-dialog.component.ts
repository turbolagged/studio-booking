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


  constructor(public bookingDialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) {
    this.studioBookingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required)
    });
  }

  onSubmit() {

    if(this.studioBookingForm.invalid) {
      return;
    }




    let finalArr: any[] = [];
    const bookingListArray = [];
    bookingListArray.push(this.studioBookingForm.value);
    const existingBookingList = localStorage.getItem('bookingList')

    if (existingBookingList) {
      finalArr = [...bookingListArray, ...JSON.parse(existingBookingList)]
    }

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
}
