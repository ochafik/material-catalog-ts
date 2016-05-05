import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ButtonDemo} from './button-demo';
import {CheckboxDemo} from './checkbox-demo';
import {IconDemo} from './icon-demo';
import {ProgressBarDemo} from './progress-bar-demo';
import {Home} from './home';

import {Dir} from '../material2/src/core/rtl/dir';
import {MdButton} from '../material2/src/components/button/button';
import {MD_SIDENAV_DIRECTIVES} from '../material2/src/components/sidenav/sidenav';
import {MD_LIST_DIRECTIVES} from '../material2/src/components/list/list';
import {MdIcon} from '../material2/src/components/icon/icon';
import {MdToolbar} from '../material2/src/components/toolbar/toolbar';

@Component({
  selector: 'demo-app',
  providers: [],
  templateUrl: 'app/demo-app.html',
  styleUrls: ['app/demo-app.css'],
  directives: [
    ROUTER_DIRECTIVES,
    ButtonDemo,
    CheckboxDemo,
    Home,
    Dir,
    MdButton,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar,
  ],
  pipes: []
})
@RouteConfig([
  new Route({path: '/', name: 'Home', component: Home, useAsDefault: true}),
  new Route({path: '/button', name: 'ButtonDemo', component: ButtonDemo}),
  new Route({path: '/checkbox', name: 'CheckboxDemo', component: CheckboxDemo}),
  new Route({path: '/icon', name: 'IconDemo', component: IconDemo}),
  new Route({path: '/progress-bar', name: 'ProgressBarDemo', component: ProgressBarDemo}),
])
export class DemoApp {
}
