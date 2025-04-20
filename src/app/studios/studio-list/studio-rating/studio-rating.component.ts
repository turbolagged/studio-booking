import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-studio-rating',
  templateUrl: './studio-rating.component.html',
  styleUrls: ['./studio-rating.component.scss']
})
export class StudioRatingComponent {
  @Input() rating: number = 0;

  getStarClass(index: number): string {
    if (index < this.rating) {
      return 'star-full';
    } else if (index === Math.floor(this.rating) && this.rating % 1 !== 0) {
      return 'star-half';
    } else {
      return 'star-empty';
    }
  }
}
