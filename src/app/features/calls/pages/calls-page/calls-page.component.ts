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
export class CallsPageComponent {}