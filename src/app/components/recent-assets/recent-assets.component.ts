import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AstrographService } from '../../services/astrograph.service';

import { Asset } from '../../models/schematypes';

interface TransactedAsset {
  numberOfTransactions: number;
  totalTransacted: number;
  asset: Asset;
}

@Component({
  selector: 'app-recent-assets',
  templateUrl: './recent-assets.component.html',
  styleUrls: ['./recent-assets.component.scss']
})
export class RecentAssetsComponent implements OnInit {

  @Output() assetSelected: EventEmitter<Asset> = new EventEmitter();

  transactedAssets: TransactedAsset[] = [];

  constructor(private astrographService: AstrographService) {}

  ngOnInit() {

    this.astrographService.paymentOperations()
      .subscribe(payment => {
        let asset = this.transactedAssets.find(a => a.asset.code === payment.asset.code);
        if (!asset) {
          asset = {
            asset: payment.asset,
            numberOfTransactions: 0,
            totalTransacted: 0
          };

          this.transactedAssets.push(asset);
        }

        asset.numberOfTransactions ++;
        asset.totalTransacted += parseFloat(payment.amount);

        // reorder by transactions:
        this.transactedAssets.sort((t1, t2) => t2.numberOfTransactions - t1.numberOfTransactions);
    });
  }

  trackById(index, item: TransactedAsset) {
    return item.asset.code;
  }

  selectAsset(item: Asset) {
    console.log('selectAsset', item);
    this.assetSelected.emit(item.id);
  }

}
