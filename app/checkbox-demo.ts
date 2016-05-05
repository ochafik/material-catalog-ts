import {Component} from 'angular2/core';
import {MdCheckbox} from '../material2/src/components/checkbox/checkbox';

@Component({
  selector: 'button-demo',
  directives: [MdCheckbox],
  template: `
      <md-checkbox disabled>Oxygen2</md-checkbox><br/>
      <md-checkbox>Carbon</md-checkbox><br/>
      <md-checkbox [checked]="checked" (change)="handleCheckbox()">Hydrogen</md-checkbox><br/>
      <md-checkbox [checked]="checked" noink>Nitrogen</md-checkbox><br/>
      <md-checkbox [checked]="checked">Calcium</md-checkbox><br/>
      <md-checkbox disabled="{{disabled}}">Oxygen</md-checkbox><br/>
      <md-checkbox disabled="{{disabled}}">Carbon</md-checkbox><br/>
      <md-checkbox disabled="{{disabled}}" [checked]="checked">Hydrogen</md-checkbox><br/>
      <md-checkbox disabled="{{disabled}}" [checked]="checked">Nitrogen</md-checkbox><br/>
      <md-checkbox disabled="{{disabled}}" [checked]="checked">Calcium</md-checkbox><br/>
  `
})
export class CheckboxDemo {
  checked = true;
  disabled = true;

  handleCheckbox(value: Event) { console.log(`Value: ${value}`); }
}
