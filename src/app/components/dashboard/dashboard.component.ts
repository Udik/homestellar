import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedAsset$ = new BehaviorSubject<string>(null);

  constructor() { }

  ngOnInit(): void {
  }

  assetSelected(id: string) {
    this.selectedAsset$.next(id);
  }

}
