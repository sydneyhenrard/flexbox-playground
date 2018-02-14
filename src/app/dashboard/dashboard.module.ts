import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";
import { MyDataSource } from "./my-data-source";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    CdkTableModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [MyDataSource]
})
export class DashboardModule { }
