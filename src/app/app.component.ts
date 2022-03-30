import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NotifierService } from './services/notifier.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor(private notifier: NotifierService) {}

  ngOnInit(): void {
    this.notifier.openNotifier();
  }
}
