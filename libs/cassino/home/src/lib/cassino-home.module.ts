import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { provideRouter } from "@angular/router";
import { homeRoutes } from "./lib.routes";


@NgModule({
  imports: [CommonModule,],
  providers: [provideRouter(homeRoutes)],
})
export class CassinoHomeModule {}
