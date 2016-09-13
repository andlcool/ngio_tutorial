/**
 * Created by Slevin on 8/9/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

import { routing } from './app.routing';

@NgModule({
    imports:      [ BrowserModule, FormsModule, routing],
    declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
    bootstrap:    [ AppComponent],
    providers: [ HeroService ]
})
export class AppModule { }
