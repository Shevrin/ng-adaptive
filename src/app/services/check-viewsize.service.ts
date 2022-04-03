import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckViewsizeService {
  private viewSize: number = window.innerWidth;
  constructor() {
    window.addEventListener('resize', this.checkView.bind(this));
  }

  checkView() {
    this.viewSize = window.innerWidth;

    return window.innerWidth >= 768 ? true : false;
  }
}
