import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectAssetComponent } from './inspect-asset.component';
import { Subject } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AstrographService } from '../../services/astrograph.service';

import mockAsset from '../../test/mockAsset.json';

describe('InspectAssetComponent', () => {
  let component: InspectAssetComponent;
  let fixture: ComponentFixture<InspectAssetComponent>;

  let mockAstroService;
  const asset$ = new Subject();
  const assetId$ = new Subject<string>();

  beforeEach(async(() => {
    mockAstroService = jasmine.createSpyObj(['assetDetails']);
    mockAstroService.assetDetails.and.returnValue(asset$);

    TestBed.configureTestingModule({
      declarations: [ InspectAssetComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{
        provide: AstrographService, 
        useValue: mockAstroService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectAssetComponent);
    component = fixture.componentInstance;
    component.assetId$ = assetId$;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a message before loading the first asset', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.container').textContent).toContain('Click on a recently transacted asset card to view its details.');
  });

  it('should retrieve asset data from the service', () => {
    assetId$.next('FAKE-ASSET-CODE');
    expect(mockAstroService.assetDetails).toHaveBeenCalledWith('FAKE-ASSET-CODE');
  });

  it('should display a spinner while retrieving data', () => {
    const compiled = fixture.nativeElement;
    assetId$.next('FAKE-ASSET-CODE');
    fixture.detectChanges();
    // expect the spinner to appear
    expect(compiled.querySelector('mat-spinner')).toBeTruthy();
    asset$.next(mockAsset);
    fixture.detectChanges();
    // expect the spinner to disappear once the data is retrieved
    expect(compiled.querySelector('mat-spinner')).toBeNull();
  });

  it('should display a card once the data is retrieved', () => {
    const compiled = fixture.nativeElement;
    assetId$.next('FAKE-ASSET-CODE');
    asset$.next(mockAsset);
    fixture.detectChanges();
    expect(compiled.querySelector('mat-card')).toBeTruthy();
    // check that the text hint has disappeared
    expect(compiled.querySelector('.message')).toBeNull();
  });
});
