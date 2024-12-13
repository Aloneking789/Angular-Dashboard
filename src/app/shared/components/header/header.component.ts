import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="logo">
        <img src="assets/logo.svg" alt="Logo" />
      </div>
      <div class="breadcrumb">
        Dashboard / Calls
      </div>
      <div class="user-profile">
        <div class="notification-icon">🔔</div>
        <div class="avatar">
          <img src="assets/avatar.png" alt="User Avatar" />
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: white;
      border-bottom: 1px solid #e5e7eb;
    }
    .logo img {
      height: 32px;
    }
    .breadcrumb {
      color: #6b7280;
    }
    .user-profile {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .avatar img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  `]
})
export class HeaderComponent {}