import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { provideRouter } from "@angular/router";
import { loginRoutes } from "./lib.routes";


@NgModule({
  imports: [CommonModule],
  providers: [provideRouter(loginRoutes)],
})
export class LoginModule {}
