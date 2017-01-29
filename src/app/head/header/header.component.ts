import * as https from 'https';
import { Observer } from 'rxjs/Rx';
import { $$observable } from 'rxjs/symbol/observable';
import { Component, Input, OnInit } from '@angular/core'
import { HeroService } from '../../hero.service'
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {
    constructor(
        private HeroService: HeroService,
        private http: Http,
    ) { }
    ngOnInit() {
        this.hero = this.HeroService.getall()
        // let da=''
        // let get = Observable.bindCallback(https.get)
        // get('http://reactivex.io/rxjs/manual/tutorial.html').subscribe(res => {
        //     Observable.fromEvent(res, 'data').subscribe(
        //         data => {
        //             da += data
        //             console.info(da)
        //         })
        //     Observable.fromEvent(res,'end').subscribe(()=>{
        //         console.log(da)
        //     })
        // })
    }

    hero
    heroes
    onselect(heroes) {
        this.heroes = heroes
    }
}
