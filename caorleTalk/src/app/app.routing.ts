import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './examples/landing/landing.component';
import { ChisiamoComponent } from './examples/chisiamo/chisiamo.component';
import { ContattiComponent } from './examples/contatti/contatti.component';
import { PodcastComponent } from './examples/podcast/podcast.component';

const routes: Routes =[
    { path: '', pathMatch: 'full' , component: LandingComponent},
    { path: 'chi-siamo',                component: ChisiamoComponent },
    { path: 'contatti',                component: ContattiComponent },
    { path: 'podcast',                component: PodcastComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
