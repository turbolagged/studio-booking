import { Component } from '@angular/core';
import { StudioListService } from '../services/studio-list.service';
import { StudioEntity } from '../types/studio';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.scss']
})
export class StudiosComponent {

  constructor(private studioListService: StudioListService) {}
  // studioList: { Studios: { Id: number; Name: string; Type: string; Location: { City: string; Area: string; Address: string; Coordinates: { Latitude: number; Longitude: number; }; }; Contact: { Phone: string; Email: string; }; Amenities: string[]; Description: string; PricePerHour: number; Currency: string; Availability: { Open: string; Close: string; }; Rating: number; Images: string[]; }[]; } | undefined

  studioList!: StudioEntity;
  ngOnInit() {
    this.studioList = this.studioListService.studiosList();
    console.log(this.studioList)
  }

}
