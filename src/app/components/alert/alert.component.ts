import { Component } from '@angular/core';
import { OpenDialogService } from 'src/app/services/open-dialog.service';
import { CookiesService } from 'src/app/services/cookies.service';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  constructor(
    private openDialog: OpenDialogService,
    private seviceShowModal: NotifierService,
    private cookie: CookiesService
  ) {}

  public showDialog(): void {
    this.openDialog.openDialog();
  }

  public accentCokie(): void {
    this.cookie.setItem();
    this.seviceShowModal.closeNotifier();
  }

  public reject(): void {
    this.seviceShowModal.closeNotifier();
  }
}
