import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-box">
        <h2>Login to Dashboard</h2>
        
        <div class="login-methods">
          <button class="login-method email-login active">Email</button>
          <button class="login-method mobile-login">Mobile</button>
        </div>

        <!-- Email Login Form -->
        <form *ngIf="loginMethod === 'email'" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="username">Email:</label>
            <input 
              type="email" 
              id="username" 
              [(ngModel)]="username" 
              name="username" 
              required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              [(ngModel)]="password" 
              name="password" 
              required>
          </div>
          <div class="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>

        <!-- Mobile Login Form -->
        <form *ngIf="loginMethod === 'mobile'" (ngSubmit)="onMobileSubmit()">
          <div class="form-group">
            <label for="mobile">Mobile Number:</label>
            <div class="mobile-input">
              <select class="country-code">
                <option>+1</option>
                <option>+91</option>
                <option>+44</option>
              </select>
              <input 
                type="tel" 
                id="mobile" 
                [(ngModel)]="mobileNumber" 
                name="mobile" 
                required>
            </div>
          </div>
          <div class="form-group otp-group" *ngIf="otpSent">
            <label for="otp">Enter OTP:</label>
            <input 
              type="text" 
              id="otp" 
              [(ngModel)]="otp" 
              name="otp" 
              required>
          </div>
          <button type="submit">
            {{ otpSent ? 'Verify OTP' : 'Send OTP' }}
          </button>
        </form>

        <div class="social-login">
          <div class="divider">
            <span>or continue with</span>
          </div>
          <div class="social-buttons">
            <button class="google-login">
              <img src="/assets/google-icon.png" alt="Google">
              Continue with Google
            </button>
            <button class="github-login">
              <img src="/assets/github-icon.png" alt="GitHub">
              Continue with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
    }
    .login-box {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 400px;
    }
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    .login-methods {
      display: flex;
      margin-bottom: 1.5rem;
    }
    .login-method {
      flex: 1;
      padding: 0.5rem;
      background-color: #f1f1f1;
      border: none;
      color: #666;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .login-method.active {
      background-color: #007bff;
      color: white;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    input, .mobile-input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
    .mobile-input {
      display: flex;
      padding: 0;
    }
    .mobile-input .country-code {
      width: 25%;
      padding: 0.5rem;
      border: none;
      border-right: 1px solid #ddd;
    }
    .mobile-input input {
      width: 75%;
      border: none;
      margin-bottom: 0;
    }
    .forgot-password {
      text-align: right;
      margin-bottom: 1rem;
    }
    .forgot-password a {
      color: #007bff;
      text-decoration: none;
    }
    button {
      width: 100%;
      padding: 0.75rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1rem;
    }
    button:hover {
      background-color: #0056b3;
    }
    .social-login {
      margin-top: 1.5rem;
    }
    .divider {
      text-align: center;
      position: relative;
      margin-bottom: 1rem;
    }
    .divider span {
      background: white;
      padding: 0 10px;
      position: relative;
      z-index: 1;
      color: #666;
    }
    .divider::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      border-top: 1px solid #ddd;
      z-index: 0;
    }
    .social-buttons {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .social-buttons button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      color: #333;
      border: 1px solid #ddd;
      gap: 10px;
    }
    .social-buttons button img {
      width: 20px;
      height: 20px;
    }
    .social-buttons button:hover {
      background-color: #f1f1f1;
    }
  `]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mobileNumber: string = '';
  otp: string = '';
  otpSent: boolean = false;
  loginMethod: 'email' | 'mobile' = 'email';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/calls']);
    }
  }

  onMobileSubmit() {
    // Placeholder for mobile login logic
    if (!this.otpSent) {
      // Send OTP logic
      this.otpSent = true;
    } else {
      // Verify OTP logic
      console.log('OTP Verification');
    }
  }

  switchLoginMethod(method: 'email' | 'mobile') {
    this.loginMethod = method;
    this.otpSent = false;
  }
}