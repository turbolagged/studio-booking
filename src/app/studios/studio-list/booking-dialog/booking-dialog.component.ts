import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Studio } from 'src/app/interface/studio';
import * as dayjs from 'dayjs';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent {
  studioBookingForm: FormGroup;
  bookingList: any[];
  today = new Date();

  constructor(public bookingDialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public studioData: Studio, private snackBar: MatSnackBar, public dialog: MatDialog) {
    this.bookingList = [];

    this.studioBookingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      slotStart: new FormControl('', Validators.required),
      slotEnd: new FormControl('', Validators.required),
      studioid: new FormControl(this.studioData.Id)
    });
  }

  get slotStartTime() {
    return this.studioBookingForm.get('slotStart')?.value;
  }
  get slotEndTime() {
    return this.studioBookingForm.get('slotEnd')?.value;
  }

  get date() {
    return this.studioBookingForm.get('date')?.value;
  }
  get bookingName() {
    return this.studioBookingForm.get('name')?.value;
  }
  get bookingEmail() {
    return this.studioBookingForm.get('email')?.value;
  }

  onSubmit() {
    if (this.studioBookingForm.invalid) {
      return;
    }
    const bookingDetails = {
      date: dayjs(this.date).format('YYYY-MM-DD'),
      start: this.slotStartTime,
      end: this.slotEndTime,
      studioId: this.studioData.Id,
      studioName: this.studioData.Name,
      name: this.bookingName,
      email: this.bookingEmail
    }

    if (this.isSlotClashing(bookingDetails)) {
      this.showAlert('Slot is already booked. Pick another time', 'close');
      return;
    }

    let finalArray: any[] = [];
    const bookingListArray = [];
    bookingListArray.push(bookingDetails);

    finalArray = [...bookingListArray, ...this.bookingList];
    localStorage.setItem('bookingList', JSON.stringify(finalArray))

    this.closeModal();
    this.openSuccessDialog(bookingDetails);
  }

  closeModal() {
    this.bookingDialogRef.close();
  }

  ngOnInit() {
    const existingBookings = localStorage.getItem('bookingList');
    this.bookingList = existingBookings ? [...JSON.parse(existingBookings)] : []

    console.log(this.bookingList);

  }

  isSlotClashing(requestSlot: any): boolean {
    const formattedDate = dayjs(requestSlot?.date).format('YYYY-MM-DD');
    const reqStart = dayjs(`${formattedDate} ${requestSlot?.start}`);
    const reqEnd = dayjs(`${formattedDate} ${requestSlot?.end}`);
  
    return this.bookingList.some((booking) => {
      if (booking.studioId !== requestSlot?.studioId) {
        return false
      };
  
      const existingStart = dayjs(`${booking.date} ${booking.start}`);
      const existingEnd = dayjs(`${booking.date} ${booking.end}`);
  
      const isBefore = !reqEnd.isAfter(existingStart);
      const isAfter = !reqStart.isBefore(existingEnd);
  
      return !(isBefore || isAfter);
    });
  }

  showAlert(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

  openSuccessDialog(bookingDetails: any) {
    this.dialog.open(BookingDetailsComponent, {
      data: bookingDetails
    });
  }
}
