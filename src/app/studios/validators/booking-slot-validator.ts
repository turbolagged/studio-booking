import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as dayjs from 'dayjs';

export function bookingSlotValidator(bookingList: any[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const requestSlot = control.value;
    if (!requestSlot) return null;

    const formattedDate = dayjs(requestSlot?.date).format('YYYY-MM-DD');
    const reqStart = dayjs(`${formattedDate} ${requestSlot?.start}`);
    const reqEnd = dayjs(`${formattedDate} ${requestSlot?.end}`);

    const isClashing = bookingList.some((booking) => {
      if (booking.studioId !== requestSlot?.studioId) return false;

      const existingStart = dayjs(`${booking.date} ${booking.start}`);
      const existingEnd = dayjs(`${booking.date} ${booking.end}`);

      const isBefore = reqEnd.isBefore(existingStart);
      const isAfter = reqStart.isAfter(existingEnd);

      return !(isBefore || isAfter);
    });

    return isClashing ? { slotClash: true } : null;
  };
}