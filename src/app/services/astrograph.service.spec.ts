import { TestBed } from '@angular/core/testing';

import { AstrographService } from './astrograph.service';

import {
  ApolloTestingModule,
} from 'apollo-angular/testing';

describe('AstrographService', () => {
  let service: AstrographService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
    });
    service = TestBed.inject(AstrographService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
