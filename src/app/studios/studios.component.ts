import { Component } from '@angular/core';
import { StudioListService } from '../services/studio-list.service';
import { StudioEntity } from '../interface/studio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.scss']
})
export class StudiosComponent {
  constructor(private studioListService: StudioListService, private router: Router) {}
  studioList!: StudioEntity;
  ngOnInit() {
    this.initFunction();
  }

  initFunction() {
    this.studioList = this.studioListService.studiosList();
    console.log(this.studioList)
  }

  updateStudioList($event: any) {
    if (!$event) {
      this.initFunction();
      return;
    }
    this.studioList = this.filteredStuioList($event);
  }

  filteredStuioList(query: string) {
    const studioList: StudioEntity = {
      Studios: this.studioList.Studios.filter((studio) => studio.Location.Area.toLowerCase().includes(query.toLowerCase()) || 
      studio.Location.City.toLowerCase().includes(query.toLowerCase()))
    };
    return studioList;
  }

  goToBookingList() {
    this.router.navigate(['/booking-list']);
  }
}
 