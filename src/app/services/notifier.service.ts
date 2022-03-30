import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private alertBar: MatSnackBar) {}

  public openNotifier(): void {
    this.alertBar.openFromComponent(AlertComponent, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
