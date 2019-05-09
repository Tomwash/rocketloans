import { Component } from '@angular/core';
import { Styles, CallBacks, loadIFrame } from '../../../../../dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  link: string;
  event: MessageEvent;
  JSON: any;
  constructor() {
    this.link = 'http://localhost:4201';
    this.JSON = JSON;
  }
  loadIFrame() {
    const callback: CallBacks = {
      cancel: (event) => {
        console.log('This is a parent callback | cancel', event);
        const logger = document.getElementById('logger');
        if (logger) {
          logger.innerHTML =
            `${event.data.type} was fired from IFrame | payload: ${JSON.stringify(event.data.payload)} <br/>` + logger.innerHTML;
        }
      },
      error: (event) => {
        console.log('This is a parent callback | cancel', event);
        const logger = document.getElementById('logger');
        if (logger) {
          logger.innerHTML =
            `${event.data.type} was fired from IFrame | payload: ${JSON.stringify(event.data.payload)} <br/>` + logger.innerHTML;
        }
      },
      events: (event) => {
        console.log('This is a parent callback | cancel', event);
        const logger = document.getElementById('logger');
        if (logger) {
          logger.innerHTML =
            `${event.data.type} was fired from IFrame | payload: ${JSON.stringify(event.data.payload)} <br/>` + logger.innerHTML;
        }
      },
      exit: (event) => {
        console.log('This is a parent callback | cancel', event);
        const logger = document.getElementById('logger');
        if (logger) {
          logger.innerHTML =
            `${event.data.type} was fired from IFrame | payload: ${JSON.stringify(event.data.payload)} <br/>` + logger.innerHTML;
        }
      },
      success: (event) => {
        console.log('This is a parent callback | cancel', event);
        const logger = document.getElementById('logger');
        if (logger) {
          logger.innerHTML =
            `${event.data.type} was fired from IFrame | payload: ${JSON.stringify(event.data.payload)} <br/>` + logger.innerHTML;
        }
      }
    };

    const styles: Styles = {
      height: 90,
      width: 90,
      hasBackdrop: true
    };

    // http to rl to get link

    loadIFrame(this.link, callback, styles);
  }
}
