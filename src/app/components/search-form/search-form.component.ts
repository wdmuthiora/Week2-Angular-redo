import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from 'src/app/services/github-search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  profile!: Object[];

  constructor(private githubuserService:GithubSearchService) {
    this.githubuserService.getData().subscribe((profile) => {
      console.log(profile);
      console.log("this service is being consumed in the form")
      this.profile = profile;
    });
  }

  doSearch(text:string){}

  ngOnInit(): void {}
}
