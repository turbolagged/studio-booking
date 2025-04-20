import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent {
  bookingList: any[];
  
  constructor() {
    this.bookingList = [];
  }

  ngOnInit() {
    const existingBookings = localStorage.getItem('bookingList');
    this.bookingList = existingBookings ? [...JSON.parse(existingBookings)] : []

    console.log(this.bookingList);
  }
}
