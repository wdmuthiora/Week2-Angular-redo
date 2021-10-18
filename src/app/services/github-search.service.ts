import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubSearchService {
  private url!: string;
  private apiKey: string = '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';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {

    const url = 'http://api.github.com/users';
    let apiUrl = `https://api.github.com/users/term={term}?access_token=' + apiKey`;
    return this.http.get(url);
  }
}
