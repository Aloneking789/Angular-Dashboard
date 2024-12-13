import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-transcription',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="transcription">
      <div class="header">
        <h2>Live Transcription</h2>
        <button class="refresh">🔄</button>
      </div>
      <div class="messages">
        <div class="message agent">
          <div class="time">12:45:30</div>
          <div class="content">
            <strong>Agent:</strong>
            <p>Hello, thank you for calling Drona. How may I assist you today?</p>
          </div>
        </div>
        <div class="message customer">
          <div class="time">12:45:45</div>
          <div class="content">
            <strong>Customer:</strong>
            <p>Hi, I'm interested in your premium plan. Could you tell me more about its features?</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .transcription {
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
    .refresh {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.25rem;
    }
    .messages {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .message {
      display: flex;
      gap: 1rem;
    }
    .time {
      color: #6b7280;
      font-size: 0.875rem;
      min-width: 80px;
    }
    .content {
      flex: 1;
    }
    .content p {
      margin: 0.25rem 0 0;
    }
  `]
})
export class LiveTranscriptionComponent {}