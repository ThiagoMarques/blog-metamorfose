import { TestBed } from '@angular/core/testing';

import { PostsDataService } from './posts-data.service';

describe('PostsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsDataService = TestBed.get(PostsDataService);
    expect(service).toBeTruthy();
  });
});
