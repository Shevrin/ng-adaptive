import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  getItem(): boolean {
    return this.document.cookie ? true : false;
  }

  setItem(): void {
    this.document.cookie = 'isCookieAccepted';
  }
}
