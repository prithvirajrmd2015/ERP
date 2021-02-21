import { Component } from '@angular/core';
import { PositiionType } from './core/ui-component/toster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'attino';
  Position = PositiionType;
}
