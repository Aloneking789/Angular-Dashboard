import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveCallsComponent } from '../../components/active-calls/active-calls.component';
import { LiveTranscriptionComponent } from '../../components/live-transcription/live-transcription.component';
import { ConversationComponent } from '../../components/conversation/conversation.component';
import { KeyInformationComponent } from '../../components/key-information/key-information.component';

@Component({
  selector: 'app-calls-page',
  standalone: true,
  imports: [
    CommonModule,
    ActiveCallsComponent,
    LiveTranscriptionComponent,
    ConversationComponent,
    KeyInformationComponent
  ],
  template: `
    <div class="calls-page">
      <div class="grid">
        <div class="col">
          <app-active-calls></app-active-calls>
        </div>
        <div class="col">
          <app-live-transcription></app-live-transcription>
        </div>
        <div class="col">
          <app-conversation></app-conversation>
        </div>
        <div class="col">
          <app-key-information></app-key-information>
        </div>
      </div>
      </div>
      <footer style="background-color: #e5e7eb; color: black ; padding: 20px 0; font-family: Arial, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: auto; padding: 0 20px;">
    <!-- Logo Section -->
    <div style="flex: 1; display: flex; align-items: center;">
      <img src="logo.png" alt="Company Logo" style="height: 50px; margin-right: 10px;">
      <span style="font-size: 20px; font-weight: bold; color: black;">Your Company</span>
    </div>

    <!-- Contact Info Section -->
    <div style="flex: 1; text-align: center;">
      <p style="margin: 0; font-size: 16px; color: black;">Email: <a href="mailto:contact@yourcompany.com" style="color: black; text-decoration: none;">contact yourcompany.com</a></p>
      <p style="margin: 0; font-size: 16px; color: black;">Phone: <a href="tel:+1234567890" style="color: black; text-decoration: none;">+1 234 567 890</a></p>
    </div>

    <!-- Copyright Section -->
    <div style="flex: 1; text-align: right;">
      <p style="margin: 0; font-size: 14px; color: black;">&copy; 2024 Your Company Name</p>
      <p style="margin: 0; font-size: 14px; color: black;">All Rights Reserved</p>
    </div>
  </div>
</footer>
  `,
  styles: [`
    .calls-page {
      padding: 2rem;
      background: #f3f4f6;
      min-height: 100vh;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }
  `]
})
export class CallsPageComponent { }