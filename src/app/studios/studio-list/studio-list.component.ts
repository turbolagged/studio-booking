import { Component, Input } from '@angular/core';
import { StudioEntity, Studio } from 'src/app/types/studio';

@Component({
  selector: 'app-studio-list',
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.scss']
})
export class StudioListComponent {
  @Input() studios: any;

  constructor() {
    this.studios = [];
  }
}
