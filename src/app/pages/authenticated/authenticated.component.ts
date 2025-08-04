import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-authenticated',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, CommonModule,MatTooltipModule],
  templateUrl: './authenticated.component.html',
  styleUrl: './authenticated.component.scss',
})
export class AuthenticatedComponent {
  
  items = [
    {
      icon: 'location_searching',
      iconPath: '/a/trackerPeage',
      tooltip:'Tracker'
    },
    {
      icon: 'location_on',
      iconPath: '/a/trackerPage',
      tooltip:'Tracker'
    },
    {
      icon: 'person',
      iconPath: '/a/user-management',
      tooltip:'user-management'
    },
  ];
  selectedItem=this.items[0]
  router = inject(Router);

  handleItemClick(item: any) {
    this.selectedItem=item
    this.router.navigate([`${item.iconPath}`]);
  }
}
