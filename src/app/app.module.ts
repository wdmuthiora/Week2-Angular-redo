import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultsComponent } from './components/results/results.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GithubSearchService } from './services/github-search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ResultsComponent,
    LandingComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [GithubSearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
