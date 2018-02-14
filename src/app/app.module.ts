import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatSidenavModule, MatToolbarModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardModule } from "./dashboard/dashboard.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
