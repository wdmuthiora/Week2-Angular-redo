import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubSearchService } from 'src/app/services/github-search.service';
import { GithubRepoSearchService } from 'src/app/services/github-repo-search.service';
import { User } from '../../classes/user';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  @Output() profile!: User;
  @Output() repositories: any[] = [];
  text!: string;

  constructor(
    private githubuserService: GithubSearchService,
    private githubrepoService: GithubRepoSearchService
  ) {}

  doSearch(text: string) {
    this.githubuserService.getData(text).subscribe((profile) => {
      console.log(profile);
      console.log('this service is being consumed in the form');
      this.profile = profile;
    });

    this.githubrepoService.getData(text).subscribe((repositories) => {
      console.log(repositories);
      console.log('this repo-service is being consumed in the form');
      this.repositories = repositories;
    });
  }

  findProfile() {
    this.githubuserService.updateProfile(this.text);
    this.githubrepoService.updateProfile(this.text);

    this.doSearch;
  }

  ngOnInit(): void {
    this.doSearch(this.text);
  }
}
