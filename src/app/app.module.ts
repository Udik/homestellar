import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './modules/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { RecentTransactionsComponent } from './components/recent-transactions/recent-transactions.component';
import { RecentAssetsComponent } from './components/recent-assets/recent-assets.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InspectAssetComponent } from './components/inspect-asset/inspect-asset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    RecentTransactionsComponent,
    RecentAssetsComponent,
    DashboardComponent,
    InspectAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
