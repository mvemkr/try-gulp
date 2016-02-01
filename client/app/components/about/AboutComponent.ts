import {Component,View, OnInit} from 'angular2/core';

@Component({
    selector: 'about'

})
@View({
    template: '<h1>About</h1>'
})
export class AboutComponent implements OnInit{
    constructor() {}
    ngOnInit(){}
}