import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@ag/shared';

@Component({
  selector: 'cassino-home',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class CassinoHomeComponent {}
