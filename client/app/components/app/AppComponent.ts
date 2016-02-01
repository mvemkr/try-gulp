import {Component, View} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterLink, RouterOutlet} from 'angular2/router';
import {Inject} from 'angular2/core';

import {_settings} from '../../settings';

import {HomeComponent} from './../home/HomeComponent'
import {AboutComponent} from './../about/AboutComponent'

@Component({
  selector: 'my-app'
})
@View({
    templateUrl: _settings.buildPath + '/components/app/app.html',
    directives: [ROUTER_DIRECTIVES, RouterLink, RouterOutlet]
})
export class AppComponent {
    name: string;

    constructor(@Inject(Router) router: Router){
        this.name = 'Alice';
        router.config([
            {path: '/', component: HomeComponent, as: 'Home'},
            {path: '/about', component: AboutComponent, as: 'About'}
        ]);
    }
}
