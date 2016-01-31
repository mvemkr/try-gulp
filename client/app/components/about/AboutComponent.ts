import {Component} from 'angular2/core'
import {OnInit} from "angular2/core";

@Component({
    selector: 'about',
    template: '<h1>About</h1>'
})
export class AboutComponent implements OnInit{
    constructor() {}
    ngOnInit(){}
}