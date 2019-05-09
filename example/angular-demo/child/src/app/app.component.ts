import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isIFrame: boolean;
  constructor() {
    if (window !== window.top) { this.isIFrame = true; }
  }
  IFrameCancel() {
    alert('are you sure you want to cancel?');
    parent.postMessage({
      type: 'ROCKETLOANS_CANCEL',
      payload: {}
    }, '*');
  }
  IFrameSuccess() {
    parent.postMessage({
      type: 'ROCKETLOANS_SUCCESS',
      payload: {}
    }, '*');
  }
  IFrameExit() {
    parent.postMessage({
      type: 'ROCKETLOANS_EXIT',
      payload: {}
    }, '*');
  }
  IFrameError() {
    parent.postMessage({
      type: 'ROCKETLOANS_ERROR',
      payload: {}
    }, '*');
  }
  IFrameEvent() {
    parent.postMessage({
      type: 'ROCKETLOANS_EVENT',
      payload: {}
    }, '*');
  }
}
