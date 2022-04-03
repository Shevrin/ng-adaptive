import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  public showNotifier$ = new BehaviorSubject<boolean>(true);

  public showNotifier() {
    return this.showNotifier$.asObservable();
  }

  public openNotifier(): void {
    this.showNotifier$.next(true);
  }

  public closeNotifier(): void {
    this.showNotifier$.next(false);
  }
}
