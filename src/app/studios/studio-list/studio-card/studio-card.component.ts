import { Component, Input } from '@angular/core';
import { Studio } from 'src/app/interface/studio';
import {MatDialog} from '@angular/material/dialog';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';


@Component({
  selector: 'app-studio-card',
  templateUrl: './studio-card.component.html',
  styleUrls: ['./studio-card.component.scss']
})
export class StudioCardComponent {
  @Input() studio : Studio | undefined;

  constructor(public dialog: MatDialog) {}

  openBookingDialogue() {
    const dialogRef = this.dialog.open(BookingDialogComponent, {
      data: this.studio
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    }); 
  }
}
