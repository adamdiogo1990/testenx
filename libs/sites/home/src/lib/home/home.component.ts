/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@ag/shared';
import { WalletService } from 'libs/shared/src/lib/services/wallet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sites-home',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  public saldo: Observable<number>;
  constructor(public service: WalletService){
    this.saldo = this.service.saldo;
  }
}
