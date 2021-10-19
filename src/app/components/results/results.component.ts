import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SearchFormComponent } from '../search-form/search-form.component';
import { User } from '../../classes/user';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() profile = "";
  @Input() repositories = [];

  constructor() { }

  ngOnInit(): void {
  }

}
