import { Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { OpenDialogService } from 'src/app/services/open-dialog.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public alertRef: MatSnackBarRef<AlertComponent>,
    private openDialog: OpenDialogService
  ) {}

  public showDialog(): void {
    this.openDialog.openDialog();
  }
}
