import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'shared-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title = '';

  constructor(public service: WalletService){}

  novoSaldo(){
    this.service.atualizarSaldo(500);
  }
}
