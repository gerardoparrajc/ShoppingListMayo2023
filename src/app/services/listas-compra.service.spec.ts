import { TestBed } from '@angular/core/testing';

import { ListasCompraService } from './listas-compra.service';

describe('ListasCompraService', () => {
  let service: ListasCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListasCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
