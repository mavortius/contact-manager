import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { autoinject } from 'aurelia-framework';

import { WebAPI } from "./web-api";

@autoinject
export class App {
  router: Router;

  constructor(public api: WebAPI) {
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Contacts';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('no-selection'), title: 'Select' },
      { route: 'contacts/:id', moduleId: PLATFORM.moduleName('contact-detail/contact-detail'), name: 'contacts' }
    ]);

    this.router = router;
  }
}
