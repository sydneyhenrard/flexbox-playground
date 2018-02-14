import { Component, OnInit } from '@angular/core';
import { MyDataSource } from "../my-data-source";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dataSource: MyDataSource) { }

  ngOnInit() {
  }

}
