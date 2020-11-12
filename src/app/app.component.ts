import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FetchService } from './fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private fetchService: FetchService) {}

  public objectid: number;
  public output$ = this.fetchService.output$;

  public fetch(): void {
    this.fetchService.setObjectid(this.objectid);
  }
}
