import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { Asset } from '../../models/schematypes';
import { Observable } from 'rxjs';
import { switchMap, tap, filter } from 'rxjs/operators';
import { AstrographService } from '../../services/astrograph.service';

@Component({
  selector: 'app-inspect-asset',
  templateUrl: './inspect-asset.component.html',
  styleUrls: ['./inspect-asset.component.scss']
})
export class InspectAssetComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() assetId$: Observable<string>;

  asset$: Observable<Asset>;
  loading = false;

  constructor(private astrographService: AstrographService) { }

  ngOnInit(): void {
    this.asset$ = this.assetId$.pipe(
      filter(assetId => assetId !== null),
      tap(() => this.loading = true),
      switchMap(assetId => this.astrographService.assetDetails(assetId)),
      tap(() => this.loading = false)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngAfterViewInit() {
    
  }
}
