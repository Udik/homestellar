import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, share, tap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { PaymentOperation, Asset } from '../models/schematypes';
import { GET_ASSET, GET_PAYMENTS } from './queries';

@Injectable({
  providedIn: 'root'
})
export class AstrographService {

  constructor(private apollo: Apollo) { }

  paymentOperations(): Observable<PaymentOperation> {
    return this.apollo.watchQuery<{ operations: PaymentOperation }>({
      query: GET_PAYMENTS,
      fetchPolicy: 'no-cache',
      errorPolicy: 'none'
    }).valueChanges.pipe(
      filter(d => !!d.data && !!d.data.operations),
      map(d => d.data.operations),
      share()
    );
  }

  assetDetails(assetId: string): Observable<Asset> {
    return this.apollo.query<{ asset: Asset}>({
      query: GET_ASSET,
      variables: {
        id: assetId
      }
    }).pipe(map(res => res.data.asset));
  }
}
