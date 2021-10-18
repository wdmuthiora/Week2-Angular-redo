import { TestBed } from '@angular/core/testing';

import { GithubRepoSearchService } from './github-repo-search.service';

describe('GithubRepoSearchService', () => {
  let service: GithubRepoSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubRepoSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
