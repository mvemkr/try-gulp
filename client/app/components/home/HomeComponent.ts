import {Component, OnInit} from 'angular2/core'

@Component({
    selector: 'home',
    template: '<h1>{{titleName}}</h1>'
})
export class HomeComponent implements OnInit {
    titleName: string
    constructor(){
        this.titleName = "Home is here"
    }
    ngOnInit() {}
}