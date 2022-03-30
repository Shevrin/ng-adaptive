import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { OpenDialogService } from 'src/app/services/open-dialog.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FormComponent {
  public checked = false;
  public disabled = true;
  public email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    public dialog: MatDialog,
    private openDialog: OpenDialogService,
    private login: LoginService
  ) {}

  public showDialog(): void {
    this.openDialog.openDialog();
  }

  public getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : null;
  }

  public onSubmit(): void {
    if (this.email.valid) {
      this.login.login(this.email.value);
      this.email.reset();
    }
  }
}
