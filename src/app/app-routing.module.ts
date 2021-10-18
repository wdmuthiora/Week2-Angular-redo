import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultsComponent } from './components/results/results.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'results', component: ResultsComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  // '**' The wildcards define a route that is not present in our routes array
  { path: '**', component: NotFoundComponent },
  { path: 'search', component: SearchFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
