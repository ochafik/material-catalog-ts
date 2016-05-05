import {bootstrap} from 'angular2/platform/browser';
import {DemoApp} from './demo-app';


import {HAMMER_GESTURE_CONFIG} from 'angular2/src/platform/browser_common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {MdIconRegistry} from '../material2/src/components/icon/icon-registry';
import {OVERLAY_CONTAINER_TOKEN} from '../material2/src/core/overlay/overlay';
import {provide} from 'angular2/core';
import {createOverlayContainer} from '../material2/src/core/overlay/overlay-container';
import {Renderer} from 'angular2/core';
import {MdGestureConfig} from '../material2/src/core/gestures/MdGestureConfig';
import 'rxjs/Rx';

bootstrap(DemoApp, [
  ROUTER_PROVIDERS, provide(OVERLAY_CONTAINER_TOKEN, {useValue: createOverlayContainer()}),
  HTTP_PROVIDERS, MdIconRegistry, Renderer,
  provide(HAMMER_GESTURE_CONFIG, {useClass: MdGestureConfig})
]);
