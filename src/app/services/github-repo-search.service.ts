import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubRepoSearchService {
  private accessKey: string = environment.apiKey;
  private baseApiURL: string = environment.baseURL;
  text!: string;
  
  constructor(private http: HttpClient) {}
  updateProfile(text: string) {
    this.text = text;
  }

  getData(term: string): Observable<any> {
    const endPoint = 'users';
    // to get repos
    let apiUrl = `${this.baseApiURL}/${endPoint}/${term}/repos`;
    return this.http.get(apiUrl);
  }
}
