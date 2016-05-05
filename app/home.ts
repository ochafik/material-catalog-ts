import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Dir} from '../material2/src/core/rtl/dir';
import {MdButton, MdAnchor} from '../material2/src/components/button/button';
import {MD_SIDENAV_DIRECTIVES} from '../material2/src/components/sidenav/sidenav';
import {MD_LIST_DIRECTIVES} from '../material2/src/components/list/list';
import {MdIcon} from '../material2/src/components/icon/icon';
import {MdToolbar} from '../material2/src/components/toolbar/toolbar';

@Component({
  selector: 'home',
  directives: [ROUTER_DIRECTIVES, MdButton, MdAnchor],
  template: `
    <button [routerLink]="['ButtonDemo']" md-raised-button color="primary">Button</button>
    <button [routerLink]="['CheckboxDemo']" md-raised-button color="primary">Checkbox</button>
    <button [routerLink]="['IconDemo']" md-raised-button color="primary">Icon</button>
    <button md-raised-button color="primary" disabled>Icon Button</button>
    <button [routerLink]="['ProgressBarDemo']" md-raised-button color="primary">Progress Bar</button>
    <button md-raised-button color="primary" disabled>Tabs</button>
  `
})
export class Home {
}
