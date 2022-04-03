import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  public login(email: string): void {
    this.router.navigate(['/empty']);
  }
}
