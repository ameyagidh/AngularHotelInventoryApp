import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hiv',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'hotelInventoryApp';
  role = "Admin";
 
}
