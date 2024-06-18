import { Component } from '@angular/core';
import * as names from '../../../config/variables';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  names = names;
}
