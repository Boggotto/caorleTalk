import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { NewsComponent } from './components/news/news.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { SocialComponent } from './components/social/social.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: "Home Page" },
    { path: 'contatti', component: ContattiComponent, title: "Contatti" },
    { path: 'news', component: NewsComponent, title: "News" },
    { path: 'podcast', component: PodcastComponent, title: "PodCast" },
    { path: 'social', component: SocialComponent, title: "Social" },
    { path: 'chi-siamo', component: ChiSiamoComponent, title: "Chi Siamo" }
];

@NgModule({
    providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    imports: [RouterModule.forRoot(routes,{ useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }