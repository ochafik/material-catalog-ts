import {Component} from 'angular2/core';
import {MdButton} from '../material2/src/components/button/button';

@Component({
  selector: 'button-demo',
  directives: [MdButton],
  template: `
    <h3>Default</h3>
    <button md-button>Share</button>
    <button md-button>Explore</button><div>

    <h3>Raised</h3>
    <button md-raised-button class="raised">Share</button>
    <button md-raised-button class="raised">Explore</button>

    <h3>Disabled</h3>
    <button disabled md-button disabled="">Share</button>
    <button disabled md-raised-button disabled="" class="raised">Explore</button>

    <h3>Custom colors</h3>
    <button md-raised-button color="warn" class="raised">Share</button>
    <button md-raised-button color="primary" >Explore</button>
  `
})
export class ButtonDemo {
}
