import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTransactionsComponent } from './recent-transactions.component';
import { AstrographService } from '../../services/astrograph.service';
import { Subject } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import mockData from '../../test/mockPayments.json';

describe('RecentTransactionsComponent', () => {
  let component: RecentTransactionsComponent;
  let fixture: ComponentFixture<RecentTransactionsComponent>;

  let mockAstroService;
  const transactions$ = new Subject();

  beforeEach(async(() => {
    mockAstroService = jasmine.createSpyObj(['paymentOperations']);
    mockAstroService.paymentOperations.and.returnValue(transactions$);

    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ RecentTransactionsComponent ],
      providers: [{
        provide: AstrographService, 
        useValue: mockAstroService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a card for each transaction', () => {
    component.historyLength = 20;
    mockData.slice(0, 10).forEach(item => transactions$.next(item));
    fixture.detectChanges();
    expect(component.lastNOperations.length).toBe(10);
    expect(document.querySelectorAll('mat-card').length).toBe(10);
  });

  it('should display a maximum of N cards', () => {
    component.historyLength = 10;
    mockData.slice(0, 20).forEach(item => transactions$.next(item));
    fixture.detectChanges();
    expect(component.lastNOperations.length).toBe(10);
    expect(document.querySelectorAll('mat-card').length).toBe(10);
  });

  it('should display more recent transactions first', () => {
    component.historyLength = 10;
    mockData.slice(0, 2).forEach(item => transactions$.next(item));
    fixture.detectChanges();
    expect(component.lastNOperations[0].amount).toBe(mockData[1].amount);
    expect(component.lastNOperations[1].amount).toBe(mockData[0].amount);
  });
}); 
