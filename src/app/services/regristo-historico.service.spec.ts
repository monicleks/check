import { TestBed } from '@angular/core/testing';

import { RegristoHistoricoService } from './regristo-historico.service';

describe('RegristoHistoricoService', () => {
  let service: RegristoHistoricoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegristoHistoricoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
