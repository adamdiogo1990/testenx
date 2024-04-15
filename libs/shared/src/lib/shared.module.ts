import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./components/card.component";
import { LoginComponent } from "./login/login.component";
import { WalletService } from "./services/wallet.service";



@NgModule({
  imports: [CommonModule, CardComponent, LoginComponent],
  exports: [CardComponent,LoginComponent],
  providers:[ WalletService]
})
export class SharedModule {}
