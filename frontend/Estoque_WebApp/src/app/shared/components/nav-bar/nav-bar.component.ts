import { Component } from '@angular/core';
import { IconModule } from '../../modules/icon/icon.module';

@Component({
  selector: 'app-nav-bar',
  imports: [IconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  icons = IconModule.icon;

}
