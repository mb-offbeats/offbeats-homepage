import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {provideRouter, withInMemoryScrolling, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withViewTransitions(), // Optional: Adds nice fade effect on page change
      withInMemoryScrolling({
        anchorScrolling: 'enabled', // This enables scrolling to fragments
        scrollPositionRestoration: 'enabled' // Scrolls to top when route changes
      })
    )
  ]
};
