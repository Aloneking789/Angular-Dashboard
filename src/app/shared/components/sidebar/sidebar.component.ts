import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="sidebar">
      <nav>
        <ul>
          <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
          <li><a routerLink="/calls" routerLinkActive="active">Calls</a></li>
          <li><a routerLink="/analytics" routerLinkActive="active">Analytics</a></li>
          <li><a routerLink="/settings" routerLinkActive="active">Settings</a></li>
          <li><a routerLink="/support" routerLinkActive="active">Support</a></li>
        </ul>
      </nav>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 240px;
      background: white;
      height: 100vh;
      padding: 1rem 0;
      border-right: 1px solid #e5e7eb;
    }
    nav ul {
      list-style: none;
    }
    nav a {
      display: block;
      padding: 0.75rem 1.5rem;
      color: #4b5563;
      text-decoration: none;
      transition: background-color 0.2s;
    }
    nav a:hover {
      background-color: #f3f4f6;
    }
    nav a.active {
      background-color: #e5e7eb;
      color: #1f2937;
    }
  `]
})
export class SidebarComponent {}