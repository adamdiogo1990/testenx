import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@ag/shared';

@Component({
  selector: 'cassino-login',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
