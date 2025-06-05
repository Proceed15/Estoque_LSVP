import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { DashboardCardsComponent } from '../../shared/components/dashboard/dashboard-cards/dashboard-cards.component';
import { DashboardActionsComponent } from '../../shared/components/dashboard/dashboard-actions/dashboard-actions.component';
import { PTableComponent } from '../../shared/components/p-table/p-table.component';
import { ExpirationBatches } from '../../shared/models/expiration-batches';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavBarComponent, DashboardCardsComponent, DashboardActionsComponent, PTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  expirationBatches: ExpirationBatches[] = [
    {
      productName: 'Produto A',
      batch: 'Lote 001',
      expirationDate: new Date('2023-12-31'),
      remainingDays: 30,
      quantity: 100,
      containerCode: 'C123'
    },
    {
      productName: 'Produto B',
      batch: 'Lote 002',
      expirationDate: new Date('2024-01-15'),
      remainingDays: 45,
      quantity: 200,
      containerCode: 'C456'
    },
    {
      productName: 'Produto C',
      batch: 'Lote 003',
      expirationDate: new Date('2024-02-28'),
      remainingDays: 60,
      quantity: 150,
      containerCode: 'C789'
    },
    {
      productName: 'Produto D',
      batch: 'Lote 004',
      expirationDate: new Date('2024-03-10'),
      remainingDays: 75,
      quantity: 50,
      containerCode: 'C101'
    },
    {
      productName: 'Produto E',
      batch: 'Lote 005',
      expirationDate: new Date('2024-04-20'),
      remainingDays: 90,
      quantity: 300,
      containerCode: 'C102'
    },
    {
      productName: 'Produto F',
      batch: 'Lote 006',
      expirationDate: new Date('2024-05-15'),
      remainingDays: 120,
      quantity: 80,
      containerCode: 'C103'
    },
    {
      productName: 'Produto G',
      batch: 'Lote 007',
      expirationDate: new Date('2024-06-30'),
      remainingDays: 150,
      quantity: 120,
      containerCode: 'C104'
    }
  ];

}
