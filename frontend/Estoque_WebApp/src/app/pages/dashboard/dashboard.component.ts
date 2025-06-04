import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { DashboardCardsComponent } from '../../shared/components/dashboard/dashboard-cards/dashboard-cards.component';
import { DashboardActionsComponent } from '../../shared/components/dashboard/dashboard-actions/dashboard-actions.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavBarComponent, DashboardCardsComponent, DashboardActionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
