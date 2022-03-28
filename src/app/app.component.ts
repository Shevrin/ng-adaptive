import { Component, ViewEncapsulation } from '@angular/core';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
} from '@angular/material/snack-bar';
import { AlertComponent } from './alert/alert.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'ng-viewgin';

  // durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _alertBar: MatSnackBar) {
    this.openAlertBar();
  }

  public openAlertBar() {
    this._alertBar.openFromComponent(AlertComponent, {
      // data: {
      //   message: message,
      // },
      // duration: this.durationInSeconds * 1000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
