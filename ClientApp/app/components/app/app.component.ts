import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService]
})


export class AppComponent {

    title = "Tour of Heroes";
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    getHeros(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    ngOnInit(): void {
        this.getHeros();
    }
}
