/**
 * Created by Slevin on 8/9/2016.
 */
import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
    heroes:Hero[];
    selectedHero:Hero;

    ngOnInit():void {
        this.getHeroes();
    }



    constructor(private router: Router, private heroService:HeroService) {
    };

    getHeroes():void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}




