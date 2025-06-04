import { Component } from '@angular/core';
import { IconModule, icons } from '../../../modules/icon/icon.module';
@Component({
  selector: 'app-dashboard-actions',
  imports: [IconModule],
  templateUrl: './dashboard-actions.component.html',
  styleUrl: './dashboard-actions.component.css'
})
export class DashboardActionsComponent {
  icon = icons;
}
