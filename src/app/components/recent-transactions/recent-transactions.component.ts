import { Component, OnInit, Input } from '@angular/core';
import { PaymentOperation } from '../../models/schematypes';
import { AstrographService } from '../../services/astrograph.service';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.scss']
})
export class RecentTransactionsComponent implements OnInit {

  @Input() historyLength: number;

  lastNOperations: PaymentOperation[] = [];

  constructor(private astrographService: AstrographService) {}

  ngOnInit() {
    this.astrographService.paymentOperations().subscribe(op => {
      this.lastNOperations.unshift(op);
      if (this.lastNOperations.length > this.historyLength) {
        this.lastNOperations.pop();
      }
    });
  }

  trackById(item: PaymentOperation) {
    return item.id;
  }
}
