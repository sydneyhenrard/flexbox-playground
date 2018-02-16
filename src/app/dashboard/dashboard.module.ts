import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";
import { MyDataSource } from "./my-data-source";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    CdkTableModule,
    FlexLayoutModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [MyDataSource]
})
export class DashboardModule { }
