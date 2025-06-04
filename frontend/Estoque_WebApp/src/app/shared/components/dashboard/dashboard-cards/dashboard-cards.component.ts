import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule, icons } from '../../../modules/icon/icon.module';
@Component({
  selector: 'app-dashboard-cards',
  imports: [CommonModule, IconModule],
  templateUrl: './dashboard-cards.component.html',
  styleUrl: './dashboard-cards.component.css'
})
export class DashboardCardsComponent {
  icons = icons
  

}
