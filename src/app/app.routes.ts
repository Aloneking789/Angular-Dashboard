import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CallsPageComponent } from './features/calls/pages/calls-page/calls-page.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: '', 
    component: CallsPageComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'calls', 
    component: CallsPageComponent,
    canActivate: [authGuard]
  }
];