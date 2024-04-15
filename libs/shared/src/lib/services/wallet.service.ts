import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private _saldo = new BehaviorSubject(0);
  public saldo: Observable<number>;

  constructor(){
    this.saldo = this._saldo.asObservable();
  }
  atualizarSaldo(novoSaldo: number){
    this._saldo.next(novoSaldo);
  }
}
