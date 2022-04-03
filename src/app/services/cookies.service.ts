import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  clearItem() {
    // localStorage.removeItem('isCookieAccepted');
    this.document.cookie = '';
    console.log('clear');
  }

  getItem(): boolean {
    // const item = localStorage.getItem('isCookieAccepted');
    // return item ? JSON.parse(item) : false;
    return this.document.cookie ? true : false;
  }

  setItem(): void {
    // localStorage.setItem('isCookieAccepted', JSON.stringify(true));
    // this.document.cookie = 'isCookieAccepted=true';
    this.document.cookie = 'isCookieAccepted';
  }
}
