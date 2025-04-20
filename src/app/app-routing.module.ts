import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudiosComponent } from './studios/studios.component';

const routes: Routes = [
  {
    path: '',
    component: StudiosComponent,
    pathMatch: 'full',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
