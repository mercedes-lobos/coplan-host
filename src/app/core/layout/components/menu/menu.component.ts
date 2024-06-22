import { Component } from '@angular/core';
import * as names from '../../../config/variables';
import { NotificationComponent } from '../notification/notification.component';
import { BoardComponent } from '../../../../features/board/board.component';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NotificationComponent, BoardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  names = names;

  open = false;

  toggleOpen() {
    this.open = !this.open;
  }
}
