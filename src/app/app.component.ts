import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CheckViewsizeService } from './services/check-viewsize.service';
import { CookiesService } from './services/cookies.service';
import { NotifierService } from './services/notifier.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private notifier: NotifierService,
    private checkViewSize: CheckViewsizeService,
    private cookies: CookiesService
  ) {}

  ngOnInit(): void {
    if (this.checkViewSize.checkView() && !this.cookies.getItem()) {
      this.notifier.openNotifier();
    }
    console.log('init');
  }

  ngOnDestroy(): void {
    console.log('destroy');

    this.cookies.clearItem();
  }
}
