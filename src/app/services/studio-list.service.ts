import { Injectable } from '@angular/core';
import * as studioList from 'src/assets/data/studios.json';


@Injectable({
  providedIn: 'root'
})
export class StudioListService {

  constructor() { }

  studiosList() {
    return studioList;
  }
}
