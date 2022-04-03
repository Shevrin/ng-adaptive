import { Component, OnInit } from '@angular/core';
import { CheckViewsizeService } from './services/check-viewsize.service';
import { CookiesService } from './services/cookies.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  show: boolean = false;
  constructor(
    private checkViewSize: CheckViewsizeService,
    private cookies: CookiesService
  ) {}

  ngOnInit(): void {
    if (this.checkViewSize.checkView() && !this.cookies.getItem()) {
      this.show = true;
    }
  }
}
