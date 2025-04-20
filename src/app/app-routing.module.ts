import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudiosComponent } from './studios/studios.component';
import { BookingListComponent } from './studios/booking-list/booking-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudiosComponent,
    pathMatch: 'full',
  },
  {
    path: 'booking-list',
    component: BookingListComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
