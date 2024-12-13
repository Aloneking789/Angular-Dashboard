import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="conversation">
      <div class="header">
        <h2>Conversation</h2>
        <div class="duration">Call Duration: 2:15</div>
      </div>
      <div class="messages">
        <div class="message">
          <div class="time">12:45 PM</div>
          <div class="content">
            Hello, thank you for calling Drona. How may I assist you today?
          </div>
        </div>
        <div class="message customer">
          <div class="time">12:45 PM</div>
          <div class="content">
            Hi, I'm interested in your premium plan. Could you tell me more about its features?
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .conversation {
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
    .duration {
      color: #6b7280;
      font-size: 0.875rem;
    }
    .messages {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .message {
      background: #f3f4f6;
      padding: 1rem;
      border-radius: 8px;
    }
    .message.customer {
      background: #e5e7eb;
    }
    .time {
      color: #6b7280;
      font-size: 0.875rem;
      margin-bottom: 0.25rem;
    }
  `]
})
export class ConversationComponent {}