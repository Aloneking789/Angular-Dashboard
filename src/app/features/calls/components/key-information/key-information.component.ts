import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-key-information',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="key-info">
      <h2>Key Information</h2>
      <div class="info-section">
        <h3>Customer Details</h3>
        <div class="info-grid">
          <div class="info-item">
            <label>Name</label>
            <div>John Smith</div>
          </div>
          <div class="info-item">
            <label>Email</label>
            <div>johnexample.com</div>
          </div>
          <div class="info-item">
            <label>Phone</label>
            <div>+1 234 567 890</div>
          </div>
        </div>
      </div>
      <div class="info-section">
        <h3>Call Summary</h3>
        <div class="info-grid">
          <div class="info-item">
            <label>Topic</label>
            <div>Premium Plan Inquiry</div>
          </div>
          <div class="info-item">
            <label>Priority</label>
            <div class="priority high">High</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .key-info {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .info-section {
      margin-top: 1.5rem;
    }
    .info-grid {
      display: grid;
      gap: 1rem;
      margin-top: 0.5rem;
    }
    .info-item label {
      color: #6b7280;
      font-size: 0.875rem;
      display: block;
      margin-bottom: 0.25rem;
    }
    .priority {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
    }
    .priority.high {
      background: #dcfce7;
      color: #166534;
    }
  `]
})
export class KeyInformationComponent {}