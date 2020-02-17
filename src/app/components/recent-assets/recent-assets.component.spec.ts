import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAssetsComponent } from './recent-assets.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AstrographService } from '../../services/astrograph.service';
import { Subject } from 'rxjs';

import mockData from '../../test/mockPayments.json';

describe('RecentAssetsComponent', () => {
  let component: RecentAssetsComponent;
  let fixture: ComponentFixture<RecentAssetsComponent>;

  let mockAstroService;
  const transactions$ = new Subject();

  beforeEach(async(() => {
    mockAstroService = jasmine.createSpyObj(['paymentOperations']);
    mockAstroService.paymentOperations.and.returnValue(transactions$);
    
    TestBed.configureTestingModule({
      declarations: [ RecentAssetsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{
        provide: AstrographService, 
        useValue: mockAstroService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a card for each asset', () => {
    const assets = new Set(mockData.map(m => m.asset.code));
    mockData.forEach(item => transactions$.next(item));
    fixture.detectChanges();
    expect(document.querySelectorAll('mat-card').length).toBe(assets.size);
  });

  it('should count the totals per asset', () => {
    const nodl = mockData.filter(md => md.asset.code === 'NODL');
    nodl.forEach(item => transactions$.next(item));
    fixture.detectChanges();
    const totTransactions = nodl.length;
    const totAmount = nodl.reduce((acc, el) => acc + parseFloat(el.amount), 0);
    expect(component.transactedAssets[0].numberOfTransactions).toBe(totTransactions);
    expect(component.transactedAssets[0].totalTransacted).toBe(totAmount);
  });
});
