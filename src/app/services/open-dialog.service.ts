import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PolicyComponent } from '../components/policy/policy.component';

@Injectable({
  providedIn: 'root',
})
export class OpenDialogService {
  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    this.dialog.open(PolicyComponent);
  }
}
