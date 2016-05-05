import {Component} from 'angular2/core';
import {MdButton} from '../material2/src/components/button/button';
import {MdProgressBar} from '../material2/src/components/progress-bar/progress-bar';

@Component({
  selector: 'progress-bar-demo',
  template: `
    <div class="demo-progress-bar-container">
      <md-progress-bar [value]="bufferProgressValue"
                       [bufferValue]="bufferBufferValue"
                       mode="determinate"
                       color="warn"
                       class="demo-progress-bar-margins">
      </md-progress-bar>
    </div>
  `,
  styleUrls: ['app/progress-bar-demo.css'],
  directives: [MdProgressBar, MdButton]
})
export class ProgressBarDemo {
  determinateProgressValue: number = 30;
  bufferProgressValue: number = 30;
  bufferBufferValue: number = 40;
}
