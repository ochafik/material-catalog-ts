import {Component} from 'angular2/core';
import {MdButton} from '../material2/src/components/button/button';
import {MdCard, MdCardHeader, MdCardTitleGroup} from '../material2/src/components/card/card';
import {MdCheckbox} from '../material2/src/components/checkbox/checkbox';
import {MdInput, MdPlaceholder, MdHint} from '../material2/src/components/input/input';
import {MdList} from '../material2/src/components/list/list';
import {MdProgressBar} from '../material2/src/components/progress-bar/progress-bar';
import {MdProgressCircle} from '../material2/src/components/progress-circle/progress-circle';
import {MdRadioGroup, MdRadioButton} from '../material2/src/components/radio/radio';
import {MdSidenav, MdSidenavLayout} from '../material2/src/components/sidenav/sidenav';
import {MdToolbar} from '../material2/src/components/toolbar/toolbar';

@Component({
  selector: 'catalog-app',
  directives: [
    MdButton, MdCard, MdCardHeader, MdCardTitleGroup, MdCheckbox, MdInput, MdPlaceholder, MdHint,
    MdList, MdProgressBar, MdProgressCircle, MdRadioGroup, MdRadioButton, MdSidenav,
    MdSidenavLayout, MdToolbar
  ],
  template: `
      <h1>Angular 2 Catalog App</h1>
      <button md-button>FLAT</button>
      <button md-raised-button>RAISED</button>
      <button md-icon-button>
          <i class="material-icons md-24">favorite</i>
      </button>
      <button md-fab>
          <i class="material-icons md-24">add</i>
      </button>
      <button md-mini-fab>
          <i class="material-icons md-24">add</i>
      </button>
      <md-checkbox [checked]="false" aria-label="My standalone checkbox"></md-checkbox>
    `
})
export class AppComponent {
}
