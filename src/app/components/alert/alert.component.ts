import { Component } from '@angular/core';
import { OpenDialogService } from 'src/app/services/open-dialog.service';
import { CookiesService } from 'src/app/services/cookies.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  constructor(
    private openDialog: OpenDialogService,
    private cookie: CookiesService
  ) {}

  public showDialog(): void {
    this.openDialog.openDialog();
  }

  public accentCokie(): void {
    this.cookie.setItem();
  }
}
