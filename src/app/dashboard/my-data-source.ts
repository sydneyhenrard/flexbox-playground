import { Injectable } from "@angular/core";
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class MyDataSource extends DataSource<any> {
  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return Observable.of([{"value": 2051, "type": "INTEGER", "unit": "Picks"}, {
        "value": -0.6763770739064949,
        "type": "DECIMAL",
        "unit": "Profit"
      }, {"value": -0.00032977916816503896, "type": "PERCENT", "unit": "Yield"}, {
        "value": 2.4228540583245755,
        "type": "DECIMAL",
        "unit": "Avg Odd"
      }, {"value": "3h25m", "type": "DURATION", "unit": "Release Time"}]
    )
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }
}
