import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckViewsizeService } from './services/check-viewsize.service';
import { CookiesService } from './services/cookies.service';
import { NotifierService } from './services/notifier.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  show!: Observable<boolean>;
  constructor(
    private checkViewSize: CheckViewsizeService,
    private seviceShowModal: NotifierService,
    private cookies: CookiesService
  ) {}

  ngOnInit(): void {
    if (this.checkViewSize.checkView() && !this.cookies.getItem()) {
      this.show = this.seviceShowModal.showNotifier();
    }
  }
}
