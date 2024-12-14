import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-active-calls',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="active-calls">
      <div class="header">
        <h2>Active Calls</h2>
        <div class="last-updated">Last updated: Just now</div>
      </div>
      <div class="call-list">
        <div class="call-item active">
          <div class="status">Active</div>
          <div class="time">12:45</div>
          <div class="caller">
            <h3>John Smith</h3>
            <p>Product Inquiry - Premium Plan</p>
          </div>
        </div>
        <div class="call-item queued">
          <div class="status">Queued</div>
          <div class="time">12:50</div>
          <div class="caller">
            <h3>Sarah Johnson</h3>
            <p>Technical Support</p>
          </div>
        </div>
      </div>
      

    </div>
  `,
  styles: [`
    .active-calls {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    .last-updated {
      color: #6b7280;
      font-size: 0.875rem;
    }
    .call-item {
      display: flex;
      align-items: center;
      padding: 1rem;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      margin-bottom: 0.5rem;
    }
    .status {
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      margin-right: 1rem;
    }
    .active .status {
      background: #dcfce7;
      color: #166534;
    }
    .queued .status {
      background: #fef3c7;
      color: #92400e;
    }
    .time {
      margin-right: 1rem;
      color: #6b7280;
    }
    .caller h3 {
      font-size: 1rem;
      margin: 0;
    }
    .caller p {
      margin: 0;
      color: #6b7280;
      font-size: 0.875rem;
    }
  `]
})
export class ActiveCallsComponent {}