import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  imports: [RouterModule, CommonModule],
})

export class DropdownComponent {
  @Input() label: string = '';
  @Input() options: { label: string, route: string }[] = [];
  show = false;
}
